import {
  isDeuce,
  calculateDeuceCounts,
  calculateDeucePayouts,
} from "@/lib/scoring/deucesEngine";

export default function TestDeucesPage() {
  const deuce = isDeuce(2, 3);

  const deuceResults = calculateDeuceCounts(["Cody", "Jack", "Cody", "Randy"]);

  const deuceChampion = deuceResults[0];

  const deucePayouts = calculateDeucePayouts(deuceResults, 100);

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
