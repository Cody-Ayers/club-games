export default function CreateRoundPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-emerald-400 mb-2">
          Create New Round
        </h1>

        <p className="text-zinc-400 mb-8">
          Set up a new golf round using an existing group, template, and course.
        </p>

        <div className="bg-zinc-900 rounded-2xl p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Round Details</h2>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-zinc-400">Round Name</p>
              <p>Friday Flights</p>
            </div>

            <div>
              <p className="text-zinc-400">Group</p>
              <p>Friday Money Game</p>
            </div>

            <div>
              <p className="text-zinc-400">Template</p>
              <p>4 Man 6/6/6</p>
            </div>

            <div>
              <p className="text-zinc-400">Course</p>
              <p>Colorado Springs Country Club</p>
            </div>
          </div>
        </div>

        <div className="bg-zinc-900 rounded-2xl p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">
            Players & Tee Assignments
          </h2>

          <div className="grid grid-cols-3 gap-4 border-b border-zinc-700 pb-3 mb-3 font-semibold">
            <div>Player</div>
            <div>Tee</div>
            <div>Handicap Index</div>
          </div>

          <div className="grid grid-cols-3 gap-4 py-2">
            <div>Mike Johnson</div>
            <div>Blue</div>
            <div>5.8</div>
          </div>

          <div className="grid grid-cols-3 gap-4 py-2">
            <div>Steve Smith</div>
            <div>Blue</div>
            <div>8.2</div>
          </div>

          <div className="grid grid-cols-3 gap-4 py-2">
            <div>Tom Wilson</div>
            <div>White</div>
            <div>11.4</div>
          </div>

          <div className="grid grid-cols-3 gap-4 py-2">
            <div>Jason Brown</div>
            <div>Gold</div>
            <div>14.1</div>
          </div>
        </div>

        <div className="bg-zinc-900 rounded-2xl p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Round Summary</h2>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-zinc-400">Players</p>
              <p>20</p>
            </div>

            <div>
              <p className="text-zinc-400">Buy In</p>
              <p>$60</p>
            </div>

            <div>
              <p className="text-zinc-400">Projected Pot</p>
              <p>$1,200</p>
            </div>
          </div>
        </div>

        <button className="bg-emerald-600 hover:bg-emerald-500 px-6 py-3 rounded-xl font-semibold">
          Create Round
        </button>
      </div>
    </main>
  );
}
