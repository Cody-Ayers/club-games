export default function TemplatesPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-emerald-400 mb-2">Templates</h1>

        <p className="text-zinc-400 mb-8">
          Manage your game templates and settings.
        </p>

        <div className="bg-zinc-900 rounded-2xl p-6">
          <div className="grid grid-cols-4 gap-4 border-b border-zinc-700 pb-3 mb-3 font-semibold">
            <div>Template Name</div>
            <div>Players</div>
            <div>Buy In</div>
          </div>

          <div className="grid grid-cols-4 gap-4 py-2">
            <div>Wednesday Woods</div>
            <div>20 Players</div>
            <div>$60</div>
          </div>

          <div className="grid grid-cols-4 gap-4 py-2">
            <div>Firday Flights</div>
            <div>12 Players</div>
            <div>$60</div>
          </div>

          <div className="grid grid-cols-4 gap-4 py-2">
            <div>Saturday Singles</div>
            <div>14 Players</div>
            <div>$60</div>
          </div>

          <div className="mt-6">
            <button className="bg-emerald-600 hover:bg-emerald-500 px-4 py-2 rounded-xl font-semibold">
              Add Template
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
