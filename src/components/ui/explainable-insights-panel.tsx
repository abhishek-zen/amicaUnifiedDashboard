'use client';
import React from "react";
import { CheckCircle, Info } from "lucide-react";
import { cn } from "@/lib/utils";

type Insight = {
  title: string;
  confidence: number; // 0...1
  rationale: string;
};

type ExplainableInsightsPanelProps = {
  insights: Insight[];
};

function confidenceColor(conf: number) {
  if (conf >= 0.9) return "bg-green-200 text-green-900 dark:bg-green-900 dark:text-green-200";
  if (conf >= 0.7) return "bg-yellow-200 text-yellow-900 dark:bg-yellow-900 dark:text-yellow-200";
  return "bg-red-200 text-red-900 dark:bg-red-900 dark:text-red-200";
}

export default function ExplainableInsightsPanel({ insights }: ExplainableInsightsPanelProps) {
  if (!insights || insights.length === 0) {
    return <div className="text-slate-400 dark:text-slate-500 italic">No insights available.</div>;
  }
  return (
    <ul className="flex flex-col gap-6">
      {insights.map((insight, idx) => (
        <li key={idx} className="flex gap-4 items-start">
          <div className={cn("w-9 h-9 flex items-center justify-center rounded-lg bg-indigo-100 dark:bg-indigo-900 mt-1")}>
            <CheckCircle className="w-6 h-6 text-indigo-600 dark:text-indigo-300" />
          </div>
          <div className="flex-1">
            <div className="font-semibold text-slate-900 dark:text-white">{insight.title}</div>
            <div
              className={cn(
                "inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold mt-1 mb-2",
                confidenceColor(insight.confidence)
              )}
              aria-label={`Confidence score: ${(insight.confidence * 100).toFixed(0)}%`}
            >
              <Info className="w-3 h-3 opacity-70" />
              {`Confidence ${(insight.confidence * 100).toFixed(0)}%`}
            </div>
            <div className="text-xs text-slate-600 dark:text-slate-300">{insight.rationale}</div>
          </div>
        </li>
      ))}
    </ul>
  );
}
