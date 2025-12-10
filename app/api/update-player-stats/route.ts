import { prisma } from "@/lib/prisma";
import type { KillEvent } from "@prisma/client";

export async function updatePlayerStats(event: KillEvent) {
  const killerWeapon = event.killerMostUsedWeaponPicture || "Unknown";
  const victimWeapon = event.victimMostUsedWeaponPicture || "Unknown";

  const groupMembers = Array.isArray(event.groupMembers)
    ? (event.groupMembers as any[])
    : [];

  const isSoloKill = event.groupMemberCount === 1;
  const isOutnumberedKill = event.groupMemberCount > 1;

  /* ===============================
     1) KILLER STATS UPDATE
  =============================== */
  await prisma.playerStats.upsert({
    where: { playerId: event.killerId },
    update: {
      soloKills: isSoloKill ? { increment: 1 } : undefined,
      outnumberedKills: isOutnumberedKill ? { increment: 1 } : undefined,

      // Total Fame ONLY from killerKillFame
      totalFame: { increment: Number(event.killerKillFame || 0) },

      mostUsedWeapon: killerWeapon,
      playerName: event.killerName,
    },
    create: {
      playerId: event.killerId,
      playerName: event.killerName,
      soloKills: isSoloKill ? 1 : 0,
      outnumberedKills: isOutnumberedKill ? 1 : 0,
      totalFame: Number(event.killerKillFame || 0),
      mostUsedWeapon: killerWeapon,
    },
  });

  /* ===============================
     2) KILLER WEAPON UPDATE
  =============================== */
  await prisma.playerWeaponStats.upsert({
    where: {
      playerId_weapon: {
        playerId: event.killerId,
        weapon: killerWeapon,
      },
    },
    update: {
      kills: { increment: 1 },
      killFame: { increment: Number(event.killerKillFame || 0) },
      lastUsedAt: new Date(),
      playerName: event.killerName,
    },
    create: {
      playerId: event.killerId,
      playerName: event.killerName,
      weapon: killerWeapon,
      kills: 1,
      killFame: Number(event.killerKillFame || 0),
      lastUsedAt: new Date(),
    },
  });

  /* ===============================
     3) ASSISTS FOR GROUP MEMBERS
  =============================== */
  for (const member of groupMembers) {
    if (!member) continue;
    if (member.Id === event.killerId) continue; // killer zaten işlendi

    const fame = Number(member.KillFame || 0);

    // PLAYER STATS - ASSIST
    await prisma.playerStats.upsert({
      where: { playerId: member.Id },
      update: {
        assists: { increment: 1 },
        totalFame: { increment: fame },
        playerName: member.Name,
      },
      create: {
        playerId: member.Id,
        playerName: member.Name,
        assists: 1,
        totalFame: fame,
      },
    });

    // WEAPON STATS - ASSIST
    const assistWeapon = member?.Equipment?.MainHand?.Type || "Unknown";

    await prisma.playerWeaponStats.upsert({
      where: { playerId_weapon: { playerId: member.Id, weapon: assistWeapon } },
      update: {
        killFame: { increment: fame },
        lastUsedAt: new Date(),
        playerName: member.Name,
      },
      create: {
        playerId: member.Id,
        playerName: member.Name,
        weapon: assistWeapon,
        killFame: fame,
        lastUsedAt: new Date(),
      },
    });
  }

  /* ===============================
     4) VICTIM STATS UPDATE
  =============================== */
  await prisma.playerStats.upsert({
    where: { playerId: event.victimId },
    update: {
      soloDeaths: isSoloKill ? { increment: 1 } : undefined,
      outnumberedDeaths: isOutnumberedKill ? { increment: 1 } : undefined,
      playerName: event.victimName,
    },
    create: {
      playerId: event.victimId,
      playerName: event.victimName,
      soloDeaths: isSoloKill ? 1 : 0,
      outnumberedDeaths: isOutnumberedKill ? 1 : 0,
    },
  });

  /* ===============================
     5) VICTIM WEAPON UPDATE
  =============================== */
  await prisma.playerWeaponStats.upsert({
    where: { playerId_weapon: { playerId: event.victimId, weapon: victimWeapon } },
    update: {
      deaths: { increment: 1 },
      deathFame: { increment: Number(event.victimDeathFame || 0) },
      playerName: event.victimName,
    },
    create: {
      playerId: event.victimId,
      playerName: event.victimName,
      weapon: victimWeapon,
      deaths: 1,
      deathFame: Number(event.victimDeathFame || 0),
    },
  });
}