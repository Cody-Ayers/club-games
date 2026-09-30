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