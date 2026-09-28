import { scores } from "@/data/scores";
import { calculatePlayerGrossScore } from "@/lib/scoring/grossScoreEngine";

export default function TestGrossScoresPage() {
  const players = scores.map(calculatePlayerGrossScore);

  return (
    <main className="min-h-screen bg-zinc-950 text-white p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-emerald-400 mb-6">
          Gross Scores
        </h1>

        <div className="bg-zinc-900 rounded-2xl p-6">
          {players.map((player) => (
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
                {player.grossScore}
              </span>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
