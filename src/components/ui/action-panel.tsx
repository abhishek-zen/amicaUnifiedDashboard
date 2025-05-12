'use client';
import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Zap } from "lucide-react";

type Action = {
  id?: string | number;
  label: string;
  description?: string;
  onClick?: () => void;
  icon?: React.ReactNode;
};

type ActionPanelProps = {
  actions: Action[];
};

export default function ActionPanel({ actions }: ActionPanelProps) {
  if (!actions || actions.length === 0) {
    return (
      <div className="text-slate-400 dark:text-slate-500 italic">No actions available.</div>
    );
  }
  return (
    <div className="flex flex-col gap-4">
      {actions.map((action, idx) => (
        <div key={action.id ?? idx} className="flex items-center gap-3">
          <div className="rounded-lg bg-indigo-100 dark:bg-indigo-900 w-10 h-10 flex items-center justify-center">
            {action.icon ?? <Zap className="w-5 h-5 text-indigo-600 dark:text-indigo-300" />}
          </div>
          <div className="flex-1">
            <div className="font-medium text-slate-800 dark:text-slate-100">{action.label}</div>
            {action.description && (
              <div className="text-xs text-slate-500 dark:text-slate-400">{action.description}</div>
            )}
          </div>
          <Button
            variant="secondary"
            size="sm"
            className={cn("ml-2")}
            onClick={action.onClick}
            aria-label={`Perform action: ${action.label}`}
          >
            Run
          </Button>
        </div>
      ))}
    </div>
  );
}
