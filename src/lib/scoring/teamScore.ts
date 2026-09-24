export function bestTwoBalls(netScores: number[]): number {
    const sorted = [...netScores].sort((a, b) => a - b);

    return sorted[0] + sorted[1];
}

export function allFourBalls(netScores: number[]): number {
    return netScores.reduce((sum, score) => sum + score, 0);
}
