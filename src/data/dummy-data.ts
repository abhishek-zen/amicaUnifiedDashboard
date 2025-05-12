// Dummy data for metrics
export const dummyMetrics = [
  {
    id: 1,
    label: "Policy Coverage",
    value: "78%",
    icon: "shield",
    delta: "+5%",
    trend: "up",
    color: "green",
    created_at: new Date().toISOString(),
  },
  {
    id: 2,
    label: "Active Users",
    value: "1,245",
    icon: "users",
    delta: "+12%",
    trend: "up",
    color: "blue",
    created_at: new Date().toISOString(),
  },
  {
    id: 3,
    label: "Compliance Score",
    value: "92/100",
    icon: "check-circle",
    delta: "+3",
    trend: "up",
    color: "green",
    created_at: new Date().toISOString(),
  },
  {
    id: 4,
    label: "Open Issues",
    value: "7",
    icon: "alert-triangle",
    delta: "-2",
    trend: "down",
    color: "amber",
    created_at: new Date().toISOString(),
  },
];

// Dummy data for coverage chart
export const dummyCoverageData = [
  { time_frame: "Jan", value: 65 },
  { time_frame: "Feb", value: 59 },
  { time_frame: "Mar", value: 70 },
  { time_frame: "Apr", value: 68 },
  { time_frame: "May", value: 72 },
  { time_frame: "Jun", value: 75 },
  { time_frame: "Jul", value: 78 },
  { time_frame: "Aug", value: 82 },
  { time_frame: "Sep", value: 81 },
  { time_frame: "Oct", value: 85 },
  { time_frame: "Nov", value: 87 },
  { time_frame: "Dec", value: 89 },
];

// Dummy data for timeline
export const dummyTimelineData = [
  {
    id: 1,
    event: "Policy Update Completed",
    timestamp: "2025-05-12T10:30:00Z",
    status: "success",
  },
  {
    id: 2,
    event: "Compliance Check Failed",
    timestamp: "2025-05-11T15:45:00Z",
    status: "error",
  },
  {
    id: 3,
    event: "User Training Session",
    timestamp: "2025-05-10T09:15:00Z",
    status: "info",
  },
  {
    id: 4,
    event: "System Maintenance",
    timestamp: "2025-05-09T22:00:00Z",
    status: "warning",
  },
  {
    id: 5,
    event: "New Regulation Added",
    timestamp: "2025-05-08T11:20:00Z",
    status: "info",
  },
  {
    id: 6,
    event: "Quarterly Audit Completed",
    timestamp: "2025-05-07T16:30:00Z",
    status: "success",
  },
  {
    id: 7,
    event: "Security Alert Resolved",
    timestamp: "2025-05-06T14:10:00Z",
    status: "warning",
  },
  {
    id: 8,
    event: "Policy Review Meeting",
    timestamp: "2025-05-05T13:00:00Z",
    status: "info",
  },
];

// Dummy data for actions
export const dummyActionsData = [
  {
    id: 1,
    label: "Run Compliance Check",
    description: "Analyze current setup against compliance requirements",
    action_handler: "runComplianceCheck",
    created_at: new Date().toISOString(),
  },
  {
    id: 2,
    label: "Update Policies",
    description: "Review and update organizational policies",
    action_handler: "updatePolicies",
    created_at: new Date().toISOString(),
  },
  {
    id: 3,
    label: "Schedule Training",
    description: "Set up training sessions for team members",
    action_handler: "scheduleTraining",
    created_at: new Date().toISOString(),
  },
  {
    id: 4,
    label: "View Reports",
    description: "Access detailed compliance reports",
    action_handler: "viewReports",
    created_at: new Date().toISOString(),
  },
];

// Dummy insights data
export const dummyInsightsData = [
  {
    title: "Anomaly Detected",
    confidence: 0.91,
    rationale: "Spike in user activity at 10:00AM. Suggest reviewing triggered events.",
  },
  {
    title: "Policy Coverage Improved",
    confidence: 0.83,
    rationale: "Recent onboarding increased coverage by 5%. Continue the current training protocol.",
  },
];