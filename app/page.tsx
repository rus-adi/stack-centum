import Link from "next/link";
import { schools } from "@/lib/demo-data";

export default function HomePage() {
  return (
    <main className="space-y-4">
      <div className="card">
        <h2 className="text-xl font-semibold">HQ Command Center</h2>
        <p className="text-slate-300">Multi-school oversight for staged School 2.0 transformation.</p>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {schools.map((school) => (
          <div key={school.id} className="card space-y-2">
            <h3 className="font-semibold">{school.name}</h3>
            <p className="text-sm text-slate-300">Stage: {school.stage}</p>
            <p className="text-sm text-slate-300">Readiness: {school.readiness}</p>
            <div className="flex flex-wrap gap-3 text-sm">
              <Link href={`/schools/${school.id}/governance`} className="text-cyan-300">Governance Center</Link>
              <Link href={`/schools/${school.id}/transformation`} className="text-cyan-300">Transformation Copilot</Link>
              <Link href={`/schools/${school.id}/roi`} className="text-cyan-300">ROI Layer</Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
