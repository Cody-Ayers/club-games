export default function PlayersPage() {
    return (
      <main className="min-h-screen bg-zinc-950 text-white p-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold text-emerald-400 mb-2">
            Players
          </h1>
  
          <p className="text-zinc-400 mb-8">
            Manage player profiles, handicaps, and GHIN information.
          </p>
  
          <div className="bg-zinc-900 rounded-2xl p-6">
            <div className="grid grid-cols-4 gap-4 border-b border-zinc-700 pb-3 mb-3 font-semibold">
              <div>Name</div>
              <div>GHIN</div>
              <div>Index</div>
              <div>Home Club</div>
            </div>
  
            <div className="grid grid-cols-4 gap-4 py-2">
              <div>Mike Johnson</div>
              <div>1234567</div>
              <div>5.8</div>
              <div>Flying Horse</div>
            </div>
  
            <div className="grid grid-cols-4 gap-4 py-2">
              <div>Steve Smith</div>
              <div>7654321</div>
              <div>8.2</div>
              <div>Broadmoor</div>
            </div>
  
            <div className="grid grid-cols-4 gap-4 py-2">
              <div>Tom Wilson</div>
              <div>1111111</div>
              <div>11.4</div>
              <div>Kissing Camels</div>
            </div>
  
            <div className="grid grid-cols-4 gap-4 py-2">
              <div>Jason Brown</div>
              <div>2222222</div>
              <div>14.1</div>
              <div>Flying Horse</div>
            </div>
          </div>
  
          <div className="mt-6">
            <button className="bg-emerald-600 hover:bg-emerald-500 px-4 py-2 rounded-xl font-semibold">
              Add Player
            </button>
          </div>
        </div>
      </main>
    );
  }