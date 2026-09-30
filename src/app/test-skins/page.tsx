import { calculateHoleWinner } from "@/lib/scoring/skinsEngine";

export default function TestSkinsPage() {
  const winner = calculateHoleWinner([
    {
      playerName: "Cody",
      score: 4,
    },
    {
      playerName: "Jack",
      score: 3,
    },
    {
      playerName: "Jeff",
      score: 3,
    },
    {
      playerName: "Bob",
      score: 4,
    },
  ]);

  return (
    <main className="min-h-screen bg-zinc-950 text-white p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-emerald-400 mb-6">Skins Test</h1>

        <div className="bg-zinc-900 rounded-2xl p-6">
          Hole Winner: {winner ?? "No Skin"}
        </div>
      </div>
    </main>
  );
}
