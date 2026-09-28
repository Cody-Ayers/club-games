// Calculate total gross score for a round
export function calculateGrossScore(
    holes: number[]
) {
    return holes.reduce(
        (total, score) => total + score,
        0
    );
}

// Calculate gross score for a player
export function calculatePlayerGrossScore(
    player: {
        playerName: string;
        holes: number[];
    }
) {
    return {
        playerName: player.playerName,
        grossScore: calculateGrossScore(
            player.holes
        ),
    };
}
``