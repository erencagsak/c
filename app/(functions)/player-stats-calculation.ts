/**
 * Average IP Calculation: 
 * newAverageIP = 
 * (oldAverageIP * oldCount + newIP) / (oldCount + 1)
 */

import { prisma } from "@/lib/prisma";

export async function calculateNewAverageIP(playerId: string, newIP: number){
    const stats = await prisma.playerStats.findUnique({
        where: {playerId},
        select: {averageIP: true, soloKills: true, outnumberedKills: true}
    });

    if(!stats || stats.averageIP === null){
        return newIP;
    }

    const totalKills = stats.soloKills + stats.outnumberedKills;

    if (totalKills <= 0) return newIP;

    const oldAvg = stats.averageIP;

    const newAvg = (oldAvg * totalKills + newIP) / (totalKills + 1);

    return Number(newAvg.toFixed(2));
}

export async function calculateNewWeaponIP(
    playerId: string,
    weapon: string,
    newIP: number
){
    const weaponStats = await prisma.playerWeaponStats.findUnique({
        where: {
            playerId_weapon: {
                playerId,
                weapon
            }
        },
        select: {
            averageIP: true,
            kills: true,
            deaths: true
        }
    });

    if (!weaponStats || weaponStats.averageIP === null) return newIP;

    const oldAvg = weaponStats.averageIP;
    const count = weaponStats.kills + weaponStats.deaths;

    if (count <= 0) return newIP;

    const newAvg = (oldAvg * count + newIP) / (count + 1);

    return Number(newAvg.toFixed(2));
}

export async function calculateNewMaxWeaponIP(
    playerId: string,
    weapon: string,
    newIP: number
) {
    const weaponStats = await prisma.playerWeaponStats.findUnique({
        where: {
            playerId_weapon: {
                playerId,
                weapon
            }
        },
        select: {
            maxIP: true
        }
    });

    if(!weaponStats || weaponStats.maxIP === null) return newIP;

    return Math.max(weaponStats.maxIP, newIP);
}

export async function calculateNewMinWeaponIP(
    playerId: string,
    weapon: string,
    newIP: number
) {
    const weaponStats = await prisma.playerWeaponStats.findUnique({
        where: {
            playerId_weapon: {
                playerId,
                weapon
            }
        },
        select: {
            minIP: true
        }
    });

    if(!weaponStats || weaponStats.minIP === null) return newIP;

    return Math.min(weaponStats.minIP, newIP);
}

export async function calculateNewAverageDeathIP(playerId: string, newIP: number) {
    const stats = await prisma.playerStats.findUnique({
        where: { playerId },
        select: { averageDeathIP: true, outnumberedDeaths: true, deaths: true }
    });

    // Hiç veri yoksa yeni IP direk atanır
    if (!stats || stats.averageDeathIP === null) {
        return newIP;
    }

    // Toplam death sayısı = normal deaths + outnumbered deaths
    const totalDeaths = stats.deaths;

    if (totalDeaths <= 0) return newIP;

    const oldAvg = stats.averageDeathIP;

    const newAvg = (oldAvg * totalDeaths + newIP) / (totalDeaths + 1);

    return Number(newAvg.toFixed(2));
}