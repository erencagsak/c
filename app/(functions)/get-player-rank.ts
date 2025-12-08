import {prisma} from "@/lib/prisma";

export async function getPlayerRank(playerId: string) {
    const all = await prisma.playerPoints.findMany({
        orderBy: { totalScore: "desc" }
    });

    const rank = all.findIndex(p => p.playerId === playerId);

    return rank === -1 ? Infinity : rank + 1;
}