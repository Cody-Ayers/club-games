export default function ConfigureTeamsPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-emerald-400 mb-2">
          Configure Teams
        </h1>

        <p className="text-zinc-400 mb-8">
          Set team size, assignment method, and optional pairings.
        </p>

        <div className="bg-zinc-900 rounded-2xl p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Round Summary</h2>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-zinc-400">Round</p>
              <p>Friday Flights</p>
            </div>

            <div>
              <p className="text-zinc-400">Players</p>
              <p>20</p>
            </div>
          </div>
        </div>

        <div className="bg-zinc-900 rounded-2xl p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Team Format</h2>

          <p>5 Teams of 4</p>
        </div>

        <div className="bg-zinc-900 rounded-2xl p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Assignment Method</h2>

          <div className="space-y-2">
            <p>○ Random Draw</p>
            <p>○ Balanced Handicaps</p>
            <p>○ Manual Team Selection</p>
            <p>○ Use Previous Teams</p>
          </div>
        </div>

        <div className="bg-zinc-900 rounded-2xl p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Locked Pairings</h2>

          <p>Mike Johnson + Guest</p>
          <p>Steve Smith + Tom Wilson</p>
        </div>

        <div className="bg-zinc-900 rounded-2xl p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">
            Generated Teams Preview
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold">Team A</h3>
              <p>Mike Johnson</p>
              <p>Tom Wilson</p>
              <p>Jason Brown</p>
              <p>Rob Smith</p>
            </div>

            <div>
              <h3 className="font-semibold">Team B</h3>
              <p>Steve Smith</p>
              <p>Chris Blake</p>
              <p>Kevin James</p>
              <p>John Davis</p>
            </div>
          </div>
        </div>

        <button className="bg-emerald-600 hover:bg-emerald-500 px-6 py-3 rounded-xl font-semibold">
          Generate Teams
        </button>
      </div>
    </main>
  );
}
