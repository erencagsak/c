"use client";
import { useState } from "react";
import { Sparkles, TrendingUp, Skull, Users, Sword, Clock, User } from "lucide-react";

export default function MiddlePanel() {
    const [activeTab, setActiveTab] = useState("juicy");

    const tabs = [
        { id: "juicy", label: "Juicy Kills", icon: Sparkles },
        { id: "streamers", label: "Streamers", icon: TrendingUp },
        { id: "corrupted", label: "Corrupted Dungeon", icon: Skull },
        { id: "gank", label: "Gank", icon: Users },
    ];

    const juicyKills = [
        { killer: "DarkReaper", killerWeapon: "Deathgivers", victim: "NoobSlayer", victimWeapon: "Blazing Staff", fame: "485K", silver: "12.4M", participants: 5, time: "2m ago" },
        { killer: "ShadowHunter", killerWeapon: "Carrioncaller", victim: "GuildMaster", victimWeapon: "Galatine Pair", fame: "421K", silver: "9.8M", participants: 1, time: "5m ago" },
        { killer: "BloodMoon", killerWeapon: "Blazing Staff", victim: "CasualPlayer", victimWeapon: "Deathgivers", fame: "398K", silver: "8.2M", participants: 3, time: "12m ago" },
        { killer: "IronFist", killerWeapon: "Galatine Pair", victim: "RichKid", victimWeapon: "Hellion Jacket", fame: "367K", silver: "7.5M", participants: 1, time: "18m ago" },
        { killer: "NightBlade", killerWeapon: "Hellion Jacket", victim: "Farmer123", victimWeapon: "Carrioncaller", fame: "342K", silver: "6.9M", participants: 8, time: "25m ago" },
    ];

    const streamers = [
        { name: "Equart", status: "Live", viewers: "2.4K", game: "ZvZ", platform: "Twitch", killer: "DarkReaper", killerWeapon: "Deathgivers", victim: "NoobSlayer", victimWeapon: "Blazing Staff", fame: "485K", silver: "12.4M", participants: 5, time: "2m ago" },
        { name: "Lewpac", status: "Live", viewers: "1.8K", game: "Solo Dungeons", platform: "YouTube", killer: "ShadowHunter", killerWeapon: "Carrioncaller", victim: "GuildMaster", victimWeapon: "Galatine Pair", fame: "421K", silver: "9.8M", participants: 1, time: "5m ago" },
        { name: "Robinhoodrs", status: "Offline", viewers: "-", game: "Ganking", platform: "Kick", killer: "BloodMoon", killerWeapon: "Blazing Staff", victim: "CasualPlayer", victimWeapon: "Deathgivers", fame: "398K", silver: "8.2M", participants: 3, time: "12m ago" },
        { name: "Syndic", status: "Live", viewers: "892", game: "Corrupted", platform: "Twitch", killer: "IronFist", killerWeapon: "Galatine Pair", victim: "RichKid", victimWeapon: "Hellion Jacket", fame: "367K", silver: "7.5M", participants: 1, time: "18m ago" },
        { name: "Swolebenji", status: "Offline", viewers: "-", game: "Gathering", platform: "YouTube", killer: "NightBlade", killerWeapon: "Hellion Jacket", victim: "Farmer123", victimWeapon: "Carrioncaller", fame: "342K", silver: "6.9M", participants: 8, time: "25m ago" },
    ];

    const corruptedDungeon = [
        { player: "CrystalHunter", kills: 47, deaths: 12, winRate: "79.6%", rank: "Crystal", infamy: "12.4K", killer: "DarkReaper", killerWeapon: "Deathgivers", victim: "NoobSlayer", victimWeapon: "Blazing Staff", fame: "485K", silver: "12.4M", participants: 5, time: "2m ago" },
        { player: "DemonSlayer", kills: 38, deaths: 15, winRate: "71.7%", rank: "Crystal", infamy: "10.8K", killer: "ShadowHunter", killerWeapon: "Carrioncaller", victim: "GuildMaster", victimWeapon: "Galatine Pair", fame: "421K", silver: "9.8M", participants: 1, time: "5m ago" },
        { player: "ShadowAssassin", kills: 31, deaths: 19, winRate: "62.0%", rank: "Gold", infamy: "8.2K", killer: "BloodMoon", killerWeapon: "Blazing Staff", victim: "CasualPlayer", victimWeapon: "Deathgivers", fame: "398K", silver: "8.2M", participants: 3, time: "12m ago" },
        { player: "VoidWalker", kills: 28, deaths: 21, winRate: "57.1%", rank: "Gold", infamy: "7.1K", killer: "IronFist", killerWeapon: "Galatine Pair", victim: "RichKid", victimWeapon: "Hellion Jacket", fame: "367K", silver: "7.5M", participants: 1, time: "18m ago" },
        { player: "RuneMaster", kills: 24, deaths: 18, winRate: "57.1%", rank: "Silver", infamy: "5.9K", killer: "NightBlade", killerWeapon: "Hellion Jacket", victim: "Farmer123", victimWeapon: "Carrioncaller", fame: "342K", silver: "6.9M", participants: 8, time: "25m ago" },
    ];

    const gankKills = [
        { guild: "SQUAD", kills: 156, victims: 89, totalLoot: "45.2M", zone: "Caerleon", size: "5v12", killer: "DarkReaper", killerWeapon: "Deathgivers", victim: "NoobSlayer", victimWeapon: "Blazing Staff", fame: "485K", silver: "12.4M", participants: 5, time: "2m ago" },
        { guild: "ARCH", kills: 134, victims: 67, totalLoot: "38.9M", zone: "Bridgewatch", size: "8v15", killer: "ShadowHunter", killerWeapon: "Carrioncaller", victim: "GuildMaster", victimWeapon: "Galatine Pair", fame: "421K", silver: "9.8M", participants: 8, time: "5m ago" },
        { guild: "POE", kills: 98, victims: 54, totalLoot: "32.1M", zone: "Martlock", size: "6v9", killer: "BloodMoon", killerWeapon: "Blazing Staff", victim: "CasualPlayer", victimWeapon: "Deathgivers", fame: "398K", silver: "8.2M", participants: 3, time: "12m ago" },
        { guild: "BA", kills: 87, victims: 48, totalLoot: "28.7M", zone: "Fort Sterling", size: "4v11", killer: "IronFist", killerWeapon: "Galatine Pair", victim: "RichKid", victimWeapon: "Hellion Jacket", fame: "367K", silver: "7.5M", participants: 4, time: "18m ago" },
        { guild: "ELEVATE", kills: 76, victims: 42, totalLoot: "24.3M", zone: "Lymhurst", size: "7v8", killer: "NightBlade", killerWeapon: "Hellion Jacket", victim: "Farmer123", victimWeapon: "Carrioncaller", fame: "342K", silver: "6.9M", participants: 7, time: "25m ago" },
    ];

    const renderTable = () => {
        switch (activeTab) {
            case "juicy":
                return (
                    <div className="space-y-3">
                        {juicyKills.map((kill, index) => (
                            <div
                                key={index}
                                className="group p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-yellow-500/50 transition-all duration-300 cursor-pointer"
                            >
                                <div className="flex items-center justify-between">
                                    {/* Left Side - Killer */}
                                    <div className="flex items-center gap-3 flex-1">
                                        <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-green-500/10 border border-green-500/30">
                                            <Sword className="w-5 h-5 text-green-400" />
                                            <span className="text-green-400 font-bold">{kill.killerWeapon}</span>
                                        </div>
                                        <span className="text-green-400 font-bold text-lg">{kill.killer}</span>
                                    </div>

                                    {/* Center - VS */}
                                    <div className="px-6">
                                        <span className="text-white/50 font-bold text-xl">VS</span>
                                    </div>

                                    {/* Right Side - Victim */}
                                    <div className="flex items-center gap-3 flex-1 justify-end">
                                        <span className="text-red-400 font-bold text-lg">{kill.victim}</span>
                                        <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-red-500/10 border border-red-500/30">
                                            <Sword className="w-5 h-5 text-red-400" />
                                            <span className="text-red-400 font-bold">{kill.victimWeapon}</span>
                                        </div>
                                    </div>

                                    {/* Participants Badge */}
                                    <div className="ml-4">
                                        {kill.participants === 1 ? (
                                            <div className="px-3 py-2 rounded-lg bg-purple-500/20 border border-purple-500/30">
                                                <span className="text-purple-400 font-bold text-sm">Solo</span>
                                            </div>
                                        ) : (
                                            <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-500/20 border border-blue-500/30">
                                                <Users className="w-4 h-4 text-blue-400" />
                                                <span className="text-blue-400 font-bold text-sm">+{kill.participants}</span>
                                            </div>
                                        )}
                                    </div>

                                    {/* Fame & Silver */}
                                    <div className="ml-6 flex flex-col gap-1 min-w-[100px]">
                                        <div className="flex items-center gap-2">
                                            <Sparkles className="w-4 h-4 text-yellow-400" />
                                            <span className="text-yellow-400 font-bold">{kill.fame}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-white/50 text-xs">Silver:</span>
                                            <span className="text-green-400 font-semibold text-sm">{kill.silver}</span>
                                        </div>
                                    </div>

                                    {/* Time */}
                                    <div className="ml-6 flex items-center gap-2 text-white/50 text-sm min-w-[80px] justify-end">
                                        <Clock className="w-4 h-4" />
                                        {kill.time}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                );

            case "streamers":
                return (
                    <div className="space-y-3">
                        {streamers.map((stream, index) => (
                            <div
                                key={index}
                                className="group p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300 cursor-pointer"
                            >
                                <div className="flex items-center justify-between">
                                    {/* Left Side - Killer */}
                                    <div className="flex items-center gap-3 flex-1">
                                        <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-green-500/10 border border-green-500/30">
                                            <Sword className="w-5 h-5 text-green-400" />
                                            <span className="text-green-400 font-bold">{stream.killerWeapon}</span>
                                        </div>
                                        <span className="text-green-400 font-bold text-lg">{stream.killer}</span>
                                    </div>

                                    {/* Center - VS */}
                                    <div className="px-6">
                                        <span className="text-white/50 font-bold text-xl">VS</span>
                                    </div>

                                    {/* Right Side - Victim */}
                                    <div className="flex items-center gap-3 flex-1 justify-end">
                                        <span className="text-red-400 font-bold text-lg">{stream.victim}</span>
                                        <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-red-500/10 border border-red-500/30">
                                            <Sword className="w-5 h-5 text-red-400" />
                                            <span className="text-red-400 font-bold">{stream.victimWeapon}</span>
                                        </div>
                                    </div>

                                    {/* Platform Badge with VOD */}
                                    <div className="ml-4">
                                        <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-purple-500/20 border border-purple-500/30">
                                            {stream.platform === "Twitch" && (
                                                <svg className="w-5 h-5 text-purple-400" viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z"/>
                                                </svg>
                                            )}
                                            {stream.platform === "YouTube" && (
                                                <svg className="w-5 h-5 text-red-400" viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                                                </svg>
                                            )}
                                            {stream.platform === "Kick" && (
                                                <svg className="w-5 h-5 text-green-400" viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 15.318l-3.431-3.431-3.431 3.431-2.463-2.463 3.431-3.431-3.431-3.431 2.463-2.463 3.431 3.431 3.431-3.431 2.463 2.463-3.431 3.431 3.431 3.431-2.463 2.463z"/>
                                                </svg>
                                            )}
                                            <span className="text-purple-400 font-bold text-sm">VOD</span>
                                            {stream.participants > 1 && (
                                                <>
                                                    <span className="text-white/30">-</span>
                                                    <Users className="w-4 h-4 text-blue-400" />
                                                    <span className="text-blue-400 font-bold text-sm">+{stream.participants}</span>
                                                </>
                                            )}
                                        </div>
                                    </div>

                                    {/* Fame & Silver */}
                                    <div className="ml-6 flex flex-col gap-1 min-w-[100px]">
                                        <div className="flex items-center gap-2">
                                            <Sparkles className="w-4 h-4 text-yellow-400" />
                                            <span className="text-yellow-400 font-bold">{stream.fame} Fame</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-white/50 text-xs">Silver:</span>
                                            <span className="text-green-400 font-semibold text-sm">{stream.silver}</span>
                                        </div>
                                    </div>

                                    {/* Time */}
                                    <div className="ml-6 flex items-center gap-2 text-white/50 text-sm min-w-20 justify-end">
                                        <Clock className="w-4 h-4" />
                                        {stream.time}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                );

            case "corrupted":
                return (
                    <div className="space-y-3">
                        {corruptedDungeon.map((cd, index) => (
                            <div
                                key={index}
                                className="group p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-red-500/50 transition-all duration-300 cursor-pointer"
                            >
                                <div className="flex items-center justify-between">
                                    {/* Left Side - Killer */}
                                    <div className="flex items-center gap-3 flex-1">
                                        <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-green-500/10 border border-green-500/30">
                                            <Sword className="w-5 h-5 text-green-400" />
                                            <span className="text-green-400 font-bold">{cd.killerWeapon}</span>
                                        </div>
                                        <span className="text-green-400 font-bold text-lg">{cd.killer}</span>
                                    </div>

                                    {/* Center - VS */}
                                    <div className="px-6">
                                        <span className="text-white/50 font-bold text-xl">VS</span>
                                    </div>

                                    {/* Right Side - Victim */}
                                    <div className="flex items-center gap-3 flex-1 justify-end">
                                        <span className="text-red-400 font-bold text-lg">{cd.victim}</span>
                                        <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-red-500/10 border border-red-500/30">
                                            <Sword className="w-5 h-5 text-red-400" />
                                            <span className="text-red-400 font-bold">{cd.victimWeapon}</span>
                                        </div>
                                    </div>

                                    {/* Participants Badge */}
                                    <div className="ml-4">
                                        {cd.participants === 1 ? (
                                            <div className="px-3 py-2 rounded-lg bg-purple-500/20 border border-purple-500/30">
                                                <span className="text-purple-400 font-bold text-sm">Solo</span>
                                            </div>
                                        ) : (
                                            <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-500/20 border border-blue-500/30">
                                                <Users className="w-4 h-4 text-blue-400" />
                                                <span className="text-blue-400 font-bold text-sm">+{cd.participants}</span>
                                            </div>
                                        )}
                                    </div>

                                    {/* Fame & Silver */}
                                    <div className="ml-6 flex flex-col gap-1 min-w-[100px]">
                                        <div className="flex items-center gap-2">
                                            <Sparkles className="w-4 h-4 text-yellow-400" />
                                            <span className="text-yellow-400 font-bold">{cd.fame} Fame</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-white/50 text-xs">Silver:</span>
                                            <span className="text-green-400 font-semibold text-sm">{cd.silver}</span>
                                        </div>
                                    </div>

                                    {/* Time */}
                                    <div className="ml-6 flex items-center gap-2 text-white/50 text-sm min-w-20 justify-end">
                                        <Clock className="w-4 h-4" />
                                        {cd.time}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                );

            case "gank":
                return (
                    <div className="space-y-3">
                        {gankKills.map((gank, index) => (
                            <div
                                key={index}
                                className="group p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-orange-500/50 transition-all duration-300 cursor-pointer"
                            >
                                <div className="flex items-center justify-between">
                                    {/* Left Side - Killer */}
                                    <div className="flex items-center gap-3 flex-1">
                                        <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-green-500/10 border border-green-500/30">
                                            <Sword className="w-5 h-5 text-green-400" />
                                            <span className="text-green-400 font-bold">{gank.killerWeapon}</span>
                                        </div>
                                        <span className="text-green-400 font-bold text-lg">{gank.killer}</span>
                                    </div>

                                    {/* Center - VS */}
                                    <div className="px-6">
                                        <span className="text-white/50 font-bold text-xl">VS</span>
                                    </div>

                                    {/* Right Side - Victim */}
                                    <div className="flex items-center gap-3 flex-1 justify-end">
                                        <span className="text-red-400 font-bold text-lg">{gank.victim}</span>
                                        <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-red-500/10 border border-red-500/30">
                                            <Sword className="w-5 h-5 text-red-400" />
                                            <span className="text-red-400 font-bold">{gank.victimWeapon}</span>
                                        </div>
                                    </div>

                                    {/* Participants Badge */}
                                    <div className="ml-4">
                                        {gank.participants === 1 ? (
                                            <div className="px-3 py-2 rounded-lg bg-purple-500/20 border border-purple-500/30">
                                                <span className="text-purple-400 font-bold text-sm">Solo</span>
                                            </div>
                                        ) : (
                                            <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-500/20 border border-blue-500/30">
                                                <Users className="w-4 h-4 text-blue-400" />
                                                <span className="text-blue-400 font-bold text-sm">+{gank.participants}</span>
                                            </div>
                                        )}
                                    </div>

                                    {/* Fame & Silver */}
                                    <div className="ml-6 flex flex-col gap-1 min-w-[100px]">
                                        <div className="flex items-center gap-2">
                                            <Sparkles className="w-4 h-4 text-yellow-400" />
                                            <span className="text-yellow-400 font-bold">{gank.fame} Fame</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-white/50 text-xs">Silver:</span>
                                            <span className="text-green-400 font-semibold text-sm">{gank.silver}</span>
                                        </div>
                                    </div>

                                    {/* Time */}
                                    <div className="ml-6 flex items-center gap-2 text-white/50 text-sm min-w-20 justify-end">
                                        <Clock className="w-4 h-4" />
                                        {gank.time}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                );

            default:
                return null;
        }
    };

    return (
        <div className="w-full h-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-6 overflow-y-auto">
            {/* Tabs */}
            <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
                {tabs.map((tab) => {
                    const Icon = tab.icon;
                    return (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold whitespace-nowrap transition-all duration-300 ${
                                activeTab === tab.id
                                    ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/50"
                                    : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10"
                            }`}
                        >
                            <Icon className="w-5 h-5" />
                            {tab.label}
                        </button>
                    );
                })}
            </div>

            {/* Table Content */}
            <div>{renderTable()}</div>
        </div>
    );
}