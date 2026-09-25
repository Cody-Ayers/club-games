export const templates = [
    {
        id: 1,
        name: "4 Man 6/6/6",

        players: 20,
        buyIn: 60,

        potAllocation: {
            firstSix: 10,
            secondSix: 10,
            thirdSix: 10,
            grossSkins: 10,
            netSkins: 10,
            deuces: 5,
            netDeuces: 5,
        }
    },

    {
        id: 2,
        name: "2 Man F/B/T",

        players: 12,
        buyIn: 60,

        potAllocation: {
            frontNine: 10,
            backNine: 10,
            total: 10,
            grossSkins: 10,
            netSkins: 10,
            deuces: 5,
            netDeuces: 5,
        }
    },

    {
        id: 3,
        name: "Singles Net Game",

        players: 14,
        buyIn: 60,

        potAllocation: {
            frontNine: 10,
            backNine: 10,
            total: 10,
            grossSkins: 10,
            netSkins: 10,
            deuces: 5,
            netDeuces: 5,
        }
    },

    {
        id: 4,
        name: "Member Guest",

        players: 16,
        buyIn: 100,

        potAllocation: {
            teamGame: 60,
            grossSkins: 10,
            netSkins: 10,
            deuces: 10,
            netDeuces: 10,
        }
    },
];