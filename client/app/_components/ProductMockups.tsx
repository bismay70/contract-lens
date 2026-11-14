export function DarkAnalyticsBoard({ compact = false }: { compact?: boolean }) {
  return (
    <div className="relative h-full min-h-[310px] overflow-hidden rounded-[20px] bg-[#092d23] p-4 shadow-[0_28px_70px_rgba(6,38,29,0.25)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(207,255,76,0.2),transparent_32%)]" />
      <div className={`relative grid h-full gap-3 ${compact ? "grid-cols-2" : "grid-cols-2"}`}>
        <MockPanel className="col-span-2" title="KPI analysis">
          <LineGraph />
        </MockPanel>
        <MockPanel title="KPI analytics">
          <BarSet />
        </MockPanel>
        <MockPanel title="BidWise">
          <Checklist />
        </MockPanel>
        <MockPanel className="col-span-2" title="Investigative document mapping">
          <NodeMap />
        </MockPanel>
      </div>
    </div>
  );
}

export function IntelligenceDiagram() {
  return (
    <div className="relative h-full min-h-[360px] overflow-hidden bg-[#062c22] p-8 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_26%_14%,rgba(207,255,76,0.28),transparent_15%),radial-gradient(circle_at_72%_45%,rgba(207,255,76,0.18),transparent_18%)]" />
      <div className="relative flex items-center gap-3">
        <span className="grid size-12 place-items-center rounded-xl border border-[#d7ff54] bg-[#12382c] text-xl font-black text-white shadow-[0_0_22px_rgba(215,255,84,0.6)]">
          CL
        </span>
        <span className="text-3xl font-black">ContractLens</span>
      </div>

      <div className="relative mt-16 grid gap-6 md:grid-cols-[1fr_1.05fr]">
        <div className="rounded-lg border border-[#a8ff4e]/35 bg-[#12382c]/78 p-4 shadow-[0_0_38px_rgba(171,255,69,0.14)]">
          <div className="flex items-center justify-between text-xs font-bold">
            <span>KPI analytics</span>
            <span className="rounded-full bg-[#d7ff54]/20 px-2 py-1 text-[#d7ff54]">
              + KPI
            </span>
          </div>
          <LineGraph />
        </div>
        <div className="relative min-h-[230px]">
          <div className="absolute left-[40%] top-[32%] grid size-16 place-items-center rounded-full border border-[#d7ff54] bg-[#12382c] shadow-[0_0_24px_rgba(215,255,84,0.45)]">
            DOC
          </div>
          {[12, 26, 55, 70, 82, 48].map((left, index) => (
            <span
              className="absolute grid size-6 place-items-center rounded-full border border-[#d7ff54] bg-[#1a4537] text-[9px] text-[#d7ff54] shadow-[0_0_14px_rgba(215,255,84,0.55)]"
              key={left}
              style={{ left: `${left}%`, top: `${18 + ((index * 19) % 62)}%` }}
            >
              {index + 1}
            </span>
          ))}
          <p className="absolute left-[12%] top-0 text-sm font-bold">
            BidPilot
            <span className="block text-xs font-medium text-[#c2d0c5]">
              Tender evaluation connection
            </span>
          </p>
          <p className="absolute bottom-0 right-4 text-sm font-bold">
            Investigative
            <span className="block text-xs font-medium text-[#c2d0c5]">
              document links
            </span>
          </p>
        </div>
      </div>

      <div className="relative mt-4 grid grid-cols-3 gap-5">
        <SmallChart />
        <DocumentStack />
        <DocumentStack />
      </div>
    </div>
  );
}

function MockPanel({
  children,
  className = "",
  title,
}: {
  children: React.ReactNode;
  className?: string;
  title: string;
}) {
  return (
    <article className={`rounded-lg bg-[#12382c] p-3 ${className}`}>
      <div className="mb-2 flex items-center justify-between text-[10px] font-bold text-[#dfeade]">
        <span>{title}</span>
        <span className="text-[#d7ff54]">live</span>
      </div>
      {children}
    </article>
  );
}

function LineGraph() {
  return (
    <div className="relative h-28 overflow-hidden rounded-md bg-[#0e3328]">
      <div className="absolute inset-x-0 bottom-0 h-[55%] bg-[linear-gradient(135deg,rgba(215,255,84,0.55),rgba(215,255,84,0.02))]" />
      <div className="absolute bottom-[28%] left-3 right-3 h-12 rounded-[50%] border-t-2 border-[#d7ff54]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:28px_22px]" />
    </div>
  );
}

function BarSet() {
  const bars = [40, 58, 76, 46, 82, 64, 90];

  return (
    <div className="flex h-28 items-end gap-2">
      {bars.map((height) => (
        <span
          className="flex-1 rounded-t bg-[#d7ff54]"
          key={height}
          style={{ height: `${height}%` }}
        />
      ))}
    </div>
  );
}

function Checklist() {
  return (
    <div className="grid gap-2">
      {["Checksum", "Risk match", "Clause link", "Confidence"].map((item) => (
        <div
          className="flex items-center justify-between rounded bg-[#0e3328] px-2 py-2 text-[10px] text-[#dfeade]"
          key={item}
        >
          {item}
          <span className="size-3 rounded-full bg-[#d7ff54]" />
        </div>
      ))}
    </div>
  );
}

function NodeMap() {
  return (
    <div className="relative h-28">
      <span className="absolute left-[45%] top-[34%] size-9 rounded-full border border-[#d7ff54] bg-[#1e4839]" />
      {[10, 22, 35, 61, 72, 84].map((left, index) => (
        <span
          className="absolute size-4 rounded-full border border-[#d7ff54] bg-[#12382c]"
          key={left}
          style={{ left: `${left}%`, top: `${15 + ((index * 16) % 60)}%` }}
        />
      ))}
    </div>
  );
}

function SmallChart() {
  return (
    <div className="rounded border border-[#d7ff54]/25 bg-[#12382c] p-3">
      <LineGraph />
    </div>
  );
}

function DocumentStack() {
  return (
    <div className="grid gap-2 rounded border border-[#d7ff54]/25 bg-[#12382c] p-3">
      <span className="h-12 rounded bg-[#f0eadf]/10" />
      <span className="h-2 rounded bg-[#d7ff54]" />
      <span className="h-2 w-3/4 rounded bg-[#f0eadf]/25" />
    </div>
  );
}
