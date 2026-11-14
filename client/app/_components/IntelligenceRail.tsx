import { intelligenceCards } from "./dashboardData";

function CardAccent({ type }: { type: string }) {
  if (type === "bars") {
    return (
      <div className="flex h-7 items-end gap-0.5">
        {[18, 26, 34].map((height) => (
          <span
            className="w-1.5 rounded-sm bg-[#cff955]"
            key={height}
            style={{ height }}
          />
        ))}
        <span className="size-6 rounded-full border-2 border-[#233129] border-t-[#cff955]" />
      </div>
    );
  }

  if (type === "doc") {
    return (
      <div className="grid size-8 place-items-center rounded-md border-2 border-[#22322b] bg-[#eee8dc] text-[9px] font-black text-[#22322b]">
        AI
      </div>
    );
  }

  return (
    <div className="grid gap-0.5 text-[7px] font-bold uppercase text-[#5f6159]">
      <span className="rounded border border-[#bdb4a7] px-1">Proj</span>
      <span className="rounded border border-[#bdb4a7] px-1">Risk</span>
      <span className="rounded border border-[#bdb4a7] px-1">Safe</span>
    </div>
  );
}

export function IntelligenceRail() {
  return (
    <div className="grid gap-2">
      {intelligenceCards.map((card) => (
        <article
          className="flex min-h-[66px] items-center justify-between rounded-lg border border-[#2d342f] bg-[#f4eee4] p-2.5 shadow-sm"
          key={card.title}
        >
          <div>
            <h3 className="text-base font-black text-[#34332e]">{card.title}</h3>
            <p className="mt-1 max-w-[132px] text-[11px] leading-tight text-[#373a33]">
              {card.description}
            </p>
          </div>
          <CardAccent type={card.accent} />
        </article>
      ))}
    </div>
  );
}
