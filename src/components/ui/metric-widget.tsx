'use client';
import React from "react";
import { cn } from "@/lib/utils";
import { TrendingUp, TrendingDown, Info } from "lucide-react";

type MetricWidgetProps = {
  label: string;
  value: number | string;
  icon?: React.ReactNode;
  delta?: number;
  trend?: "up" | "down" | "neutral";
  color?: string;
};

const trendIcons = {
  up: <TrendingUp className="w-5 h-5 text-green-500" />,
  down: <TrendingDown className="w-5 h-5 text-red-500" />,
  neutral: <Info className="w-5 h-5 text-gray-400" />,
};

export default function MetricWidget({
  label,
  value,
  icon,
  delta,
  trend = "neutral",
  color = "bg-indigo-500",
}: MetricWidgetProps) {
  return (
    <div
      className={cn(
        "rounded-2xl p-6 flex items-center gap-6 bg-white/80 dark:bg-slate-900/80 shadow-lg hover:shadow-2xl transition-shadow duration-200"
      )}
      aria-label={`Metric widget for ${label}`}
    >
      <div className={cn("rounded-xl w-14 h-14 flex items-center justify-center", color)}>
        {icon ?? <Info className="w-8 h-8 text-white" />}
      </div>
      <div className="flex-1">
        <div className="font-medium text-gray-600 dark:text-gray-300 text-sm mb-1">{label}</div>
        <div className="font-bold text-2xl text-slate-900 dark:text-white">{value}</div>
        {typeof delta === "number" && (
          <div className="flex items-center gap-1 mt-1">
            {trendIcons[trend]}
            <span
              className={cn(
                "text-xs font-semibold",
                trend === "up"
                  ? "text-green-600"
                  : trend === "down"
                  ? "text-red-600"
                  : "text-gray-500"
              )}
            >
              {delta > 0 ? "+" : ""}
              {delta}%
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
