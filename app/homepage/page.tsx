import Topbar from "@/app/components/topbar";
import LeftPanel from "@/app/components/homepage-panels/left-panel";
import MiddlePanel from "@/app/components/homepage-panels/middle-panel";
import RightPanel from "@/app/components/homepage-panels/right-panel";

export default function Homepage() {
  return (
    <div className="w-full min-h-screen bg-[#080A12] flex flex-col">
      <Topbar />

      <div className="flex w-full gap-1 px-1 pt-2 h-[calc(100vh-60px)]">
        <div className="w-[25%] overflow-y-auto hide-scrollbar">
          <LeftPanel />
        </div>

        <div className="w-[50%] overflow-y-auto hide-scrollbar">
          <MiddlePanel />
        </div>

        <div className="w-[25%] overflow-y-auto hide-scrollbar">
          <RightPanel />
        </div>
      </div>
    </div>
  );
}