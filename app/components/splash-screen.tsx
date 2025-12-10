"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { ChevronRight, Trophy, Skull, Swords, TrendingUp, Clock } from "lucide-react";
import { useEffect, useState } from "react";

export default function SplashScreen() {
  const router = useRouter();
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    Promise.resolve().then(() => setIsLoaded(true));

    const timer = setInterval(() => setCurrentTime(new Date()), 1000);

    return () => clearInterval(timer);
  }, []);

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  const stats = [
    { icon: Skull, label: "Total Deaths", value: "1,247,891", trend: "+12%" },
    { icon: Swords, label: "Total Kills", value: "1,247,891", trend: "+8%" },
    { icon: Trophy, label: "Top Players", value: "50,000+", trend: "+15%" },
    { icon: TrendingUp, label: "Active Now", value: "24,567", trend: "+5%" },
  ];

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Banner Image */}
      <div className="absolute top-0 left-0 right-0 h-[55vh]">
        <Image src="/images/banner.png" alt="Albion Banner" fill priority className="object-cover" />

        <div className="absolute inset-0 bg-linear-to-b from-black/40 via-transparent to-black" />
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent" />

        <div
          className="absolute inset-0 bg-linear-to-br from-purple-900/20 via-transparent to-blue-900/20 animate-pulse"
          style={{ animationDuration: "3s" }}
        />
      </div>

      {/* CONTENT */}
      <div
        className={`relative z-10 h-full flex flex-col items-center justify-between transition-all duration-1000 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        {/* DATE / TIME */}
        <div className="flex-1 flex items-center justify-center pt-32">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-3 mb-2">
              <Clock className="w-6 h-6 text-purple-400" />
              <h1 className="text-6xl font-bold text-white tracking-tight">
                {formatTime(currentTime)}
              </h1>
            </div>
            <p className="text-xl text-white/70 font-medium">{formatDate(currentTime)}</p>
          </div>
        </div>

        {/* STAT CARDS */}
        <div className="w-full max-w-6xl px-6 mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-md border border-white/10 p-4
                           hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <Icon className="w-5 h-5 text-purple-400" />
                      <span className="text-xs text-green-400 font-semibold">{stat.trend}</span>
                    </div>
                    <div className="space-y-1">
                      <p className="text-2xl font-bold text-white">{stat.value}</p>
                      <p className="text-xs text-white/60 font-medium">{stat.label}</p>
                    </div>
                  </div>

                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-linear-to-r from-transparent via-white/10 to-transparent" />
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA BUTTON */}
        <div className="w-full px-6 pb-12 space-y-6">
          <div className="flex justify-center">
            <Button
              size="lg"
              className="group relative overflow-hidden px-12 py-7 text-lg font-semibold rounded-2xl
                         bg-linear-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700
                         shadow-2xl shadow-purple-500/50 hover:shadow-purple-500/70
                         transition-all duration-300 hover:scale-105 active:scale-95
                         border border-white/20"
              onClick={() => router.push("/homepage")}
            >
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-linear-to-r from-transparent via-white/20 to-transparent" />

              <span className="relative flex items-center gap-3">
                Enter Website
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
          </div>

          <div className="flex justify-center">
            <p className="text-white/60 text-sm backdrop-blur-sm text-center max-w-md">
              Track real-time deaths, kills, leaderboards and player statistics for Albion Online
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/20 to-transparent" />
    </div>
  );
}