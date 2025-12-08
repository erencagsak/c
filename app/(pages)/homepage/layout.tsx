import Topbar from "@/app/components/topbar";
import { ReactNode } from "react";
import LeftPanel from "@/app/(pages)/homepage/(panels)/left-panel";
import RightPanel from "@/app/(pages)/homepage/(panels)/right-panel";
import MiddlePanel from "@/app/(pages)/homepage/(panels)/middle-panel";

export default function HomepageLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="w-full min-h-screen bg-[#080A12]">

      {/* TOPBAR */}
      <Topbar />

      <div className="w-full flex gap-1 px-1 pt-2">
        {/* LEFT PANEL */}
        <div className="w-[25%] h-[calc(200vh-10px)]">
          <LeftPanel />
        </div>

        {/* MIDDLE PANEL */}
        <div className="w-[50%]">
          <MiddlePanel />
          {children}
        </div>

        {/* RIGHT PANEL */}
        <div className="w-[25%]">
          <RightPanel />
        </div>
      </div>
    </div>
  );
}
