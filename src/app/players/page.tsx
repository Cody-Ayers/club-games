export default function PlayersPage() {
    return (
      <main className="min-h-screen bg-zinc-950 text-white p-8">
        <h1 className="text-4xl font-bold text-emerald-400">
          Players
        </h1>
  
        <div className="mt-6 bg-zinc-900 rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-4">
            Wednesday / Friday Group
          </h2>
  
          <ul className="space-y-2">
            <li>Mike Johnson</li>
            <li>Steve Smith</li>
            <li>Tom Wilson</li>
          </ul>
        </div>
      </main>
    );
  }