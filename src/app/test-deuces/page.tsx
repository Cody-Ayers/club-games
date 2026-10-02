import {
  isDeuce,
  calculateDeuceCounts,
  calculateDeucePayouts,
} from "@/lib/scoring/deucesEngine";

import { templates } from "@/data/templates";

export default function TestDeucesPage() {
  const deuce = isDeuce(2, 3);

  const deuceResults = calculateDeuceCounts(["Cody", "Jack", "Cody", "Randy"]);

  const template = templates.find((template) => template.id === 1);

  if (!template) {
    return <div>Template not found</div>;
  }

  const totalPot = template.players * template.buyIn;

  const deucePot = totalPot * (template.potAllocation.deuces / 100);

  const deuceChampion = deuceResults[0];

  const deucePayouts = calculateDeucePayouts(deuceResults, deucePot);

  return (
    <main className="min-h-screen bg-zinc-950 text-white p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-emerald-400 mb-6">
          Deuces Test
        </h1>
        <div className="bg-zinc-900 rounded-2xl p-6">
          Deuce: {deuce ? "Yes" : "No"}
        </div>
        <div className="bg-zinc-900 rounded-2xl p-6 mb-6">
          <h2 className="text-2xl font-bold text-emerald-400 mb-4">
            Deuce Champion
          </h2>

          <div className="text-xl font-semibold">
            {deuceChampion.playerName}
          </div>

          <div className="text-zinc-400">Deuces: {deuceChampion.deuces}</div>
        </div>

        <div className="bg-zinc-900 rounded-2xl p-6 mt-6">
          <h2 className="text-2xl font-bold text-emerald-400 mb-4">
            Deuce Leaderboard
          </h2>

          {deuceResults.map((player, index) => (
            <div
              key={player.playerName}
              className="
        flex
        justify-between
        items-center
        py-2
        border-b
        border-zinc-800
        last:border-0
      "
            >
              <span>
                #{index + 1} {player.playerName}
              </span>

              <span className="text-emerald-400 font-semibold">
                {player.deuces}
              </span>
            </div>
          ))}
        </div>

        <div className="bg-zinc-900 rounded-2xl p-6 mt-6">
          <h2 className="text-2xl font-bold text-emerald-400 mb-4">
            Deuce Pot
          </h2>

          <div>Total Pot: ${totalPot.toFixed(2)}</div>

          <div>Template Allocation: {template.potAllocation.deuces}%</div>

          <div className="text-xl font-semibold text-emerald-400 mt-2">
            Deuce Pot: ${deucePot.toFixed(2)}
          </div>
        </div>

        <div className="bg-zinc-900 rounded-2xl p-6 mt-6">
          <h2 className="text-2xl font-bold text-emerald-400 mb-4">
            Deuce Payouts
          </h2>

          {deucePayouts.map((player) => (
            <div
              key={player.playerName}
              className="
                flex
                justify-between
                items-center
                py-2
                border-b
                border-zinc-800
                last:border-0
            "
            >
              <span>{player.playerName}</span>

              <span className="text-emerald-400 font-semibold">
                ${player.payout.toFixed(2)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
