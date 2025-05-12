'use client';
import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { ChartConfig, ChartContainer } from "./chart";

type CoverageChartProps = {
  data: { time_frame: string; value: number }[];
};

export default function CoverageChart({ data }: CoverageChartProps) {
  const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#2563eb",
  },
  mobile: {
    label: "Mobile",
    color: "#60a5fa",
  },
} satisfies ChartConfig

  return (
    <div className="w-full h-[260px]">
      {/* <ResponsiveContainer width="100%" height="100%"> */}
      <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
        <AreaChart data={data} margin={{ top: 12, right: 32, left: 0, bottom: 8 }}>
          <defs>
            <linearGradient id="coverageGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#6366F1" stopOpacity={0.6} />
              <stop offset="95%" stopColor="#6366F1" stopOpacity={0.05} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time_frame" tick={{ fill: "#64748b", fontSize: 13 }} />
          <YAxis tick={{ fill: "#64748b", fontSize: 13 }} />
          <Tooltip
            contentStyle={{
              background: "#fff",
              border: "none",
              boxShadow: "0 8px 32px rgba(0,0,0,0.11)",
            }}
            labelStyle={{ color: "#6366F1", fontWeight: 600 }}
          />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#6366F1"
            fillOpacity={1}
            fill="url(#coverageGradient)"
            dot={{ r: 3 }}
            activeDot={{ r: 5 }}
          />
        </AreaChart>
      {/* </ResponsiveContainer> */}
      </ChartContainer>
    </div>
  );
}
