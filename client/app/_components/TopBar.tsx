"use client";

import { useEffect, useState } from "react";

export function TopBar() {
  const [displayDate, setDisplayDate] = useState("");

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setDisplayDate(
        new Intl.DateTimeFormat("en-US", {
          month: "short",
          day: "2-digit",
          year: "numeric",
        }).format(Date.now()),
      );
    }, 0);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <header className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
      <div className="flex items-center gap-3">
        <button
          aria-label="Go back"
          className="grid size-9 place-items-center rounded-xl border border-[#1f2925] bg-[#f7f1e7] text-lg font-semibold text-[#1f2925] shadow-sm"
        >
          {"<"}
        </button>
        <div className="flex flex-wrap items-center gap-2">
          <h1 className="text-2xl font-black tracking-[-0.02em] text-[#20201c] sm:text-3xl">
            ContractLens
          </h1>
          <span className="hidden h-8 w-px bg-[#c9c0b3] sm:block" />
          <p className="text-xl font-medium text-[#252520] sm:text-3xl">
            Enterprise Intelligence
          </p>
          <span className="rounded-full bg-[#ded8cf] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.08em] text-[#605b52]">
            {displayDate || "Today"}
          </span>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <span className="rounded-full border border-[#30362f] bg-[#f8f2e8] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.08em] text-[#373831]">
          Platform overview 04 / 08
        </span>
        <button
          aria-label="Bookmark overview"
          className="grid size-9 place-items-center rounded-xl border border-[#30362f] bg-[#f8f2e8] text-sm font-bold"
        >
          B
        </button>
        <button
          aria-label="Share overview"
          className="grid size-9 place-items-center rounded-xl border border-[#30362f] bg-[#f8f2e8] text-sm font-bold"
        >
          S
        </button>
        <button className="rounded-xl bg-[#10241f] px-5 py-3 text-sm font-black text-[#f1f4e6] shadow-[0_10px_24px_rgba(18,36,31,0.2)]">
          Generate AI Report
        </button>
      </div>
    </header>
  );
}
