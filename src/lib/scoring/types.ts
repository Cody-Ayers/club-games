export interface PlayerScore {
    playerId: string;
    playerName: string;
    holeNumber: number;
    grossScore: number;
}

export interface HoleInfo {
    holeNumber: number;
    handicap: number;
}

export interface PlayerRoundInfo {
    playerId: string;
    playerName: string;
    courseHandicap: number;
}
