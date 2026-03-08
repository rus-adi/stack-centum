import { packs } from "@/lib/demo-data";

export default function PackDetailPage({ params }: { params: { slug: string } }) {
  const pack = packs.find((p) => p.slug === params.slug);
  if (!pack) return <main className="card">Pack not found.</main>;
  return (
    <main className="card space-y-2">
      <h2 className="text-lg font-semibold">{pack.title}</h2>
      <p className="text-sm text-slate-300">Pillar: {pack.pillar}</p>
      <ul className="list-disc space-y-1 pl-5 text-sm">
        <li>Readiness checklist</li>
        <li>Suggested training modules</li>
        <li>Implementation milestones</li>
        <li>Templates and evidence artifacts</li>
        <li>Recommended tool categories and optional bundles</li>
      </ul>
    </main>
  );
}
