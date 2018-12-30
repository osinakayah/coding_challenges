function hurdleRace(k, height) {
    let maxHeight = Math.max(...height);
    const numberOfSteps = maxHeight - k;
    return numberOfSteps > 0 ? numberOfSteps : 0
}