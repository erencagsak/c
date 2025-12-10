"use client";
import { Trophy, Skull, Swords, TrendingUp, Coins } from "lucide-react";

export default function LeftPanel() {
  const leaderboardData = [
    { rank: 1, name: "ShadowBlade", score: 15420, kills: 1847, deaths: 234, kd: 7.89, killFame: "2.4M", profit: "156M" },
    { rank: 2, name: "IronWolf", score: 14830, kills: 1692, deaths: 289, kd: 5.85, killFame: "2.1M", profit: "142M" },
    { rank: 3, name: "DarkKnight", score: 13950, kills: 1543, deaths: 312, kd: 4.95, killFame: "1.9M", profit: "138M" },
    { rank: 4, name: "BloodRaven", score: 12760, kills: 1421, deaths: 298, kd: 4.77, killFame: "1.7M", profit: "125M" },
    { rank: 5, name: "StormBreaker", score: 11890, kills: 1356, deaths: 334, kd: 4.06, killFame: "1.6M", profit: "119M" },
    { rank: 6, name: "SilentHunter", score: 11240, kills: 1298, deaths: 347, kd: 3.74, killFame: "1.5M", profit: "112M" },
    { rank: 7, name: "FirePhoenix", score: 10670, kills: 1234, deaths: 356, kd: 3.47, killFame: "1.4M", profit: "108M" },
    { rank: 8, name: "IceViper", score: 10120, kills: 1189, deaths: 378, kd: 3.15, killFame: "1.3M", profit: "98M" },
    { rank: 9, name: "ThunderFist", score: 9580, kills: 1145, deaths: 392, kd: 2.92, killFame: "1.2M", profit: "94M" },
    { rank: 10, name: "NightStalker", score: 9120, kills: 1098, deaths: 401, kd: 2.74, killFame: "1.1M", profit: "89M" },
  ];

  // Rank Colors
  const getRankColor = (rank: number) => {
    if (rank === 1) return "from-yellow-500 to-yellow-600";
    if (rank === 2) return "from-red-500 to-red-600";
    if (rank === 3) return "from-blue-600 to-blue-700";
    
    return "from-purple-500 to-purple-600";
  };
  const getRankBg = (rank: number) => {
    if (rank === 1) return "bg-yellow-500/10 border-yellow-500/30";
    if (rank === 2) return "bg-orange-600/10 border-orange-600/30";
    if (rank === 3) return "bg-blue-600/10 border-blue-600/30";

    return "bg-purple-500/5 border-white/10";
  };

  return (
    <div className="w-full h-full bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 p-6 overflow-y-auto">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 rounded-lg bg-linear-to-br from-yellow-500 to-orange-600">
            <Trophy className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-white">Top Players</h2>
        </div>
        <p className="text-white/50 text-sm ml-12">Current season leaderboard rankings</p>
      </div>

      {/* Leaderboard List */}
      <div className="space-y-2">
        {leaderboardData.map((player) => (
          <div
            key={player.rank}
            className={`group relative overflow-hidden rounded-xl border ${getRankBg(player.rank)}
                       hover:bg-white/5 transition-all duration-300 cursor-pointer
                       hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/10`}
          >
            {/* Hover shine effect */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-linear-to-r from-transparent via-white/5 to-transparent" />
            
            <div className="relative p-4">
              <div className="flex items-center gap-4">
                
                {/* Player Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-2">
                    {/* Rank Badge */}
                    <div className={`shrink-0 w-12 h-12 rounded-lg bg-linear-to-br ${getRankColor(player.rank)}
                                flex items-center justify-center shadow-lg`}>
                    <span className="text-white font-bold text-lg">#{player.rank}</span>
                    </div>
                    
                    {/* Player Name */}
                    <h3 className="text-white font-bold text-lg truncate">{player.name}</h3>
                    <div className="flex items-center gap-1 px-2 py-1 rounded-md bg-purple-500/20">
                      <TrendingUp className="w-4 h-4 text-purple-400" />
                      <span className="text-purple-400 font-semibold text-sm">{player.score}</span>
                    </div>
                  </div>

                  {/* Stats Row */}
                  <div className="grid grid-cols-2 gap-2 mb-3">
                    <div className="flex items-center gap-2 px-2 py-1 rounded-md bg-green-500/10">
                      <Swords className="w-4 h-4 text-green-400" />
                      <span className="text-white/70 text-xs">Kills:</span>
                      <span className="text-white font-semibold text-sm">{player.kills}</span>
                    </div>
                    <div className="flex items-center gap-2 px-2 py-1 rounded-md bg-red-500/10">
                      <Skull className="w-4 h-4 text-red-400" />
                      <span className="text-white/70 text-xs">Deaths:</span>
                      <span className="text-white font-semibold text-sm">{player.deaths}</span>
                    </div>
                  </div>

                  {/* K/D Ratio */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-white/50 text-xs">K/D Ratio:</span>
                    <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-linear-to-r from-green-500 to-emerald-400 rounded-full"
                        style={{ width: `${Math.min(player.kd * 10, 100)}%` }}
                      />
                    </div>
                    <span className="text-emerald-400 font-bold text-sm">{player.kd}</span>
                  </div>

                  {/* Fame & Profit */}
                  <div className="flex items-center justify-between pt-2 border-t border-white/10">
                    <div className="flex items-center gap-2">
                      <Trophy className="w-4 h-4 text-yellow-400" />
                      <span className="text-white/50 text-xs">Kill Fame:</span>
                      <span className="text-yellow-400 font-semibold text-sm">{player.killFame}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Coins className="w-4 h-4 text-blue-400" />
                      <span className="text-white/50 text-xs">Daily Profit:</span>
                      <span className="text-blue-400 font-semibold text-sm">{player.profit}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}