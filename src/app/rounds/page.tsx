import { rounds } from "@/data/rounds";

export default function RoundsPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-emerald-400 mb-2">Rounds</h1>

        <p className="text-zinc-400 mb-8">
          Manage your game rounds and settings.
        </p>

        <div className="bg-zinc-900 rounded-2xl p-6">
          <div className="grid grid-cols-5 gap-4 border-b border-zinc-700 pb-3 mb-3 font-semibold">
            <div>Round Name</div>
            <div>Course</div>
            <div>Players</div>
            <div>Pot</div>
            <div>Status</div>
          </div>

          {rounds.map((round) => (
            <div className="grid grid-cols-5 gap-4 py-2" key={round.id}>
              <div>{round.name}</div>
              <div>{round.course}</div>
              <div>{round.players} Players</div>
              <div>${round.pot}</div>
              <div>{round.status}</div>
            </div>
          ))}

          <div className="mt-6">
            <button className="bg-emerald-600 hover:bg-emerald-500 px-4 py-2 rounded-xl font-semibold">
              Create Round
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
