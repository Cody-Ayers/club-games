import { buildRoundPayoutSummary } from "@/lib/scoring/roundPayoutSummary";

export default function TestRoundSummaryPage() {
  const summary = buildRoundPayoutSummary(2);

  return (
    <main className="min-h-screen bg-zinc-950 text-white p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-emerald-400 mb-6">
          {summary.roundName}
        </h1>

        {/* Round Summary */}
        <div
          className="
                        bg-zinc-900
                        rounded-2xl
                        p-6
                        mb-6
                        transition-all
                        hover:bg-zinc-800
                    "
        >
          <div className="flex justify-between py-1">
            <span>Total Pot</span>
            <span className="text-emerald-400 font-semibold">
              ${summary.totalPot}
            </span>
          </div>

          <div className="flex justify-between py-1">
            <span>Total Paid</span>
            <span className="text-emerald-400 font-semibold">
              ${summary.totalPaid}
            </span>
          </div>

          <div className="flex justify-between py-1">
            <span>Bar Tip</span>
            <span className="text-amber-400 font-semibold">
              ${summary.barTip}
            </span>
          </div>
        </div>

        {/* First Six */}
        <div
          className="
                        bg-zinc-900
                        rounded-2xl
                        p-6
                        mb-6
                        transition-all
                        hover:bg-zinc-800
                    "
        >
          <h2 className="text-2xl font-bold text-emerald-400 mb-4">
            First Six
          </h2>

          {summary.firstSix.map((winner) => (
            <div
              key={winner.name}
              className="border-b border-zinc-800 pb-4 mb-4 last:border-0 last:mb-0"
            >
              <div className="flex justify-between items-center py-2">
                <span className="font-semibold text-lg">{winner.name}</span> 
                <span className="text-emerald-400 font-bold">
                  ${winner.payout}
                </span>
              </div>
               
              {winner.players?.map((player) => (
                <div
                  key={player.name}
                  className="flex justify-between pl-6 py-1"
                >
                  <span className="text-zinc-300">{player.name}</span> 
                  <span className="text-emerald-400">${player.payout}</span>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Gross Skins */}
        <div
          className="
                        bg-zinc-900
                        rounded-2xl
                        p-6
                        mb-6
                        transition-all
                        hover:bg-zinc-800
                    "
        >
          <h2 className="text-2xl font-bold text-emerald-400 mb-4">
            Gross Skins
          </h2>

          {summary.grossSkins.map((winner) => (
            <div
              key={winner.name}
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
              <span>{winner.name}</span>

              <span className="text-emerald-400 font-semibold">
                ${winner.payout}
              </span>
            </div>
          ))}
        </div>

        {/* Deuces */}
        <div
          className="
                        bg-zinc-900
                        rounded-2xl
                        p-6
                        mb-6
                        transition-all
                        hover:bg-zinc-800
                    "
        >
          <h2 className="text-2xl font-bold text-emerald-400 mb-4">Deuces</h2>

          {summary.deuces.map((winner) => (
            <div
              key={winner.name}
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
              <span>{winner.name}</span>

              <span className="text-emerald-400 font-semibold">
                ${winner.payout}
              </span>
            </div>
          ))}
        </div>

        {/* Player Results */}
        <div
          className="
        bg-zinc-900
        rounded-2xl
        p-6
        mb-6
        transition-all
        hover:bg-zinc-800
    "
        >
          <h2 className="text-2xl font-bold text-emerald-400 mb-4">
            Player Results
          </h2>

          {summary.playerResults.map((player) => (
            <div
              key={player.name}
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
              <span>{player.name}</span>

              <span className="text-emerald-400 font-semibold">
                ${player.winnings}
              </span>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-zinc-500 text-sm">
          Generated by Club Games
        </div>
      </div>
    </main>
  );
}
