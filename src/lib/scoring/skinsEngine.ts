// Determine if a hole has a unique winner
export function calculateHoleWinner(
    holeScores: {
        playerName: string;
        score: number;
    }[]
) {
    const sortedScores = [...holeScores]
        .sort((a, b) => a.score - b.score);

    const lowestScore = sortedScores[0];

    const tiedPlayers = holeScores.filter(
        (player) =>
            player.score === lowestScore.score
    );

    if (tiedPlayers.length > 1) {
        return null;
    }

    return lowestScore.playerName;
}
// Count skins won by each player
export function calculateSkinCounts(
    holeWinners: (string | null)[]
) {
    const skinCounts: Record<
        string,
        number
    > = {};

    holeWinners.forEach((winner) => {
        if (!winner) {
            return;
        }

        skinCounts[winner] =
            (skinCounts[winner] || 0) + 1;
    });

    return Object.entries(
        skinCounts
    )
        .map(([playerName, skins]) => ({
            playerName,
            skins,
        }))
        .sort(
            (a, b) => b.skins - a.skins
        );
}

// Calculate skin payouts
export function calculateSkinPayouts(
    skinResults: {
        playerName: string;
        skins: number;
    }[],
    skinPot: number
) {
    const totalSkins = skinResults.reduce(
        (total, player) => total + player.skins,
        0
    );

    const skinValue =
        totalSkins > 0
            ? skinPot / totalSkins
            : 0;

    return skinResults.map((player) => ({
        playerName: player.playerName,
        skins: player.skins,
        payout: player.skins * skinValue,
    }));
}