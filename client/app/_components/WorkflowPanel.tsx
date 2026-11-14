import { workflowRows } from "./dashboardData";

export function WorkflowPanel() {
  return (
    <section className="rounded-xl border border-[#2d342f] bg-[#fbf7ef] p-5 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-2xl font-black text-[#2f302b]">
          Platform Intelligence Workflow
        </h2>
        <div className="flex gap-2">
          <button className="rounded-full border border-[#353a34] px-4 py-2 text-sm font-bold">
            + Add Data Source
          </button>
          <button className="rounded-full border border-[#353a34] bg-[#d6ff58] px-4 py-2 text-sm font-bold text-[#17281f]">
            View Architecture
          </button>
        </div>
      </div>

      <div className="relative mt-5 space-y-4">
        <div className="absolute left-[32%] top-0 hidden h-full border-l border-dashed border-[#a99f91] md:block" />
        <span className="absolute left-[32%] top-0 hidden -translate-x-1/2 rounded-md bg-[#173027] px-2 py-1 text-[11px] font-black text-[#d6ff58] md:block">
          28:38
        </span>
        {workflowRows.map((row) => (
          <article
            className="relative grid gap-2 md:grid-cols-[190px_1fr_100px]"
            key={row.label}
          >
            <div className="flex items-center gap-2 text-sm font-semibold text-[#3c3a35]">
              <span className={`size-3 rounded-sm ${row.color}`} />
              {row.label}
            </div>
            <div className="relative h-4 overflow-hidden rounded-full bg-[#e7dfd2]">
              {row.bars.map((bar, index) => (
                <span
                  className={`absolute top-0 h-full rounded-full ${bar.color}`}
                  key={`${row.label}-${index}`}
                  style={{ left: bar.left, width: bar.width }}
                />
              ))}
            </div>
            <p className="text-right text-xs font-medium text-[#9a9389]">
              {row.meta}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
