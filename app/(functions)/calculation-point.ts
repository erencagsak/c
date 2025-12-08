import {getPlayerRank} from "@/app/(functions)/get-player-rank";
import {getRankMultiplier} from "@/app/(functions)/get-rank-multiplier";

export async function calculationPoint(event: any, isDeath: boolean, killerId?: string) {
    const attackerCount = event.groupMemberCount || 1;

    const killerIP = event.killerAvgIP || 0;
    const victimIP = event.victimAvgIP || 0;

    const ipDiff = killerIP - victimIP;

    // ----- DEATH -----
    if (isDeath) {
        if (attackerCount > 1) return -2;

        if (Math.abs(ipDiff) <= 50) return -15;
        if (ipDiff > 50) return -2;
        return -20;
    }

    // ----- KILL -----
    if (attackerCount > 1) return 0;

    let baseScore = 0;
    if (Math.abs(ipDiff) <= 50) baseScore = 15;
    else if (ipDiff > 50) baseScore = 20;
    else baseScore = 2;

    const rank = await getPlayerRank(killerId!);
    const multiplier = getRankMultiplier(rank);

    return Math.round(baseScore * multiplier);
}