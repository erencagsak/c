import {prisma} from "@/lib/prisma";
import { KillEvent } from "@prisma/client";
import { calculationPoint } from "./calculation-point";

export async function updatePlayerPoint(event: KillEvent) {
    const killerId = event.killerId;
    const victimId = event.victimId;

    const killerScore = await calculationPoint(event, false, killerId);
    const victimScore = await calculationPoint(event, true);

    // KILLER
    await prisma.playerPoints.upsert({
        where: { playerId: killerId },
        update: {
            totalScore: { increment: killerScore },
            kills: { increment: 1 },
        },
        create: {
            playerId: killerId,
            playerName: event.killerName,
            totalScore: killerScore,
            kills: 1,
        },
    });

    // VICTIM
    await prisma.playerPoints.upsert({
        where: { playerId: victimId },
        update: {
            deaths: { increment: 1 },
            totalScore: { increment: victimScore },
        },
        create: {
            playerId: victimId,
            playerName: event.victimName,
            totalScore: victimScore,
            deaths: 1,
        },
    });
}