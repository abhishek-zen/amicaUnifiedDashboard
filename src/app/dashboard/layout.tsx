import React from "react";
import TopBar from "@/components/ui/topbar";
import SideNav from "@/components/ui/sidenav";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-200 dark:from-slate-900 dark:to-slate-800">
      <TopBar />
      <div className="flex flex-row h-[calc(100vh-64px)]">
        <SideNav />
        <main className="flex-1 overflow-y-auto p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
