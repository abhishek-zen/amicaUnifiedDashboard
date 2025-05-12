import MetricWidget from "@/components/ui/metric-widget";
import CoverageChart from "@/components/ui/coverage-chart";
import Timeline from "@/components/ui/timeline";
import ActionPanel from "@/components/ui/action-panel";
import ExplainableInsightsPanel from "@/components/ui/explainable-insights-panel";
import { createClient } from "@/utils/supabase/server";

// Import dummy data
import {
  dummyMetrics,
  dummyCoverageData,
  dummyTimelineData,
  dummyActionsData,
  dummyInsightsData,
} from "@/data/dummy-data";

// Define types for our data
type CoverageDataPoint = {
  time_frame: string;
  value: number;
};

export default async function DashboardPage() {
  const supabase = await createClient();
  let metrics = [];
  let coverage: CoverageDataPoint[] = [];
  let timeline = [];
  let actions = [];
  let insights = dummyInsightsData; // Default to dummy insights

  try {
    // Try to fetch from Supabase first
    const { data: metricsData } = await supabase
      .from("metrics")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(4);

    // Add proper type casting and default to dummy data if null
    const { data: coverageData } = await supabase
      .from("metrics")
      .select("time_frame, value")
      .order("time_frame", { ascending: true });

    // Ensure coverage data is never null and has the right types
    coverage =
      coverageData?.map((item) => ({
        time_frame: String(item.time_frame),
        value: Number(item.value),
      })) || dummyCoverageData;

    // Ensure timeline data is properly typed and never null
    const { data: timelineData } = await supabase
      .from("timelines")
      .select("*")
      .order("timestamp", { ascending: false })
      .limit(8);

    // Convert to TimelineItem[] and ensure it's not null
    timeline =
      timelineData?.map((item) => ({
        id: item.id,
        event: String(item.event),
        timestamp: String(item.timestamp),
        status: item.status ? String(item.status) : undefined,
      })) || dummyTimelineData;

    const { data: actionsData } = await supabase
      .from("actions")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(4);

    // Convert to Action[] and ensure it's not null
    actions =
      actionsData?.map((item) => ({
        id: item.id,
        label: String(item.label),
        description: item.description ? String(item.description) : undefined,
        onClick: item.action_handler
          ? () => console.log(`Action triggered: ${item.label}`)
          : undefined,
      })) || dummyActionsData;

    // Use fetched metrics or fall back to dummy data
    metrics = metricsData || dummyMetrics;
  } catch (error) {
    console.error("Error fetching data:", error);
    // Use dummy data as fallback
    metrics = dummyMetrics;
    coverage = dummyCoverageData;
    timeline = dummyTimelineData;
    actions = dummyActionsData;
  }

  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
      <section className="col-span-1 xl:col-span-2 flex flex-col gap-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {metrics?.map((metric: any, i: number) => (
            <MetricWidget
              key={metric.id ?? i}
              label={metric.label}
              value={metric.value}
              icon={metric.icon}
              delta={metric.delta}
              trend={metric.trend}
              color={metric.color}
            />
          ))}
        </div>
        <div className="bg-white/80 dark:bg-slate-900/80 rounded-2xl p-6 shadow-lg min-h-[340px] flex flex-col">
          <h2 className="font-semibold text-lg mb-4">Policy Coverage</h2>
          <CoverageChart data={coverage} />
        </div>
        <div className="bg-white/80 dark:bg-slate-900/80 rounded-2xl p-6 shadow-lg flex-1 min-h-[220px]">
          <h2 className="font-semibold text-lg mb-4">Compliance Timeline</h2>
          <Timeline items={timeline} />
        </div>
      </section>
      <aside className="col-span-1 flex flex-col gap-8">
        <div className="bg-white/80 dark:bg-slate-900/80 rounded-2xl p-6 shadow-lg min-h-[160px]">
          <h2 className="font-semibold text-lg mb-4">Actions</h2>
          <ActionPanel actions={actions} />
        </div>
        <div className="bg-white/80 dark:bg-slate-900/80 rounded-2xl p-6 shadow-lg min-h-[180px]">
          <h2 className="font-semibold text-lg mb-4">Explainable Insights</h2>
          <ExplainableInsightsPanel insights={insights} />
        </div>
      </aside>
    </div>
  );
}
