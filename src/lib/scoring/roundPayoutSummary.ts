import { rounds } from "@/data/rounds";
import { templates } from "@/data/templates";

export function buildRoundPayoutSummary(
    roundId: number
) {
    const round = rounds.find(
        (round) => round.id === roundId
    );

    if (!round) {
        throw new Error("Round not found");
    }
    const template = templates.find(
        (template) =>
            template.id === round.templateId
    );

    if (!template) {
        throw new Error("Template not found");
    }

    return {
        roundName: round.name,
        course: round.course,
        totalPot: round.pot,
        templateName: template.name,
        buyIn: template.buyIn,

        totalPaid: 470,
        barTip: 10,

        firstSix: [
            {
                name: "Team Randy",
                payout: 160,
            },
        ],

        grossSkins: [
            {
                name: "Cody",
                payout: 50,
            },
            {
                name: "Jeff",
                payout: 50,
            },
            {
                name: "Bob",
                payout: 50,
            },
        ],

        deuces: [
            {
                name: "Cody",
                payout: 120,
            },
            {
                name: "Jack",
                payout: 40,
            },
        ],
    };
}