import { calculateHoleWinner } from "@/lib/scoring/skinsEngine";
import { calculateSkinCounts } from "@/lib/scoring/skinsEngine";
import { calculateSkinPayouts } from "@/lib/scoring/skinsEngine";
import { templates } from "@/data/templates";

export default function TestSkinsPage() {
  const winner = calculateHoleWinner([
    {
      playerName: "Cody",
      score: 3,
    },
    {
      playerName: "Jack",
      score: 4,
    },
    {
      playerName: "Jeff",
      score: 5,
    },
    {
      playerName: "Bob",
      score: 4,
    },
  ]);

  const skinResults = calculateSkinCounts([
    "Jack",
    null,
    "Cody",
    "Cody",
    "Randy",
  ]);

  const template = templates.find((template) => template.id === 1);

  if (!template) {
    return <div>Template not found</div>;
  }

  const totalPot = template.players * template.buyIn;

  const skinsPot = totalPot * (template.potAllocation.grossSkins / 100);

  const skinPayouts = calculateSkinPayouts(skinResults, skinsPot);

  const skinChampion = skinResults[0];

  return (
    <main className="min-h-screen bg-zinc-950 text-white p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-emerald-400 mb-6">Skins Test</h1>

        <div className="bg-zinc-900 rounded-2xl p-6 mb-6">
          <h2 className="text-2xl font-bold text-emerald-400 mb-4">
            Skin Champion
          </h2>

          <div className="text-xl font-semibold">{skinChampion.playerName}</div>

          <div className="text-zinc-400">Skins Won: {skinChampion.skins}</div>
        </div>

        <div className="bg-zinc-900 rounded-2xl p-6 mb-6">
          Hole Winner: {winner ?? "No Skin"}
        </div>

        <div className="bg-zinc-900 rounded-2xl p-6">
          <h2 className="text-2xl font-bold text-emerald-400 mb-4">
            Skin Leaderboard
          </h2>

          {skinResults.map((player, index) => (
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
                {player.skins}
              </span>
            </div>
          ))}
        </div>

        <div className="bg-zinc-900 rounded-2xl p-6 mt-6">
          <h2 className="text-2xl font-bold text-emerald-400 mb-4">Skin Pot</h2>

          <div>Total Pot: ${totalPot.toFixed(2)}</div>

          <div>Template Allocation: {template.potAllocation.grossSkins}%</div>

          <div className="text-xl font-semibold text-emerald-400 mt-2">
            Skin Pot: ${skinsPot.toFixed(2)}
          </div>
        </div>

        <div className="bg-zinc-900 rounded-2xl p-6 mt-6">
          <h2 className="text-2xl font-bold text-emerald-400 mb-4">
            Skin Payouts
          </h2>

          {skinPayouts.map((player) => (
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
