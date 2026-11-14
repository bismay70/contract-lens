const segments = [
  "Welcome",
  "Replication",
  "Live demo",
  "Exercise",
  "Q & A",
  "Wrap-up",
];

export function LessonControls() {
  return (
    <section className="space-y-4">
      <div className="grid grid-cols-6 gap-1">
        {segments.map((segment, index) => (
          <div key={segment}>
            <div className="h-3 overflow-hidden rounded-full border border-[#6f705f] bg-[#ebe3d5]">
              <span
                className={`block h-full rounded-full ${
                  index < 2 ? "w-full bg-[#d6ff58]" : ""
                } ${index === 2 ? "w-[42%] bg-[#d6ff58]" : ""}`}
              />
            </div>
            <p className="mt-2 truncate text-[10px] font-bold uppercase tracking-[0.1em] text-[#938b80]">
              {segment}
            </p>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 text-[#2d332d]">
        <div className="flex items-center gap-4">
          <button
            aria-label="Pause session"
            className="grid size-10 place-items-center rounded-full bg-[#10241f] text-sm font-black text-[#d6ff58]"
          >
            ||
          </button>
          <button aria-label="Replay previous segment" className="font-black">
            30
          </button>
          <button aria-label="Replay session" className="font-black">
            R
          </button>
          <button aria-label="Volume" className="font-black">
            V
          </button>
        </div>
        <p className="text-sm font-medium tracking-[0.12em] text-[#504d48]">
          24:18 / 1:12:04
        </p>
        <div className="flex items-center gap-3">
          <span className="rounded-full border border-[#394138] px-3 py-1 text-xs font-bold">
            1.5x
          </span>
          <span className="rounded-full border border-[#394138] bg-[#d6ff58] px-3 py-1 text-xs font-bold">
            CC
          </span>
          <span className="font-black">[]</span>
        </div>
      </div>
    </section>
  );
}
