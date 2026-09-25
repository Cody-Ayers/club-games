import { calculatePotAllocations } from "@/lib/scoring/potAllocations";

export default function TestPotsPage() {
  const testPots = calculatePotAllocations(12, {
    firstSix: 10,
    secondSix: 10,
    thirdSix: 10,
    grossSkins: 10,
    netSkins: 10,
    deuces: 5,
    netDeuces: 5,
  });

  return (
    <main className="min-h-screen bg-zinc-950 text-white p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-emerald-400 mb-2">Test Pots</h1>

        <p className="text-zinc-400 mb-8">
          This page is for testing pot allocations.
        </p>

        <div className="bg-zinc-900 rounded-2xl p-6">
          <pre>{JSON.stringify(testPots, null, 2)}</pre>
        </div>
      </div>
    </main>
  );
}
