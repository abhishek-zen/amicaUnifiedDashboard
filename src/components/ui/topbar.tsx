import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";

export default function TopBar() {
  return (
    <header className="sticky top-0 z-30 flex items-center h-16 px-6 bg-white/90 dark:bg-slate-900/90 border-b border-slate-200 dark:border-slate-800 shadow-sm">
      <div className="flex items-center gap-4">
        <Link href="/dashboard" className="flex items-center gap-2 font-bold text-indigo-700 dark:text-indigo-300 text-xl tracking-tight">
          <span className="inline-block">
            <svg width="28" height="28" viewBox="0 0 48 48" fill="none" className="mr-1">
              <rect width="48" height="48" rx="14" fill="#6366F1"/>
              <path d="M16 32V20C16 18.8954 16.8954 18 18 18H30C31.1046 18 32 18.8954 32 20V32" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="24" cy="26" r="3.5" fill="#fff"/>
            </svg>
          </span>
          Admin Dashboard
        </Link>
      </div>
      <nav className="ml-auto flex items-center gap-6">
        <Link href="/dashboard" className={cn("text-slate-700 dark:text-slate-100 text-base font-medium hover:underline underline-offset-4")}>
          Overview
        </Link>
        <Link href="/dashboard/compliance" className={cn("text-slate-700 dark:text-slate-100 text-base font-medium hover:underline underline-offset-4")}>
          Compliance
        </Link>
        <Link href="/dashboard/settings" className={cn("text-slate-700 dark:text-slate-100 text-base font-medium hover:underline underline-offset-4")}>
          Settings
        </Link>
      </nav>
      <button
        className="ml-6 block lg:hidden text-slate-500 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-300 focus:outline-none"
        aria-label="Open menu"
      >
        <Menu className="w-7 h-7" />
      </button>
    </header>
  );
}
