import { templates } from "@/data/templates";

export default function TestTemplatePayoutsPage() {
  const template = templates.find((template) => template.id === 1);

  if (!template) {
    return <div>Template not found</div>;
  }

  const totalPot = template.players * template.buyIn;

  const allocations = Object.entries(template.potAllocation).map(
    ([name, percentage]) => ({
      name,
      percentage,
      amount: totalPot * (Number(percentage) / 100),
    }),
  );

  return (
    <main className="min-h-screen bg-zinc-950 text-white p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-emerald-400 mb-6">
          Template Payout Rules
        </h1>

        <div className="bg-zinc-900 rounded-2xl p-6 mb-6">
          <h2 className="text-2xl font-bold text-emerald-400 mb-4">
            {template.name}
          </h2>

          <div>Players: {template.players}</div>

          <div>Buy-In: ${template.buyIn}</div>

          <div>Total Pot: ${totalPot}</div>
        </div>

        <div className="bg-zinc-900 rounded-2xl p-6">
          <h2 className="text-2xl font-bold text-emerald-400 mb-4">
            Allocations
          </h2>

          {allocations.map((allocation) => (
            <div
              key={allocation.name}
              className="
                                flex
                                justify-between
                                items-center
                                py-2
                                border-b
                                border-zinc-800
                                last:border-0
                            "
            >
              <span>{allocation.name}</span>

              <span>
                {allocation.percentage}% = ${allocation.amount}
              </span>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
