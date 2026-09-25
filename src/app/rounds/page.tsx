import { rounds } from "@/data/rounds";
import { groups } from "@/data/groups";
import { templates } from "@/data/templates";

export default function RoundsPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-emerald-400 mb-2">Rounds</h1>

        <p className="text-zinc-400 mb-8">
          Manage your game rounds and settings.
        </p>

        <div className="bg-zinc-900 rounded-2xl p-6">
          <div className="grid grid-cols-6 gap-4 border-b border-zinc-700 pb-3 mb-3 font-semibold">
            <div>Round Name</div>
            <div>Course</div>
            <div>Groups</div>
            <div>Template</div>
            <div>Pot</div>
            <div>Status</div>
          </div>

          {rounds.map((round) => {
            const group = groups.find((g) => g.id === round.groupId);
            const template = templates.find((t) => t.id === round.templateId);
            return (
              <div className="grid grid-cols-6 gap-4 py-2" key={round.id}>
                <div>{round.name}</div>
                <div>{round.course}</div>
                <div>{group ? group.name : "Unknown Group"}</div>
                <div>{template ? template.name : "Unknown Template"}</div>
                <div>${round.pot}</div>
                <div>{round.status}</div>
              </div>
            );
          })}

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
