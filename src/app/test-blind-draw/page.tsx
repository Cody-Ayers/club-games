import { buildTeams } from "@/lib/scoring/blindDrawEngine";

export default function TestBlindDrawPage() {
  const teams = buildTeams(
    ["Cody", "Jeff", "Jack", "Randy", "Bob", "Mike", "Steve", "Dennis"],
    4,
  );

  return (
    <main className="min-h-screen bg-zinc-950 text-white p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-emerald-400 mb-6">
          Blind Draw Test
        </h1>

        {teams.map((team) => (
          <div
            key={team.teamName}
            className="
                            bg-zinc-900
                            rounded-2xl
                            p-6
                            mb-6
                        "
          >
            <h2 className="text-2xl font-bold text-emerald-400 mb-4">
              {team.teamName}
            </h2>

            {team.players.map((player) => (
              <div key={player} className="py-1">
                {player}
              </div>
            ))}
          </div>
        ))}
      </div>
    </main>
  );
}
