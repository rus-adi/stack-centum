import { scorecard } from "@/lib/demo-data";

export default function RoiPage() {
  return (
    <main className="card">
      <h2 className="mb-4 text-lg font-semibold">Outcomes / ROI Layer</h2>
      <div className="grid grid-cols-2 gap-3 text-sm md:grid-cols-4">
        {Object.entries(scorecard).map(([k, v]) => (
          <div key={k} className="rounded bg-slate-950 p-3">
            <p className="text-slate-400">{k}</p>
            <p className="font-semibold">{String(v)}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
