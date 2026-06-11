"use client";
import React from "react";
import { SidebarTrigger } from "./ui/sidebar";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import {
  BellRing,
  ChevronDown,
  LogOut,
  Mail,
  Settings,
  User,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

const navBtn = cn(
  "p-2 me-2 rounded-full cursor-pointer",
  "text-gray-400 dark:text-gray-500",
  "hover:bg-green-50 dark:hover:bg-green-950/40",
  "hover:text-gray-900 dark:hover:text-gray-100",
  "transition-all duration-300 ease-in-out",
);

const dropdownItem = cn(
  "gap-2.5 py-2 px-2.5 rounded-md text-sm cursor-pointer",
  "text-gray-400 dark:text-gray-500",
  "transition-all duration-300 ease-in-out",
  "hover:translate-x-1 hover:bg-green-50 dark:hover:bg-green-950/40",
  "hover:text-gray-900 dark:hover:text-gray-100",
);

export default function Navbar() {
  return (
    <div className="flex items-center">
      <SidebarTrigger className="mt-2" />
      <div className="flex flex-1 items-center justify-between p-2 mt-2">
        <Input
          placeholder="Search Task"
          className="w-64 focus-visible:ring-2 focus-visible:border-0 focus-visible:ring-green-700"
        />

        <div className="flex items-center">
          <div className="flex border-r-2 border-gray-300 dark:border-gray-700 me-2">
            <button className={navBtn}>
              <Mail className="size-5" />
            </button>
            <button className={navBtn}>
              <BellRing className="size-5" />
            </button>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div
                className={cn(
                  "flex items-center gap-2 px-2 py-1.5 rounded-xl cursor-pointer select-none",
                  "transition-all duration-300 ease-in-out",
                  "hover:bg-green-50 dark:hover:bg-green-950/40",
                )}
              >
                <Avatar className="w-8 h-8">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                    className="grayscale"
                  />
                  <AvatarFallback>EH</AvatarFallback>
                </Avatar>
                <div className="flex flex-col leading-tight">
                  <span className="text-sm font-medium">Elsayed Hossny</span>
                  <span className="text-[11px] text-muted-foreground">
                    elsayedhossny512@gmail.com
                  </span>
                </div>
                <ChevronDown className="size-4 text-gray-400 ms-1 transition-transform duration-300 group-data-[state=open]:rotate-180" />
              </div>
            </DropdownMenuTrigger>

            <DropdownMenuContent
              align="end"
              className="w-52 mt-1 rounded-xl p-1.5"
            >
              <DropdownMenuItem className={dropdownItem}>
                <User className="size-4 shrink-0" />
                Profile
              </DropdownMenuItem>

              <DropdownMenuItem asChild className={dropdownItem}>
                <Link href="/settings" className="flex items-center gap-2.5">
                  <Settings className="size-4 shrink-0" />
                  Settings
                </Link>
              </DropdownMenuItem>

              <DropdownMenuSeparator className="my-1" />

              <DropdownMenuItem
                asChild
                className={cn(
                  "gap-2.5 py-2 px-2.5 rounded-md text-sm cursor-pointer",
                  "text-red-400 dark:text-red-500",
                  "transition-all duration-300 ease-in-out",
                  "hover:translate-x-1 hover:bg-red-50 dark:hover:bg-red-950/30",
                  "hover:text-red-600 dark:hover:text-red-400",
                )}
              >
                <Link href="/logout" className="flex items-center gap-2.5">
                  <LogOut className="size-4 shrink-0" />
                  Log out
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}
