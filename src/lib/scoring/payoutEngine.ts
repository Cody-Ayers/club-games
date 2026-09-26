// ======================================================
// Shared Helper Functions
// ======================================================

// Split a pot evenly between winners
export function splitPotEvenly(
    potAmount: number,
    winnerCount: number
) {
    if (winnerCount === 0) {
        return 0;
    }

    return potAmount / winnerCount;
}

// Round payout amounts to the nearest whole dollar
// Any remaining dollars are typically used for the bar tip
export function roundPayout(
    payout: number
) {
    return Math.round(payout);
}

// Calculate dollars remaining after payouts
export function calculateRemainder(
    potAmount: number,
    payouts: number[]
) {
    const totalPaid =
        payouts.reduce(
            (total, payout) => total + payout,
            0
        );

    return potAmount - totalPaid;
}

// Distribute a pot equally among all winners
export function calculatePayout(
    potAmount: number,
    winners: string[]
) {
    const amountPerWinner =
        splitPotEvenly(
            potAmount,
            winners.length
        );

    return winners.map((winner) => ({
        name: winner,
        payout: roundPayout(amountPerWinner),
    }));
}



// ======================================================
// Payout Rules
// ======================================================

// Winner receives the entire pot
export function calculateWinnerTakeAll(
    potAmount: number,
    winnerName: string
) {
    return [
        {
            name: winnerName,
            payout: potAmount,
        },
    ];
}

// Distribute a pot based on payout percentages
export function calculatePercentagePayout(
    potAmount: number,
    winners: {
        name: string;
        percentage: number;
    }[]
) {
    return winners.map((winner) => ({
        name: winner.name,
        payout:
            roundPayout((potAmount * winner.percentage) / 100),
    }));
}

// Handle tied results by splitting the pot evenly
export function calculateTieSplit(
    potAmount: number,
    winners: string[]
) {
    return calculatePayout(
        potAmount,
        winners
    );
}

// Distribute skins pot evenly among skin winners
export function calculateSkinsPayout(
    potAmount: number,
    winners: string[]
) {
    return calculatePayout(
        potAmount,
        winners
    );
}   