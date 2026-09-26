import {
  calculatePercentagePayout,
  calculateWinnerTakeAll,
  calculateSkinsPayout,
} from "@/lib/scoring/payoutEngine";

export default function TestPayoutsPage() {
  const payout = calculateWinnerTakeAll(120, "Team A");
  const percentagePayout = calculatePercentagePayout(120, [
    {
      name: "Team A",
      percentage: 60,
    },
    {
      name: "Team B",
      percentage: 40,
    },
  ]);
  const skinsPayout = calculateSkinsPayout(160, ["Jim", "Mike", "Bob"]);

  return (
    <main className="min-h-screen bg-zinc-950 text-white p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-emerald-400 mb-6">
          Test Payouts
        </h1>
         <pre>{JSON.stringify(payout, null, 2)}</pre> 
        <pre>{JSON.stringify(percentagePayout, null, 2)}</pre>
        <pre>{JSON.stringify(skinsPayout, null, 2)}</pre>
      </div>
    </main>
  );
}
