import { HeroPanel } from "./HeroPanel";
import { IntelligenceRail } from "./IntelligenceRail";
import { LessonControls } from "./LessonControls";
import { OverviewCard, ReportCard, SnapshotQuiz } from "./RightPanels";
import { Sidebar } from "./Sidebar";
import { TopBar } from "./TopBar";
import { WorkflowPanel } from "./WorkflowPanel";

export function Dashboard() {
  return (
    <main className="min-h-screen bg-[#eee7dc] text-[#282822] lg:flex">
      <Sidebar />
      <div className="min-w-0 flex-1 px-4 py-5 sm:px-7 lg:px-8">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-4">
          <TopBar />
          <div className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_360px] xl:gap-9">
            <div className="grid gap-4">
              <div className="grid gap-3 lg:grid-cols-[minmax(0,1fr)_142px]">
                <HeroPanel />
                <IntelligenceRail />
              </div>
              <LessonControls />
              <WorkflowPanel />
            </div>
            <aside className="grid content-start gap-4">
              <OverviewCard />
              <SnapshotQuiz />
              <ReportCard />
            </aside>
          </div>
        </div>
      </div>
    </main>
  );
}
