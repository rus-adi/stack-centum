export default function ToolsPage() {
  return (
    <main className="card space-y-2 text-sm">
      <h2 className="text-lg font-semibold">Tool Catalog 2.0</h2>
      <p className="text-slate-300">HQ sees master registry. Schools see enabled + recommended + bundled tools only.</p>
      <ul className="list-disc pl-5">
        <li>Classroom Assistant Lite — SCHOOL_VISIBLE — recommended for pilot school.</li>
        <li>2 Hour Learning — CONSULTANT_ONLY — hidden by default due to high cost and maturity constraints.</li>
      </ul>
    </main>
  );
}
