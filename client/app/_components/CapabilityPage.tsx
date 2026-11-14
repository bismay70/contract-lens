import { DarkAnalyticsBoard } from "./ProductMockups";

const capabilities = [
  {
    title: "KPI & Anomaly Detection",
    body: "Automated performance diagnostics across enterprise contracts and operational data.",
    active: true,
  },
  {
    title: "Bidwise Tender Intelligence",
    body: "AI-driven RFP evaluation, compliance checks, and automated bid scoring.",
  },
  {
    title: "Investigative Document Analytics & Knowledge Graph",
    metric: "$35.6M",
  },
];

export function CapabilityPage() {
  return (
    <section className="flex min-h-[calc(100vh-3rem)] overflow-hidden bg-[#f5f0e5] px-5 pb-4 pt-5 text-[#0b3328]">
      <div className="mx-auto grid w-full max-w-[1420px] flex-1 items-center gap-12 lg:grid-cols-[440px_1fr]">
        <div className="h-[630px] max-h-[74vh] rotate-[-5deg]">
          <DarkAnalyticsBoard compact />
        </div>

        <div>
          <div className="mb-14 flex items-end justify-between gap-4">
            <h1 className="max-w-[830px] text-[clamp(3rem,5.7vw,6rem)] font-medium leading-[1.05] tracking-[-0.04em]">
              Our Core Capabilities Document Intelligence
            </h1>
            <span className="mb-4 grid size-12 shrink-0 place-items-center rounded-full bg-[#d7ff54] text-2xl font-black">
              &gt;
            </span>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {capabilities.map((capability, index) => (
              <article
                className={`flex min-h-[270px] flex-col justify-between rounded-3xl border border-[#17382f] p-8 ${
                  capability.active ? "bg-[#d7ff54]" : "bg-[#f5f0e5]"
                }`}
                key={capability.title}
              >
                <div className="flex justify-end">
                  <span
                    className={`grid size-11 place-items-center rounded-full text-2xl font-black ${
                      capability.active
                        ? "bg-[#0b3328] text-[#d7ff54]"
                        : "bg-[#d7ff54] text-[#0b3328]"
                    }`}
                  >
                    &gt;
                  </span>
                </div>
                <div>
                  <h2 className="text-2xl font-medium leading-tight">
                    {capability.title}
                  </h2>
                  {capability.body && (
                    <p className="mt-8 text-sm font-medium leading-5">
                      {capability.body}
                    </p>
                  )}
                  {capability.metric && (
                    <div className="mt-14 flex items-center justify-between">
                      <span className="grid size-11 place-items-center rounded-full bg-[#d7ff54] text-2xl font-black">
                        &gt;
                      </span>
                      <strong className="text-4xl font-black">
                        {capability.metric}
                      </strong>
                    </div>
                  )}
                </div>
                {index === 1 && <span />}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
