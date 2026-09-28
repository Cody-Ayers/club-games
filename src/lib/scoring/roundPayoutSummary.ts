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

                players: [
                    {
                        name: "Randy",
                        payout: 40,
                    },
                    {
                        name: "Cody",
                        payout: 40,
                    },
                    {
                        name: "Jeff",
                        payout: 40,
                    },
                    {
                        name: "Jack",
                        payout: 40,
                    },
                ],
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

        playerResults: [
            {
                name: "Cody",
                winnings: 210,
            },
            {
                name: "Jeff",
                winnings: 90,
            },
            {
                name: "Jack",
                winnings: 80,
            },
            {
                name: "Randy",
                winnings: 40,
            },
        ],
    };
}