import type { KillEvent } from "@prisma/client";
import { prisma } from "@/lib/prisma";

import { 
    calculateKillPoints, 
    calculateDeathPoints,
    calculateAssistPoints 
} from "@/app/(functions)/player-points-calculation";

export async function updatePlayerPoints(event: KillEvent) {

    const killerScore = calculateKillPoints(event);
    const victimScore = calculateDeathPoints(event);
    const assistScore = calculateAssistPoints(event);

    /* ============================
       1) KILLER
    ============================ */
    await prisma.playerPoints.upsert({
        where: { playerId: event.killerId },
        update: {
            kills: { increment: 1 },
            totalScore: { increment: killerScore },
            playerName: event.killerName,
        },
        create: {
            playerId: event.killerId,
            playerName: event.killerName,
            kills: 1,
            totalScore: killerScore,
        },
    });

    /* ============================
       2) ASSISTERS
    ============================ */
    if (event.groupMembers && Array.isArray(event.groupMembers)) {

        for (const member of event.groupMembers as any[]) {

            const assistId = member.Id;
            const assistName = member.Name;

            if (!assistId || assistId === event.killerId) continue;

            await prisma.playerPoints.upsert({
                where: { playerId: assistId },
                update: {
                    assists: { increment: 1 },
                    totalScore: { increment: assistScore },
                    playerName: assistName
                },
                create: {
                    playerId: assistId,
                    playerName: assistName ?? "Unknown",
                    assists: 1,
                    totalScore: assistScore,
                }
            });
        }
    }

    /* ============================
       3) VICTIM
    ============================ */
    await prisma.playerPoints.upsert({
        where: { playerId: event.victimId },
        update: {
            deaths: { increment: 1 },
            totalScore: { increment: victimScore },
            playerName: event.victimName,
        },
        create: {
            playerId: event.victimId,
            playerName: event.victimName,
            deaths: 1,
            totalScore: victimScore,
        },
    });
}