"use client";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Menu, Coffee, Sword, MessageCircle, Search } from "lucide-react";

export default function Topbar() {
  return (
    <div className="w-full border-b border-white/10 bg-linear-to-r from-slate-950 via-slate-900 to-slate-950 backdrop-blur-xl shadow-2xl">
      <div className="mx-auto flex items-center justify-between py-4 px-6 gap-6">
        
        {/* Logo and Website Title */}
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="relative w-12 h-12 rounded-xl overflow-hidden flex items-center justify-center 
                          ring-2 ring-purple-500/50 group-hover:ring-purple-400 transition-all duration-300
                          shadow-lg shadow-purple-500/30 group-hover:shadow-purple-400/50">
            <Image
              src="/images/icon.png"
              alt="Albion Icon"
              width={48}
              height={48}
              priority
              className="group-hover:scale-110 transition-transform duration-300"
            />
            {/* Glow effect */}
            <div className="absolute inset-0 bg-linear-to-br from-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors whitespace-nowrap">
              Albion Kills
            </span>
            <span className="text-xs text-white/50 font-medium">Leaderboard & Stats</span>
          </div>
        </div>

        {/* Searchbox */}
        <div className="flex-1 flex justify-center max-w-2xl">
          <div className="relative w-full group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40 group-hover:text-purple-400 transition-colors" />
            <Input
              placeholder="Search players, guilds, alliances..."
              className="w-full pl-12 pr-4 py-6 rounded-xl
                       bg-white/5 border-white/10 
                       text-white placeholder:text-white/40
                       focus:bg-white/10 focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20
                       hover:bg-white/8 hover:border-white/20
                       transition-all duration-300
                       backdrop-blur-sm"
            />
          </div>
        </div>

        {/* Dropdown Menu */}
        <div className="flex items-center">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                variant="outline"
                className="relative overflow-hidden px-4 py-6 rounded-xl
                         bg-white/5 border-white/10 hover:bg-white/10 hover:border-purple-500/50
                         text-white hover:text-purple-400
                         shadow-lg hover:shadow-purple-500/20
                         transition-all duration-300 group"
              >
                <Menu className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
                
                {/* Hover shine effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-linear-to-r from-transparent via-white/10 to-transparent" />
              </Button>
            </DropdownMenuTrigger>
            
            <DropdownMenuContent 
              align="end"
              className="min-w-[220px] p-2 rounded-xl
                       bg-slate-900/95 backdrop-blur-xl border-white/10
                       shadow-2xl shadow-black/50"
            >
              <DropdownMenuItem className="group rounded-lg px-4 py-3 cursor-pointer
                                         hover:bg-purple-500/10 focus:bg-purple-500/10
                                         transition-all duration-200">
                <MessageCircle className="w-5 h-5 mr-3 text-purple-400 group-hover:scale-110 group-hover:text-purple-300 transition-all" />
                <span className="text-white/90 group-hover:text-white font-medium">Discord</span>
              </DropdownMenuItem>
              
              <DropdownMenuItem className="group rounded-lg px-4 py-3 cursor-pointer
                                         hover:bg-red-500/10 focus:bg-red-500/10
                                         transition-all duration-200">
                <Sword className="w-5 h-5 mr-3 text-red-400 group-hover:scale-110 group-hover:text-red-300 transition-all" />
                <span className="text-white/90 group-hover:text-white font-medium">Gucci Kills</span>
              </DropdownMenuItem>
              
              <DropdownMenuItem className="group rounded-lg px-4 py-3 cursor-pointer
                                         hover:bg-yellow-500/10 focus:bg-yellow-500/10
                                         transition-all duration-200">
                <Coffee className="w-5 h-5 mr-3 text-yellow-400 group-hover:scale-110 group-hover:text-yellow-300 transition-all" />
                <span className="text-white/90 group-hover:text-white font-medium">Buy me a coffee</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}