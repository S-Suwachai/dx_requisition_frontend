"use client";
import { useSidebar } from "@/context/SidebarContext";
import AppHeader from "../../layout/AppHeader";
import AppSidebar from "../../layout/AppSidebar";
import React from "react";
import { GridIcon, PencilIcon, PaperPlaneIcon, GroupIcon, ListIcon } from "@/icons";
import { usePathname } from "next/navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { isExpanded, isHovered, isMobileOpen } = useSidebar();
  const mainContentMargin = isMobileOpen ? "ml-0" : isExpanded || isHovered ? "lg:ml-[290px]" : "lg:ml-[90px]";

  const navItems = [
    {
      icon: <GridIcon />,
      name: "Dashboard",
      path: `${pathname.split("/")[1] ? "/" + pathname.split("/")[1] : ""}`, // แก้ให้ชัดเจน
    },
    {
      icon: <PencilIcon />,
      name: "New Request",
      path: `/${pathname.split("/")[1]}/new_request`,
    },
    {
      icon: <PaperPlaneIcon />,
      name: "Request Management",
      path: `/${pathname.split("/")[1]}/request_management`,
    },
    {
      icon: <GroupIcon />,
      name: "User Management",
      path: `/${pathname.split("/")[1]}/user_management`,
    },
    {
      icon: <ListIcon />,
      name: "Work Archive",
      path: `/${pathname.split("/")[1]}/work_archive`,
    },
  ];

  return (
    <div className="min-h-screen xl:flex">
      <AppSidebar navItems={navItems} />
      <div className={`flex-1 transition-all  duration-300 ease-in-out ${mainContentMargin}`}>
        <AppHeader />
        <div className="p-4 mx-auto max-w-(--breakpoint-2xl) md:p-6">{children}</div>
      </div>
    </div>
  );
}
