import { packs } from "@/lib/demo-data";

const recommendations = [
  "Complete AI policy attestation before student access activation.",
  "Assign principal cohort to Governance Essentials training module.",
  "Start with AI Enablement Pack and Projects Pack for term 1.",
  "Enable recommended tools only; defer consultant-only high-cost tools.",
  "Run 30/60/90 day executive review checkpoints."
];

export default function TransformationPage() {
  return (
    <main className="grid gap-4 md:grid-cols-2">
      <section className="card space-y-2">
        <h2 className="text-lg font-semibold">Transformation Copilot</h2>
        <p className="text-sm text-slate-300">AI-assisted recommendations with human approval workflow.</p>
        <p className="text-sm">Readiness summary: <strong>Developing</strong>. Major blockers: policy attestation, staff training completion, and device coverage.</p>
        <h3 className="font-medium">Recommended next actions</h3>
        <ul className="list-disc space-y-1 pl-5 text-sm">
          {recommendations.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </section>
      <section className="card space-y-2">
        <h3 className="font-semibold">30 / 60 / 90 day plan draft</h3>
        <ul className="space-y-1 text-sm text-slate-300">
          <li><strong>30:</strong> Governance baseline, training launch, pilot tool approvals.</li>
          <li><strong>60:</strong> Pack milestones, classroom walkthrough evidence, ticket triage reduction.</li>
          <li><strong>90:</strong> Executive report export, scale decision, budget roadmap.</li>
        </ul>
        <h3 className="font-semibold">Pack recommendations</h3>
        <div className="flex flex-wrap gap-2 text-xs">
          {packs.map((pack) => <span className="rounded bg-slate-800 px-2 py-1" key={pack.slug}>{pack.title}</span>)}
        </div>
      </section>
    </main>
  );
}
