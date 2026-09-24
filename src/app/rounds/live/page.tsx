export default function LiveRoundPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-emerald-400 mb-2">
          Friday Flights
        </h1>

        <p className="text-zinc-400 mb-8">Round In Progress · Hole 1 of 18</p>

        <div className="bg-zinc-900 rounded-2xl p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Round Status</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <p className="text-zinc-400">Course</p>
              <p>Colorado Springs CC</p>
            </div>
            <div>
              <p className="text-zinc-400">Players</p>
              <p>20</p>
            </div>
            <div>
              <p className="text-zinc-400">Pot</p>
              <p>$1,200</p>
            </div>
            <div>
              <p className="text-zinc-400">Current Hole</p>
              <p>1</p>
            </div>
          </div>
        </div>

        <div className="bg-zinc-900 rounded-2xl p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Team A Scores</h2>

          <div className="grid grid-cols-2 gap-4 border-b border-zinc-700 pb-2 mb-2">
            <div>Player</div>
            <div>Score</div>
          </div>

          <div className="grid grid-cols-2 gap-4 py-2">
            <div>Mike Johnson</div>
            <div>4</div>
          </div>
          <div className="grid grid-cols-2 gap-4 py-2">
            <div>Tom Wilson</div>
            <div>5</div>
          </div>
          <div className="grid grid-cols-2 gap-4 py-2">
            <div>Steve Smith</div>
            <div>4</div>
          </div>
          <div className="grid grid-cols-2 gap-4 py-2">
            <div>Jason Brown</div>
            <div>6</div>
          </div>
        </div>

        <div className="bg-zinc-900 rounded-2xl p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Live Standings</h2>

          <p>Team A: -2</p>
          <p>Team B: E</p>
          <p>Team C: +1</p>
        </div>

        <div className="flex gap-4">
          <button className="bg-zinc-800 px-4 py-2 rounded-xl">
            Previous Hole
          </button>
          <button className="bg-emerald-600 hover:bg-emerald-500 px-4 py-2 rounded-xl font-semibold">
            Save Scores
          </button>
          <button className="bg-emerald-700 hover:bg-emerald-600 px-4 py-2 rounded-xl font-semibold">
            Next Hole
          </button>
        </div>
      </div>
    </main>
  );
}
