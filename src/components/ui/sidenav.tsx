'use client';
import React, { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ShieldCheck, BarChart3, Settings, Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

type NavItem = {
  href: string;
  label: string;
  icon: React.ReactNode;
  permission?: string; // "admin", "viewer", etc.
};

const navItems: NavItem[] = [
  {
    href: "/dashboard",
    label: "Overview",
    icon: <BarChart3 className="w-5 h-5" />,
  },
  {
    href: "/dashboard/compliance",
    label: "Compliance",
    icon: <ShieldCheck className="w-5 h-5" />,
  },
  {
    href: "/dashboard/settings",
    label: "Settings",
    icon: <Settings className="w-5 h-5" />,
    permission: "admin",
  },
];

export default function SideNav() {
  // For demo, assume user has "admin" permission
  const userPermission = "admin";
  const mobile = useIsMobile();
  const [open, setOpen] = useState(false);

  const filteredNav = navItems.filter(
    (item) => !item.permission || item.permission === userPermission
  );

  if (mobile) {
    return (
      <>
        <button
          className="fixed left-4 top-20 z-40 rounded-lg p-2 bg-indigo-600 text-white shadow-lg lg:hidden"
          onClick={() => setOpen(true)}
          aria-label="Open sidebar"
        >
          <Menu className="w-7 h-7" />
        </button>
        <div
          className={cn(
            "fixed inset-0 bg-black/30 z-40 transition-opacity",
            open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          )}
          onClick={() => setOpen(false)}
        />
        <nav
          className={cn(
            "fixed top-0 left-0 h-full w-72 bg-white dark:bg-slate-900 shadow-2xl z-50 transform transition-transform",
            open ? "translate-x-0" : "-translate-x-full"
          )}
          aria-label="Sidebar"
        >
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800">
            <span className="font-semibold text-lg text-indigo-700 dark:text-indigo-300">
              Navigation
            </span>
            <button
              className="p-2 rounded hover:bg-slate-100 dark:hover:bg-slate-800"
              onClick={() => setOpen(false)}
              aria-label="Close sidebar"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <ul className="p-6 flex flex-col gap-2">
            {filteredNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 px-4 py-2 rounded-lg text-base font-medium hover:bg-indigo-100 dark:hover:bg-indigo-900 transition-colors",
                    "text-slate-700 dark:text-slate-200"
                  )}
                  onClick={() => setOpen(false)}
                >
                  {item.icon}
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </>
    );
  }

  return (
    <nav className="hidden lg:block min-w-[210px] max-w-[250px] h-full bg-white/60 dark:bg-slate-900/70 border-r border-slate-200 dark:border-slate-800 py-8 pr-2 pl-0 shadow-md">
      <ul className="flex flex-col gap-2">
        {filteredNav.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-5 py-3 rounded-lg text-base font-medium hover:bg-indigo-100 dark:hover:bg-indigo-900 transition-colors",
                "text-slate-700 dark:text-slate-200"
              )}
            >
              {item.icon}
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
