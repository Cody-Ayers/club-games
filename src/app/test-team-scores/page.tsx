import { scores } from "@/data/scores";
import { testPlayers } from "@/data/testPlayers";
import { testTeams } from "@/data/testTeams";

import { calculatePlayerGrossScore } from "@/lib/scoring/grossScoreEngine";

import { calculatePlayerNetScore } from "@/lib/scoring/netScoringEngine";

import { calculateTeamNetScore } from "@/lib/scoring/teamScoreEngine";

export default function TestTeamScoresPage() {
  const playerNetScores = scores.map((score) => {
    const grossResult = calculatePlayerGrossScore(score);

    const player = testPlayers.find(
      (player) => player.name === score.playerName,
    );

    if (!player) {
      throw new Error(`Player ${score.playerName} not found`);
    }

    return calculatePlayerNetScore(player, grossResult.grossScore);
  });

  const teamResults = testTeams
    .map((team) => {
      const teamPlayers = playerNetScores.filter((player) =>
        team.players.includes(player.playerName),
      );

      const teamNetScore = calculateTeamNetScore(
        teamPlayers.map((player) => player.netScore),
      );

      return {
        teamName: team.teamName,
        netScore: teamNetScore,
      };
    })
    .sort((a, b) => a.netScore - b.netScore);

  const winningTeam = teamResults[0];

  return (
    <main className="min-h-screen bg-zinc-950 text-white p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-emerald-400 mb-6">
          Team Results
        </h1>

        <div className="bg-zinc-900 rounded-2xl p-6 mb-6">
          <h2 className="text-2xl font-bold text-emerald-400 mb-4">
            Team Champion
          </h2>

          <div className="text-xl font-semibold">{winningTeam.teamName}</div>

          <div className="text-zinc-400">Net Score: {winningTeam.netScore}</div>
        </div>

        <div className="bg-zinc-900 rounded-2xl p-6">
          {teamResults.map((team, index) => (
            <div
              key={team.teamName}
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
                #{index + 1} {team.teamName}
              </span>

              <span className="text-emerald-400 font-semibold">
                {team.netScore}
              </span>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
