export default function GroupsPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-emerald-400 mb-2">Groups</h1>

        <p className="text-zinc-400 mb-8">
          Manage player profiles, handicaps, and GHIN information.
        </p>

        <div className="bg-zinc-900 rounded-2xl p-6">
          <div className="grid grid-cols-4 gap-4 border-b border-zinc-700 pb-3 mb-3 font-semibold">
            <div>Day Game</div>
            <div>Players</div>
            <div>Buy In</div>
          </div>

          <div className="grid grid-cols-4 gap-4 py-2">
            <div>Wednesday Money Game</div>
            <div>20 Players</div>
            <div>$60</div>
          </div>

          <div className="grid grid-cols-4 gap-4 py-2">
            <div>Friday Money Game</div>
            <div>12 Players</div>
            <div>$60</div>
          </div>

          <div className="grid grid-cols-4 gap-4 py-2">
            <div>Saturday Money Game</div>
            <div>14 Players</div>
            <div>$60</div>
          </div>

          <div className="mt-6">
            <button className="bg-emerald-600 hover:bg-emerald-500 px-4 py-2 rounded-xl font-semibold">
              Add Group
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
