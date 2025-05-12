'use client';
import React from "react";
import { Clock } from "lucide-react";
import { cn } from "@/lib/utils";

type TimelineItem = {
  id?: string | number;
  event: string;
  timestamp: string;
  status?: string;
};

type TimelineProps = {
  items: TimelineItem[];
};

export default function Timeline({ items }: TimelineProps) {
  if (!items || items.length === 0) {
    return (
      <div className="text-slate-400 dark:text-slate-500 italic">No timeline data available.</div>
    );
  }
  return (
    <ol className="relative border-l-2 border-indigo-200 dark:border-indigo-800 ml-2">
      {items.map((item, idx) => (
        <li key={item.id ?? idx} className="mb-8 ml-6 group">
          <span className={cn(
            "absolute flex items-center justify-center w-7 h-7 bg-indigo-500 rounded-full -left-4 border-4 border-white dark:border-slate-900 shadow-md group-hover:scale-110 transition-transform"
          )}>
            <Clock className="w-4 h-4 text-white" />
          </span>
          <div className="flex flex-col gap-1">
            <span className="font-medium text-slate-800 dark:text-slate-100">{item.event}</span>
            <span className="text-xs text-slate-500 dark:text-slate-400">{new Date(item.timestamp).toLocaleString()}</span>
            {item.status && (
              <span className="inline-block mt-1 px-2 py-0.5 rounded bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200 text-xs font-semibold">
                {item.status}
              </span>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}
