export function getRankMultiplier(rank: number) {
    if (rank === 1) return 0.4;
    if (rank === 2) return 0.6;
    if (rank === 3) return 0.8;
    return 1.0;
}