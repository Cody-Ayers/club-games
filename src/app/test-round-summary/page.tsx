import { buildRoundPayoutSummary } from "@/lib/scoring/roundPayoutSummary";

export default function TestRoundSummaryPage() {
  const summary = buildRoundPayoutSummary();

  return (
    <main className="min-h-screen bg-zinc-950 text-white p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-emerald-400 mb-6">
          {summary.roundName}
        </h1>

        <div className="bg-zinc-900 rounded-2xl p-6 mb-6">
          <div>Total Pot: ${summary.totalPot}</div>
          <div>Total Paid: ${summary.totalPaid}</div>
          <div>Bar Tip: ${summary.barTip}</div>
        </div>

        <div className="bg-zinc-900 rounded-2xl p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">First Six</h2>

          {summary.firstSix.map((winner) => (
            <div key={winner.name} className="flex justify-between py-1">
              <span>{winner.name}</span>
              <span>${winner.payout}</span>
            </div>
          ))}
        </div>

        <div className="bg-zinc-900 rounded-2xl p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">Gross Skins</h2>

          {summary.grossSkins.map((winner) => (
            <div key={winner.name} className="flex justify-between py-1">
              <span>{winner.name}</span>
              <span>${winner.payout}</span>
            </div>
          ))}
        </div>

        <div className="bg-zinc-900 rounded-2xl p-6">
          <h2 className="text-2xl font-semibold mb-4">Deuces</h2>

          {summary.deuces.map((winner) => (
            <div key={winner.name} className="flex justify-between py-1">
              <span>{winner.name}</span>
              <span>${winner.payout}</span>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
