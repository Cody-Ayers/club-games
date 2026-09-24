export default function SettlementsPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-emerald-400 mb-2">
          Settlements
        </h1>

        <p className="text-zinc-400 mb-8">
          Final payouts and payment tracking for the round.
        </p>

        <div className="bg-zinc-900 rounded-2xl p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Round Summary</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <p className="text-zinc-400">Round</p>
              <p>Friday Flights</p>
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
              <p className="text-zinc-400">Status</p>
              <p>Completed</p>
            </div>
          </div>
        </div>

        <div className="bg-zinc-900 rounded-2xl p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Player Results</h2>

          <div className="grid grid-cols-3 gap-4 border-b border-zinc-700 pb-2 mb-2 font-semibold">
            <div>Player</div>
            <div>Result</div>
            <div>Amount</div>
          </div>

          <div className="grid grid-cols-3 gap-4 py-2">
            <div>Mike Johnson</div>
            <div>Won</div>
            <div>+$220</div>
          </div>
          <div className="grid grid-cols-3 gap-4 py-2">
            <div>Steve Smith</div>
            <div>Won</div>
            <div>+$140</div>
          </div>
          <div className="grid grid-cols-3 gap-4 py-2">
            <div>Tom Wilson</div>
            <div>Lost</div>
            <div>-$85</div>
          </div>
          <div className="grid grid-cols-3 gap-4 py-2">
            <div>Jason Brown</div>
            <div>Lost</div>
            <div>-$60</div>
          </div>
        </div>

        <div className="bg-zinc-900 rounded-2xl p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">
            Recommended Settlements
          </h2>

          <p className="py-2">Tom Wilson → Mike Johnson : $85</p>
          <p className="py-2">Jason Brown → Steve Smith : $60</p>
        </div>

        <div className="bg-zinc-900 rounded-2xl p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Payment Tracking</h2>

          <p>✅ Tom Paid Mike</p>
          <p>⏳ Jason Owes Steve</p>
        </div>

        <button className="bg-emerald-600 hover:bg-emerald-500 px-6 py-3 rounded-xl font-semibold">
          Mark Payment Complete
        </button>
      </div>
    </main>
  );
}
