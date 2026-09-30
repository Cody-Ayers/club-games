// Randomize player order
export function shufflePlayers(
    players: string[]
) {
    return [...players].sort(
        () => Math.random() - 0.5
    );
}

// Create teams from shuffled players
export function buildTeams(
    players: string[],
    teamSize: number
) {
    const shuffledPlayers =
        shufflePlayers(players);

    const teams = [];

    for (
        let i = 0;
        i < shuffledPlayers.length;
        i += teamSize
    ) {
        teams.push({
            teamName: `Team ${teams.length + 1}`,
            players: shuffledPlayers.slice(
                i,
                i + teamSize
            ),
        });
    }

    return teams;
}
