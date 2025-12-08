import {prisma} from "@/lib/prisma";
import { NextResponse } from "next/server";
import { updatePlayerPoint } from "@/app/(functions)/update-player-point";

export async function GET() {
    try {
        const events = await prisma.killEvent.findMany();

        let count = 0;

        for (const ev of events) {
            await updatePlayerPoint(ev);
            count++;
        }

        return NextResponse.json({
            success: true,
            message: `Updated ${count} kill events.`,
        });
    } catch (err) {
        console.error(err);

        return NextResponse.json({ error: "Failed" });
    }
}