import { calculateWinnerTakeAll } from "@/lib/scoring/payoutEngine";
export default function TestPayoutsPage() {
  const payout = calculateWinnerTakeAll(120, "Team A");
  return (
    <main className="min-h-screen bg-zinc-950 text-white p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-emerald-400 mb-6">
          Test Payouts
        </h1>
         <pre>{JSON.stringify(payout, null, 2)}</pre>
      </div>
    </main>
  );
}
