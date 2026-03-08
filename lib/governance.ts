import { governanceDocs, type GovernanceDoc } from "@/lib/demo-data";

type Source = { title: string; fileUrl: string; quote: string };
export type GovernanceAnswer = { answer: string; confidence: "high" | "low"; sources: Source[] };

function chunkSentences(text: string): string[] {
  return text.split(/\.\s+/).map((s) => s.trim()).filter(Boolean);
}

export function answerGovernanceQuestion(schoolId: string, question: string): GovernanceAnswer {
  const docs = governanceDocs[schoolId] || [];
  const q = question.toLowerCase();
  const hits: Array<{ doc: GovernanceDoc; sentence: string; score: number }> = [];

  for (const doc of docs) {
    for (const sentence of chunkSentences(doc.content)) {
      let score = 0;
      for (const token of q.split(/\W+/).filter((t) => t.length > 3)) {
        if (sentence.toLowerCase().includes(token)) score += 1;
      }
      if (score > 0) hits.push({ doc, sentence, score });
    }
  }

  hits.sort((a, b) => b.score - a.score);
  const top = hits.slice(0, 3);
  if (top.length === 0) {
    return {
      answer:
        "I could not find a direct match in the uploaded School 2.0 Governance & Support Center documents. Please escalate to a leadership reviewer and upload the relevant SOP or policy if missing.",
      confidence: "low",
      sources: []
    };
  }

  const sources = top.map((t) => ({ title: t.doc.title, fileUrl: t.doc.fileUrl, quote: t.sentence + "." }));
  return {
    answer: `Based on your uploaded documents, the key guidance is: ${sources.map((s) => `“${s.quote}”`).join(" ")}`,
    confidence: top[0].score > 1 ? "high" : "low",
    sources
  };
}
