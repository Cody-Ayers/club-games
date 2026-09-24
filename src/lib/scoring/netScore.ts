import { HoleInfo, PlayerRoundInfo } from "./types";

export function receivesStroke(
    courseHandicap: number,
    holeHandicap: number
): boolean {
    return holeHandicap <= courseHandicap;
}

export function calculateNetScore(
    grossScore: number,
    player: PlayerRoundInfo,
    hole: HoleInfo
): number {
    const getsStroke = receivesStroke(
        player.courseHandicap,
        hole.handicap
    );

    return getsStroke ? grossScore - 1 : grossScore;
}
