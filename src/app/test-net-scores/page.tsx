import { scores } from "@/data/scores";
import { testPlayers } from "@/data/testPlayers";
import { calculatePlayerGrossScore } from "@/lib/scoring/grossScoreEngine";
import { calculatePlayerNetScore } from "@/lib/scoring/netScoringEngine";

export default function TestNetScoresPage() {
  const netScores = scores
    .map((score) => {
      const grossResult = calculatePlayerGrossScore(score);

      const player = testPlayers.find(
        (player) => player.name === score.playerName,
      );

      if (!player) {
        throw new Error("Player ${score.playerName} not found");
      }

      return calculatePlayerNetScore(player, grossResult.grossScore);
    })
    .sort((a, b) => a.netScore - b.netScore);

  const winner = netScores[0];

  return (
    <main className="min-h-screen bg-zinc-950 text-white p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-emerald-400 mb-6">Net Scores</h1>

        <div className="bg-zinc-900 rounded-2xl p-6 mb-6">
          <h2 className="text-2xl font-bold text-emerald-400 mb-4">
            Net Champion
          </h2>

          <div className="text-xl font-semibold">{winner.playerName}</div>

          <div className="text-zinc-400">Net Score: {winner.netScore}</div>
        </div>

        <div className="bg-zinc-900 rounded-2xl p-6">
          {netScores.map((player, index) => (
            <div
              key={player.playerName}
              className="flex justify-between items-center py-2 border-b border-zinc-800 last:border-0"
            >
              <div>
                <div>
                  #{index + 1} {player.playerName}
                </div>

                <div className="text-sm text-zinc-400">
                  Gross: {player.grossScore}
                  {" | "}
                  Handicap: {player.handicap}
                </div>
              </div>

              <span className="text-emerald-400 font-semibold">
                Net {player.netScore}
              </span>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
