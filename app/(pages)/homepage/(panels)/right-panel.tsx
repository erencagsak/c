"use client";
import { useState, useEffect } from "react";
import { RefreshCw, Skull, Swords, DollarSign, Sword, Users } from "lucide-react";

export default function RightPanel() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const stats = [
    { icon: Swords, label: "Total Kills Today", value: "24,567", color: "text-green-400", bg: "bg-green-500/10" },
    { icon: Skull, label: "Total Deaths Today", value: "24,289", color: "text-red-400", bg: "bg-red-500/10" },
    { icon: DollarSign, label: "Silver Lost", value: "842.6M", color: "text-yellow-400", bg: "bg-yellow-500/10" },
  ];

  const popularWeapons = [
    { name: "Carrioncaller", users: 4823, percentage: 18.5, color: "bg-purple-500" },
    { name: "Blazing Staff", users: 3956, percentage: 15.2, color: "bg-orange-500" },
    { name: "Deathgivers", users: 3421, percentage: 13.1, color: "bg-red-500" },
    { name: "Galatine Pair", users: 2867, percentage: 11.0, color: "bg-blue-500" },
    { name: "Claymore", users: 2134, percentage: 8.2, color: "bg-cyan-500" },
  ];

  const serverData = [
    { region: "Europe", players: 12453, percentage: 52, color: "bg-blue-500" },
    { region: "Americas", players: 7821, percentage: 33, color: "bg-green-500" },
    { region: "Asia", players: 3589, percentage: 15, color: "bg-purple-500" },
  ];

  const lastUpdate = "2 minutes ago";

  return (
    <div className="w-full h-full bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 p-6 overflow-y-auto">
      {/* Last Update */}
      <div className="mb-6 p-4 rounded-xl bg-white/5 border border-white/10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-green-500/20">
              <RefreshCw className="w-5 h-5 text-green-400 animate-spin" style={{ animationDuration: "3s" }} />
            </div>
            <div>
              <div className="text-white/50 text-xs">Last Updated</div>
              <div className="text-white font-semibold">{lastUpdate}</div>
            </div>
          </div>
          <div className="text-white/70 text-sm">
            {currentTime.toLocaleTimeString()}
          </div>
        </div>
      </div>

      {/* Today's Stats */}
      <div className="mb-6">
        <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
          <Swords className="w-5 h-5 text-purple-400" />
          Today&apos;s Statistics
        </h3>
        <div className="space-y-3">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className={`p-4 rounded-xl ${stat.bg} border border-white/10 hover:scale-105 transition-transform duration-300`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Icon className={`w-6 h-6 ${stat.color}`} />
                    <div>
                      <div className="text-white/50 text-xs">{stat.label}</div>
                      <div className={`${stat.color} font-bold text-2xl`}>{stat.value}</div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Most Popular Weapons */}
      <div className="mb-6">
        <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
          <Sword className="w-5 h-5 text-orange-400" />
          Popular Weapons
        </h3>
        <div className="p-4 rounded-xl bg-white/5 border border-white/10">
          <div className="space-y-4">
            {popularWeapons.map((weapon, index) => (
              <div key={index} className="group">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-white/70 text-sm font-medium">{index + 1}.</span>
                    <span className="text-white font-semibold">{weapon.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-white/50 text-xs">{weapon.users.toLocaleString()}</span>
                    <span className="text-purple-400 font-semibold text-sm">{weapon.percentage}%</span>
                  </div>
                </div>
                <div className="relative h-2 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className={`absolute inset-y-0 left-0 ${weapon.color} rounded-full transition-all duration-500 group-hover:opacity-80`}
                    style={{ width: `${weapon.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Player Distribution by Region */}
      <div className="mb-6">
        <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
          <Users className="w-5 h-5 text-blue-400" />
          Player Distribution
        </h3>
        <div className="p-4 rounded-xl bg-white/5 border border-white/10">
          {/* Total Players */}
          <div className="mb-4 p-3 rounded-lg bg-purple-500/10 border border-purple-500/30">
            <div className="text-white/50 text-xs mb-1">Total Players Online</div>
            <div className="text-white font-bold text-3xl">
              {serverData.reduce((acc, server) => acc + server.players, 0).toLocaleString()}
            </div>
          </div>

          {/* Regional Breakdown */}
          <div className="space-y-4">
            {serverData.map((server, index) => (
              <div key={index} className="group">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${server.color}`} />
                    <span className="text-white font-semibold">{server.region}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-white font-bold">{server.players.toLocaleString()}</span>
                    <span className="text-white/50 text-sm">({server.percentage}%)</span>
                  </div>
                </div>
                <div className="relative h-2 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className={`absolute inset-y-0 left-0 ${server.color} rounded-full transition-all duration-500 group-hover:opacity-80`}
                    style={{ width: `${server.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Visual Chart */}
          <div className="mt-6 flex items-end justify-around gap-2 h-32">
            {serverData.map((server, index) => (
              <div key={index} className="flex flex-col items-center gap-2 flex-1">
                <div className="relative w-full flex items-end justify-center group">
                  <div
                    className={`w-full ${server.color} rounded-t-lg transition-all duration-500 hover:opacity-80 cursor-pointer`}
                    style={{ height: `${(server.players / 12453) * 100}%` }}
                  >
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 px-2 py-1 rounded text-white text-xs whitespace-nowrap">
                      {server.players.toLocaleString()}
                    </div>
                  </div>
                </div>
                <span className="text-white/70 text-xs font-medium">{server.region}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lethal Kills by Region */}
      <div className="mb-6">
        <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
          <Skull className="w-5 h-5 text-red-400" />
          Lethal Kills by Region
        </h3>
        <div className="p-4 rounded-xl bg-white/5 border border-white/10">
          {/* Bar Chart */}
          <div className="flex items-end justify-center gap-8 h-64 bg-white/5 rounded-lg p-4">
            {[
              { region: "Europe", kills: 8924, color: "bg-blue-500", textColor: "text-blue-400" },
              { region: "Americas", kills: 5843, color: "bg-green-500", textColor: "text-green-400" },
              { region: "Asia", kills: 3267, color: "bg-purple-500", textColor: "text-purple-400" }
            ].map((data, index) => {
              const maxKills = 8924; // Europe has the highest
              const barHeight = (data.kills / maxKills) * 100;
              
              return (
                <div key={index} className="flex flex-col items-center justify-end gap-3 h-full">
                  {/* Bar Container */}
                  <div className="relative w-16 flex items-end justify-center group" style={{ height: `${barHeight}%` }}>
                    {/* Bar */}
                    <div
                      className={`w-full h-full ${data.color} rounded-t-lg transition-all duration-500 hover:brightness-110 cursor-pointer relative`}
                    >
                      {/* Value on hover */}
                      <div className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/90 px-3 py-2 rounded-lg text-white text-sm font-bold whitespace-nowrap shadow-xl z-10">
                        {data.kills.toLocaleString()} kills
                      </div>
                      
                      {/* Animated shine effect */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity overflow-hidden rounded-t-lg">
                        <div className="absolute inset-0 bg-linear-to-b from-white/30 via-transparent to-transparent" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Region Label */}
                  <div className="text-center">
                    <span className="text-white/70 text-sm font-medium block">{data.region}</span>
                    <span className={`${data.textColor} font-bold text-xs`}>
                      {data.kills.toLocaleString()}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}