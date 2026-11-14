import { capabilityTags } from "./dashboardData";

export function OverviewCard() {
  return (
    <section className="rounded-xl border border-[#28342d] bg-[#f9f4ea] p-4 shadow-sm">
      <div className="mb-4 grid grid-cols-3 rounded-full border border-[#25372d] p-1 text-sm font-medium">
        {["Overview", "Architecture", "Resources"].map((item, index) => (
          <span
            className={`rounded-full px-4 py-2 text-center ${
              index === 0 ? "bg-[#1f332a] text-white" : "text-[#333630]"
            }`}
            key={item}
          >
            {item}
          </span>
        ))}
      </div>
      <div className="rounded-xl border border-[#94a0a0] bg-[#fbf7ef] p-4">
        <h2 className="text-xl font-black text-[#3a3934]">
          Platform Overview
        </h2>
        <p className="mt-3 text-sm leading-6 text-[#3f403a]">
          ContractLens integrates legal intelligence, KPI analytics, tender
          evaluation, industrial knowledge, and project compliance into one
          AI-powered enterprise platform.
        </p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {capabilityTags.map((tag) => (
            <span
              className="rounded-full border border-[#928c80] px-2 py-1 text-[11px] font-medium text-[#45453f]"
              key={tag}
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-4 flex items-center justify-between border-t border-dashed border-[#c9c0b3] pt-3 text-sm">
          <span className="font-bold text-[#3b3c35]">
            &gt; Explore Platform Architecture
          </span>
          <span className="text-xs text-[#8c867c]">20:48</span>
        </div>
      </div>
    </section>
  );
}

export function SnapshotQuiz() {
  const answers = [
    ["A", "Knowledge Graph + RAG", true],
    ["B", "Manual Data Entry", false],
    ["C", "Static Reporting", false],
  ] as const;

  return (
    <section className="overflow-hidden rounded-xl border border-[#25372d] bg-[#fbf7ef] shadow-sm">
      <div className="flex items-center justify-between bg-[#d6ff58] px-4 py-3 text-[#213124]">
        <h2 className="text-lg font-black">AI Intelligence Snapshot</h2>
        <span className="text-[11px] font-black tracking-[0.1em]">
          58 / 65
        </span>
      </div>
      <div className="p-4">
        <p className="text-base leading-6 text-[#373a33]">
          Which technology connects enterprise documents and enables
          evidence-based AI responses?
        </p>
        <div className="mt-4 grid gap-2">
          {answers.map(([letter, label, correct]) => (
            <button
              className={`flex items-center gap-3 rounded-lg border px-3 py-2 text-left text-sm font-semibold ${
                correct
                  ? "border-[#10241f] bg-[#10241f] text-[#d6ff58]"
                  : "border-[#68665e] bg-[#fbf7ef] text-[#3d3c36]"
              }`}
              key={letter}
            >
              <span
                className={`grid size-6 place-items-center rounded-md text-xs font-black ${
                  correct ? "bg-[#d6ff58]/20" : "bg-[#e6dfd2]"
                }`}
              >
                {letter}
              </span>
              {label}
            </button>
          ))}
        </div>
        <div className="mt-3 flex items-center justify-end gap-3 text-xs text-[#8d8579]">
          <span>skip</span>
          <button className="grid size-8 place-items-center rounded-full bg-[#10241f] font-black text-[#d6ff58]">
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
}

export function ReportCard() {
  return (
    <section className="rounded-xl bg-[#10241f] p-4 text-[#edf4e7] shadow-[0_18px_40px_rgba(17,36,31,0.24)]">
      <h2 className="text-lg font-black">Generate Evidence-Based Reports</h2>
      <p className="mt-2 text-sm leading-5 text-[#b9c6bc]">
        Convert contracts, project documents, APIs, and operational data into
        accountable AI-generated insights with source citations.
      </p>
      <div className="mt-5 flex items-center justify-between gap-3">
        <button className="rounded-full bg-[#d6ff58] px-5 py-3 text-sm font-black text-[#10241f]">
          Generate AI Report
        </button>
        <span className="grid size-8 place-items-center rounded-md border border-[#d6ff58]/35 text-xs font-black text-[#d6ff58]">
          DOC
        </span>
      </div>
    </section>
  );
}
