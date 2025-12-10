import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import { NextResponse } from "next/server";
import { updatePlayerStats } from "../update-player-stats/route";
import { updatePlayerPoints } from "../update-player-points/route";

export async function GET() {

    const startTime = Date.now();
    console.log("\n🔵 [PROCESS STARTED] Fetching unprocessed KillEvents...\n");

    const events = await prisma.killEvent.findMany({
        where: { processed: false },
        orderBy: { timestamp: "asc" }
    });

    console.log(`🟣 Found ${events.length} events to process.\n`);

    if (!events.length) {
        console.log("⚪ No events to process. Exiting.\n");
        return NextResponse.json({ message: "No events to process" });
    }

    for (const event of events) {

        console.log(`\n==============================`);
        console.log(`🟠 Processing Event ID: ${event.id}`);
        console.log(`⚔️ Killer: ${event.killerName} (${event.killerId})`);
        console.log(`💀 Victim: ${event.victimName} (${event.victimId})`);
        console.log("==============================\n");

        await prisma.$transaction(async (tx: Prisma.TransactionClient) => {

            console.log("➡️ Updating PlayerStats...");
            await updatePlayerStats(event);
            console.log("✅ PlayerStats updated");

            console.log("➡️ Updating PlayerPoints...");
            await updatePlayerPoints(event);
            console.log("✅ PlayerPoints updated");

            console.log("➡️ Marking event as processed...");
            await tx.killEvent.update({
                where: { id: event.id },
                data: { processed: true }
            });
            console.log("✅ Event marked as processed");
        });

        console.log(`🟢 Event ${event.id} processed successfully.\n`);
    }

    const totalMs = Date.now() - startTime;
    console.log(`\n✔️ All events processed.`);
    console.log(`⏱ Total Processing Time: ${totalMs}ms`);
    console.log(`=======================================\n`);

    return NextResponse.json({
        message: "Processed successfully",
        processedCount: events.length,
        totalMs
    });
}