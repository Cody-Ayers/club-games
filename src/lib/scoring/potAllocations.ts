export function calculatePotAllocations(
    playerCount: number,
    allocations: Record<string, number>
) {
    const results: Record<string, number> = {};

    Object.entries(allocations).forEach(([potName, amount]) => {
        results[potName] = playerCount * amount;
    });

    return results;
}

const testPots = calculatePotAllocations(12, {
    firstSix: 10,
    secondSix: 10,
    thirdSix: 10,
    grossSkins: 10,
    netSkins: 10,
    deuces: 5,
    netDeuces: 5,
})

console.log("testPots", testPots);