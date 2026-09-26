import { buildRoundPayoutSummary } from "@/lib/scoring/roundPayoutSummary";

export default function TestRoundSummaryPage() {
  const summary = buildRoundPayoutSummary();

  return (
    <main className="min-h-screen bg-zinc-950 text-white p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-emerald-400 mb-6">
          Round Summary
        </h1>

        <pre>{JSON.stringify(summary, null, 2)}</pre>
      </div>
    </main>
  );
}
