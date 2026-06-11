"use client";
import React from "react";
import ToggleMode from "./toggleMode";
import { SidebarTrigger } from "./ui/sidebar";
import { Input } from "@/components/ui/input";
import { BellRing, Mail } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Navbar() {
  return (
    <>
      <div className="flex items-center">
        <SidebarTrigger className="mt-2" />
        <div className="flex flex-1 items-center justify-between p-2 mt-2">
          <div className="flex">
            <Input
              placeholder="Search Task"
              className="focus-visible:ring-2 focus-visible:border-0 focus-visible:ring-green-700 w-100"
            />
          </div>
          <div className="flex items-center ">
            <div className="flex border-r-2 border-gray-300 dark:border-gray-700 me-2">
              <button className="hover:bg-gray-200 dark:hover:bg-gray-700 p-2 me-2 rounded-full transition-all duration-700 cursor-pointer">
                <Mail className="size-5" />
              </button>
              <button className="hover:bg-gray-200 dark:hover:bg-gray-700 p-2 me-2 rounded-full transition-all duration-700 cursor-pointer">
                <BellRing className=" size-5" />
              </button>
            </div>
            <div className="flex items-center">
              <button>
                <Avatar>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                    className="grayscale"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </button>
              <div className="ms-2 flex flex-col leading-tight">
                <span className="text-sm font-medium">Elsayed Hossny</span>
                <span className="text-[11px] text-muted-foreground">
                  elsayedhossny512@gmail.com
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
