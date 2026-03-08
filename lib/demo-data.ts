export type GovernanceDoc = { id: string; title: string; category: string; fileUrl: string; content: string };

export const schools = [
  { id: "onboarding", name: "Greenfield Academy", stage: "Onboarding", readiness: 34 },
  { id: "pilot", name: "Harbor International School", stage: "Pilot", readiness: 57 },
  { id: "scale", name: "Summit Future School", stage: "Scale", readiness: 79 }
];

export const governanceDocs: Record<string, GovernanceDoc[]> = {
  pilot: [
    {
      id: "doc-1",
      title: "Behavior & Incident Escalation SOP",
      category: "Incident Escalation SOP",
      fileUrl: "/demo/behavior-sop.pdf",
      content:
        "If a student causes physical harm, separate students immediately, notify the duty leader, document incident in 30 minutes, and contact parents before end of day. Suspension decisions require principal review."
    },
    {
      id: "doc-2",
      title: "AI Usage Policy",
      category: "AI Usage Policy",
      fileUrl: "/demo/ai-policy.pdf",
      content:
        "Student AI access can be enabled only after leadership signs policy attestation, completes teacher training, and confirms guardian communication."
    }
  ]
};

export const packs = [
  { slug: "ai-enablement-pack", title: "AI Enablement Pack", pillar: "AI" },
  { slug: "individualized-learning-pack", title: "Individualized Learning Pack", pillar: "Individualized Learning" },
  { slug: "projects-pack", title: "Projects Pack", pillar: "Projects" },
  { slug: "social-emotional-learning-pack", title: "Social-Emotional Learning Pack", pillar: "SEL" }
];

export const scorecard = {
  readiness: 57,
  gatesCompleted: 9,
  gatesBlocked: 3,
  trainingCompletionRate: "68%",
  approvedToolsEnabled: 4,
  recommendationToActivation: "12 days",
  openBlockers: 5,
  unresolvedTickets: 4,
  governanceCoverage: "83%",
  policyAttestationCompletion: "71%"
};
