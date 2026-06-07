"use client";

import { usePathname } from "next/navigation";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
} from "@/components/ui/sidebar";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

// Using native <details> instead of a missing collapsible module

import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  CheckSquare,
  Calendar,
  BarChart3,
  Users,
  Settings,
  HelpCircle,
  LogOut,
  ChevronDown,
  Annoyed,
} from "lucide-react";

import Link from "next/link";
const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/" },
  {
    icon: CheckSquare,
    label: "Tasks",
    badge: "124",
    href: "/tasks",
    // children: [
    //   { label: "السجل", href: "/record" },
    //   { label: "المميز", href: "/featured" },
    // ],
  },
  { icon: Calendar, label: "Calendar", href: "/calendar" },
  { icon: BarChart3, label: "Analytics", href: "/analytics" },
  { icon: Users, label: "Team", href: "/team" },
  { icon: Settings, label: "Settings", href: "/settings" },
  { icon: HelpCircle, label: "Help", href: "/help" },
  { icon: LogOut, label: "Logout", href: "/logout" },
];

export function AppSidebar() {
  const pathname = usePathname();

  console.log(pathname);

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="text-center mt-4 mb-1">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-green-700 flex items-center justify-center transition-transform duration-200 group-hover:-rotate-6">
            <CheckSquare className="w-4 h-4 text-background" />
          </div>
          <span className="text-2xl font-medium tracking-tight group-data-[collapsible=icon]:hidden">
            Task<span className="text-2xl text-green-700">ooo</span>
          </span>
        </Link>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {menuItems.map((item) =>
              item.children ? (
                <Collapsible
                  key={item.label}
                  // defaultOpen
                  className="group/collapsible"
                >
                  <SidebarMenuItem>
                    <CollapsibleTrigger style={{ cursor: "pointer" }} asChild>
                      <SidebarMenuButton
                        className={cn(
                          "px-3 py-1 mb-1 text-gray-400 rounded-2xl transition-all duration-300",
                          pathname == item.href
                            ? "bg-green-700 text-white"
                            : "hover:bg-green-50 hover:px-4 hover:text-gray-950 ",
                        )}
                      >
                        <item.icon className="w-4 h-4 shrink-0" />
                        {/* {item.label} */}
                        <Link href={item.href}>{item.label}</Link>
                        <ChevronDown className="mr-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-180" />
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {item.children.map((child) => (
                          <SidebarMenuSubItem key={child.label}>
                            <SidebarMenuSubButton asChild>
                              <Link href={child.href}>{child.label}</Link>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </SidebarMenuItem>
                </Collapsible>
              ) : (
                <SidebarMenuItem key={item.label}>
                  <SidebarMenuButton
                    className={cn(
                      "px-3 py-5 mb-1 text-gray-400 rounded-2xl transition-all duration-300",
                      pathname == item.href
                        ? "bg-green-700 text-white"
                        : "hover:bg-green-50 hover:px-4 hover:text-gray-950 ",
                    )}
                    asChild
                  >
                    <Link key={item.label} href={item.href}>
                      <item.icon className="w-4 h-4 shrink-0" />
                      <span className="group-data-[collapsible=icon]:hidden">
                        {item.label}
                      </span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ),
            )}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter></SidebarFooter>
    </Sidebar>
  );
}
