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

    const firstSix = [
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
    ]

    const grossSkins = [
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
    ]

    const deuces = [
        {
            name: "Cody",
            payout: 120,
        },
        {
            name: "Jack",
            payout: 40,
        },
    ]

    const playerResultsMap: Record<
        string,
        number
    > = {};

    firstSix.forEach((team) => {
        team.players.forEach((player) => {
            playerResultsMap[player.name] =
                (playerResultsMap[player.name] || 0) +
                player.payout;
        });
    });

    grossSkins.forEach((player) => {
        playerResultsMap[player.name] =
            (playerResultsMap[player.name] || 0) +
            player.payout;
    });

    deuces.forEach((player) => {
        playerResultsMap[player.name] =
            (playerResultsMap[player.name] || 0) +
            player.payout;
    });

    const playerResults = Object.entries(
        playerResultsMap
    ).map(([name, winnings]) => ({
        name,
        winnings,
    })).sort((a, b) => b.winnings - a.winnings);

    return {
        roundName: round.name,
        course: round.course,

        totalPot: round.pot,

        templateName: template.name,
        buyIn: template.buyIn,

        totalPaid: 470,
        barTip: 10,

        firstSix,
        grossSkins,
        deuces,

        playerResults,


    };
}