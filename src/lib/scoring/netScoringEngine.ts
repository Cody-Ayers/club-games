// Calculate a net score from a gross score
export function calculateNetScore(
    grossScore: number,
    handicap: number
) {
    return grossScore - handicap
}

export function calculatePlayerNetScore(
    player: {
        name: string,
        handicap: number;
    },
    grossScore: number
) {
    return {
        playerName: player.name,
        handicap: player.handicap,
        grossScore,
        netScore: calculateNetScore(
            grossScore,
            player.handicap
        ),
    };
}