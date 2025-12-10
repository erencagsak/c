import { KillEvent } from "@prisma/client";

// Kill Points
export function calculateKillPoints(event: KillEvent) {
    const isSolo = event.groupMemberCount === 1;
    const killerIP = event.killerAvgIP;
    const victimIP = event.victimAvgIP;

    if (!isSolo) return 0;

    if (killerIP === victimIP) return 15;
    if (killerIP > victimIP) return 10;
    if (killerIP < victimIP) return 25;

    return 0;
}

// Assist Points = KillPoints * 0.3
export function calculateAssistPoints(event: KillEvent) {
    const killPoints = calculateKillPoints(event);
    return killPoints * 0.3;
}

// Death Points
export function calculateDeathPoints(event: KillEvent) {
    const isOutnumbered = event.groupMemberCount > 1;

    const killerIP = event.killerAvgIP;
    const victimIP = event.victimAvgIP;

    if (isOutnumbered) return -2;

    if (killerIP === victimIP) return -15;
    if (killerIP > victimIP) return -10;
    if (killerIP < victimIP) return -25;

    return 0;
}