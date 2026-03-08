import { GovernanceChat } from "@/components/governance-chat";
import { governanceDocs } from "@/lib/demo-data";

export default function GovernancePage({ params }: { params: { schoolId: string } }) {
  const docs = governanceDocs[params.schoolId] || [];
  return (
    <main className="space-y-4">
      <GovernanceChat schoolId={params.schoolId} />
      <section className="card">
        <h3 className="mb-2 font-semibold">Uploaded governance documents</h3>
        <ul className="space-y-2 text-sm text-slate-300">
          {docs.map((doc) => (
            <li key={doc.id}>
              {doc.title} · {doc.category} · <a className="text-cyan-300" href={doc.fileUrl}>Open source</a>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
