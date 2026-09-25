export function splitPotEvenly(
    potAmount: number,
    winnerCount: number
) {
    if (winnerCount === 0) {
        return 0;
    }

    return potAmount / winnerCount;
}

export function calculatePayout(
    potAmount: number,
    winnerNames: string[]
) {
    const amountPerWinner =
        splitPotEvenly(
            potAmount,
            winnerNames.length
        );

    return winnerNames.map((winner) => ({
        name: winner,
        payout: amountPerWinner
    }));
}

export function calculateWinnerTakeAll(
    potAmount: number,
    winnerNames: string
) {
    return [
        {
            name: winnerNames,
            payout: potAmount
        }
    ];
}

