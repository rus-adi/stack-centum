"use client";

import { useState } from "react";
import { answerGovernanceQuestion, type GovernanceAnswer } from "@/lib/governance";

export function GovernanceChat({ schoolId }: { schoolId: string }) {
  const [question, setQuestion] = useState("A student punched another student. What does our SOP say we should do?");
  const [result, setResult] = useState<GovernanceAnswer | null>(null);

  return (
    <section className="card space-y-3">
      <h3 className="font-semibold">School 2.0 Governance & Support Center</h3>
      <p className="text-sm text-slate-300">Retrieval-first SOP and policy assistant with citations.</p>
      <textarea value={question} onChange={(e) => setQuestion(e.target.value)} className="w-full rounded bg-slate-950 p-2" rows={3} />
      <button onClick={() => setResult(answerGovernanceQuestion(schoolId, question))} className="rounded bg-cyan-700 px-3 py-2 text-sm">Ask governance assistant</button>
      {result && (
        <div className="space-y-3 rounded border border-slate-700 p-3">
          <p className="text-sm">{result.answer}</p>
          {result.confidence === "low" && <p className="text-xs text-amber-300">Low confidence. Please escalate to leadership reviewer.</p>}
          <div className="space-y-2">
            {result.sources.map((source, i) => (
              <blockquote key={i} className="rounded border-l-2 border-cyan-400 bg-slate-900 p-2 text-sm">
                <p className="mb-1">“{source.quote}”</p>
                <a href={source.fileUrl} className="text-cyan-300">{source.title}</a>
              </blockquote>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
