import MetricWidget from "@/components/ui/metric-widget";
import CoverageChart from "@/components/ui/coverage-chart";
import Timeline from "@/components/ui/timeline";
import ActionPanel from "@/components/ui/action-panel";
import ExplainableInsightsPanel from "@/components/ui/explainable-insights-panel";
import { createServerClient } from "@/utils/supabase/server";

export default async function DashboardPage() {
  const supabase = createServerClient();

  // Fetch analytics data from Supabase (mock/fallback to empty if unavailable)
  const { data: metrics = [] } = await supabase
    .from("metrics")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(4);

  const { data: coverage = [] } = await supabase
    .from("metrics")
    .select("time_frame, value")
    .order("time_frame", { ascending: true });

  const { data: timeline = [] } = await supabase
    .from("timelines")
    .select("*")
    .order("timestamp", { ascending: false })
    .limit(8);

  const { data: actions = [] } = await supabase
    .from("actions")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(4);

  const insights = [
    {
      title: "Anomaly Detected",
      confidence: 0.91,
      rationale:
        "Spike in user activity at 10:00AM. Suggest reviewing triggered events.",
    },
    {
      title: "Policy Coverage Improved",
      confidence: 0.83,
      rationale:
        "Recent onboarding increased coverage by 5%. Continue the current training protocol.",
    },
  ];

  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
      <section className="col-span-1 xl:col-span-2 flex flex-col gap-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {metrics.map((metric: any, i: number) => (
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
