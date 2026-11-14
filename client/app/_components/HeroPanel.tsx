import { steps } from "./dashboardData";

export function HeroPanel() {
  return (
    <section className="relative overflow-hidden rounded-xl bg-[#10241f] p-4 text-[#eff4e8] shadow-[0_20px_44px_rgba(21,35,29,0.18)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_18%,rgba(206,255,83,0.16),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.04),transparent)]" />
      <div className="relative flex items-center justify-between">
        <span className="rounded-md bg-black/25 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.08em] text-[#bbc4bb]">
          Contract intelligence | Live overview
        </span>
        <span className="rounded-md bg-white/10 px-2.5 py-1.5 text-[11px] font-black text-[#dfe8dc]">
          04 / 00
        </span>
      </div>

      <div className="relative py-5 text-center">
        <h2 className="mx-auto max-w-none whitespace-nowrap text-[clamp(1rem,2.35vw,2.05rem)] font-black uppercase leading-[1] tracking-[0.01em]">
          Unify -&gt; Analyze -&gt; Intelligent Action
        </h2>
      </div>

      <div className="relative grid overflow-hidden rounded-lg border border-white/20 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step) => (
          <article
            className="border-b border-r border-white/15 px-3 py-2 text-center last:border-r-0 sm:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(4)]:border-r-0"
            key={step.title}
          >
            <h3 className="text-sm font-black uppercase text-[#d6ff58]">
              {step.index} {step.title}
            </h3>
            <p className="mt-1 text-xs leading-tight text-[#edf2ea]">
              {step.description}
            </p>
          </article>
        ))}
      </div>

      <p className="relative mt-3 text-center text-[11px] text-[#d5ddd1]">
        Transform disconnected enterprise documents into actionable,
        evidence-backed intelligence.
      </p>
      <p className="relative mt-3 border-t border-white/10 pt-2 text-center text-[11px] text-[#edf4e7]">
        Every insight is traceable to its original document and supporting
        evidence.
      </p>
    </section>
  );
}
