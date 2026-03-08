import Link from "next/link";
import { packs } from "@/lib/demo-data";

export default function PacksPage() {
  return (
    <main className="card">
      <h2 className="mb-2 text-lg font-semibold">Transformation Packs</h2>
      <p className="mb-4 text-sm text-slate-300">Curriculum-agnostic implementation packs for School 2.0.</p>
      <ul className="space-y-2">
        {packs.map((pack) => (
          <li key={pack.slug}>
            <Link href={`/packs/${pack.slug}`} className="text-cyan-300">{pack.title}</Link> · {pack.pillar}
          </li>
        ))}
      </ul>
    </main>
  );
}
