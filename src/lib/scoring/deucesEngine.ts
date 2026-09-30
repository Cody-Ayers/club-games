// Determine if a score is a deuce
export function isDeuce(
    score: number,
    par: number
) {
    return par === 3 && score === 2;
}

// Count deuces won by each player
export function calculateDeuceCounts(
    deuceWinners: string[]
) {
    const deuceCounts: Record<
        string,
        number
    > = {};

    deuceWinners.forEach((winner) => {
        deuceCounts[winner] =
            (deuceCounts[winner] || 0) + 1;
    });

    return Object.entries(
        deuceCounts
    )
        .map(([playerName, deuces]) => ({
            playerName,
            deuces,
        }))
        .sort(
            (a, b) => b.deuces - a.deuces
        );
}

// Calculate deuce payouts
export function calculateDeucePayouts(
    deuceResults: {
        playerName: string;
        deuces: number;
    }[],
    deucePot: number
) {
    const totalDeuces = deuceResults.reduce(
        (total, player) => total + player.deuces,
        0
    );

    const deuceValue =
        totalDeuces > 0
            ? deucePot / totalDeuces
            : 0;

    return deuceResults.map((player) => ({
        playerName: player.playerName,
        deuces: player.deuces,
        payout: player.deuces * deuceValue,
    }));
}
