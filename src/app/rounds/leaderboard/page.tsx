export default function LeaderboardPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-emerald-400 mb-2">
          Live Leaderboard
        </h1>

        <p className="text-zinc-400 mb-8">Friday Flights · Hole 7 of 18</p>

        <div className="bg-zinc-900 rounded-2xl p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Team Standings</h2>

          <div className="grid grid-cols-3 gap-4 border-b border-zinc-700 pb-2 mb-2 font-semibold">
            <div>Rank</div>
            <div>Team</div>
            <div>Score</div>
          </div>

          <div className="grid grid-cols-3 gap-4 py-2">
            <div>1</div>
            <div>Team A</div>
            <div>-5</div>
          </div>
          <div className="grid grid-cols-3 gap-4 py-2">
            <div>2</div>
            <div>Team B</div>
            <div>-3</div>
          </div>
          <div className="grid grid-cols-3 gap-4 py-2">
            <div>3</div>
            <div>Team C</div>
            <div>-2</div>
          </div>
          <div className="grid grid-cols-3 gap-4 py-2">
            <div>4</div>
            <div>Team D</div>
            <div>E</div>
          </div>
          <div className="grid grid-cols-3 gap-4 py-2">
            <div>5</div>
            <div>Team E</div>
            <div>+2</div>
          </div>
        </div>

        <div className="bg-zinc-900 rounded-2xl p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Projected Payouts</h2>
          <p>1st Place Team — $400</p>
          <p>2nd Place Team — $250</p>
          <p>3rd Place Team — $150</p>
        </div>

        <div className="bg-zinc-900 rounded-2xl p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Skins Tracker</h2>
          <p>Hole 2 — Mike Johnson</p>
          <p>Hole 5 — Carryover</p>
          <p>Current Skin Value — $40</p>
        </div>

        <button className="bg-emerald-600 hover:bg-emerald-500 px-6 py-3 rounded-xl font-semibold">
          View Settlements
        </button>
      </div>
    </main>
  );
}
