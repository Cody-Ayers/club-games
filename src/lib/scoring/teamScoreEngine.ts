// Calculate a team's combined net score
export function calculateTeamNetScore(
    playerNetScores: number[]
) {
    return playerNetScores.reduce(
        (total, score) => total + score,
        0
    );
}