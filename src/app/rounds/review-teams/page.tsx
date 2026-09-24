export default function ReviewTeamsPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-emerald-400 mb-2">
          Review Teams
        </h1>

        <p className="text-zinc-400 mb-8">
          Review team assignments before locking teams and starting the round.
        </p>

        <div className="bg-zinc-900 rounded-2xl p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Round Information</h2>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-zinc-400">Round</p>
              <p>Friday Flights</p>
            </div>

            <div>
              <p className="text-zinc-400">Course</p>
              <p>Colorado Springs Country Club</p>
            </div>

            <div>
              <p className="text-zinc-400">Format</p>
              <p>5 Teams of 4</p>
            </div>

            <div>
              <p className="text-zinc-400">Players</p>
              <p>20</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-zinc-900 rounded-2xl p-6">
            <h3 className="text-lg font-semibold mb-3">Team A</h3>
            <p>Mike Johnson</p>
            <p>Tom Wilson</p>
            <p>Steve Smith</p>
            <p>Jason Brown</p>
            <button className="mt-4 bg-zinc-800 px-3 py-2 rounded-lg">
              Edit Team
            </button>
          </div>

          <div className="bg-zinc-900 rounded-2xl p-6">
            <h3 className="text-lg font-semibold mb-3">Team B</h3>
            <p>Rob Smith</p>
            <p>Chris Blake</p>
            <p>Kevin James</p>
            <p>John Davis</p>
            <button className="mt-4 bg-zinc-800 px-3 py-2 rounded-lg">
              Edit Team
            </button>
          </div>

          <div className="bg-zinc-900 rounded-2xl p-6">
            <h3 className="text-lg font-semibold mb-3">Team C</h3>
            <p>Matt Cooper</p>
            <p>Brian Hall</p>
            <p>Scott Lee</p>
            <p>Jeff Green</p>
            <button className="mt-4 bg-zinc-800 px-3 py-2 rounded-lg">
              Edit Team
            </button>
          </div>

          <div className="bg-zinc-900 rounded-2xl p-6">
            <h3 className="text-lg font-semibold mb-3">Team D</h3>
            <p>Dan Miller</p>
            <p>Kyle Adams</p>
            <p>Ryan Long</p>
            <p>Eric Stone</p>
            <button className="mt-4 bg-zinc-800 px-3 py-2 rounded-lg">
              Edit Team
            </button>
          </div>
        </div>

        <div className="bg-zinc-900 rounded-2xl p-6 mb-6">
          <h3 className="text-lg font-semibold mb-4">Actions</h3>

          <div className="flex gap-4 flex-wrap">
            <button className="bg-zinc-800 px-4 py-2 rounded-xl">
              Regenerate Teams
            </button>

            <button className="bg-emerald-600 hover:bg-emerald-500 px-4 py-2 rounded-xl font-semibold">
              Start Round
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
