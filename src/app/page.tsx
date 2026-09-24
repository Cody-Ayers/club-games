export default function Home() {
    return (
      <main className="min-h-screen bg-zinc-950 text-white p-8">
        <div className="max-w-6xl mx-auto">
  
          <div className="mb-8">
            <h1 className="text-5xl font-bold text-emerald-400">
              Club Games
            </h1>
  
            <p className="text-zinc-400 mt-2">
              Country Club Money Game Platform
            </p>
          </div>
  
          <div className="grid md:grid-cols-3 gap-6">
  
            <div className="bg-zinc-900 rounded-2xl p-6">
              <h2 className="text-xl font-bold mb-2">
                Wednesday Game
              </h2>
  
              <p className="text-zinc-400">
                20 Players
              </p>
  
              <p className="text-emerald-400 text-2xl font-bold mt-4">
                $1,200 Pot
              </p>
            </div>
  
            <div className="bg-zinc-900 rounded-2xl p-6">
              <h2 className="text-xl font-bold mb-2">
                Friday Game
              </h2>
  
              <p className="text-zinc-400">
                16 Players
              </p>
  
              <p className="text-emerald-400 text-2xl font-bold mt-4">
                $960 Pot
              </p>
            </div>
  
            <div className="bg-zinc-900 rounded-2xl p-6">
              <h2 className="text-xl font-bold mb-2">
                Season Money List
              </h2>
  
              <p>1. Mike $1,423</p>
              <p>2. Steve $1,176</p>
              <p>3. Jason $844</p>
            </div>
          </div>
  
          <div className="mt-8 bg-zinc-900 rounded-2xl p-6">
  
            <h2 className="text-2xl font-bold mb-4">
              Live Saturday Blitz
            </h2>
  
            <div className="grid md:grid-cols-3 gap-4">
  
              <div>
                <h3 className="font-semibold mb-2">
                  Team Standings
                </h3>
  
                <p>Team A +12</p>
                <p>Team B +9</p>
                <p>Team C +8</p>
              </div>
  
              <div>
                <h3 className="font-semibold mb-2">
                  Skins
                </h3>
  
                <p>Hole 2 - Mike</p>
                <p>Hole 7 - Steve</p>
                <p>Hole 11 - Carryover</p>
              </div>
  
              <div>
                <h3 className="font-semibold mb-2">
                  Projected Winnings
                </h3>
  
                <p>Mike +$184</p>
                <p>Steve +$97</p>
                <p>Jason +$42</p>
              </div>
  
            </div>
  
          </div>
  
        </div>
      </main>
    );
  }