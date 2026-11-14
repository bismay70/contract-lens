const legalPhoto =
  "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1400&q=80";
const analyticsPhoto =
  "https://images.unsplash.com/photo-1790614108104-337c880ec536?auto=format&fit=crop&w=1400&q=70";

const previewCards = [
  { title: "KPI Dashboard", type: "bars" },
  { title: "Compare", type: "table" },
  { title: "Knowledge Graph", type: "graph" },
  { title: "Constructor", type: "files" },
];

export function HomePage() {
  return (
    <section className="min-h-screen overflow-hidden bg-[#f4efe4] text-[#0b3328] lg:grid lg:h-screen lg:grid-cols-[42vw_minmax(0,1fr)]">
      <ProductVisuals />
      <HeroSection />
    </section>
  );
}

function ProductVisuals() {
  return (
    <section className="grid bg-[#0d2b23] lg:h-screen lg:grid-rows-2">
      <DocumentWorkspace />
      <AnalyticsWorkspace />
    </section>
  );
}

function DocumentWorkspace() {
  return (
    <div
      className="relative min-h-[330px] overflow-hidden border-b border-[#cfff53]/20 p-4 lg:min-h-0"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(8,35,28,0.96), rgba(8,35,28,0.82)), url(${legalPhoto})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(205,255,75,0.18),transparent_36%)]" />
      <div className="relative h-full rounded-md border border-[#7ca487]/25 bg-[#14362c]/78 p-3 shadow-[0_24px_70px_rgba(0,0,0,0.28)]">
        <div className="flex items-center justify-between text-[9px] font-bold text-[#dfe9dc]">
          <span className="flex items-center gap-1.5">
            <span className="size-2 rounded-full bg-[#cfff53]" />
            ContractLens
          </span>
          <span className="flex gap-2 text-[#95a99b]">O O</span>
        </div>

        <div className="mt-4 grid h-[calc(100%-32px)] grid-cols-[68px_minmax(0,1fr)] gap-3">
          <SideMenu />
          <div className="min-w-0 rounded-sm border border-[#587161]/40 bg-[#0f2b23] p-3">
            <div className="mb-3 flex items-center justify-between border-b border-[#42594d] pb-2 text-[9px] font-bold uppercase tracking-[0.12em] text-[#9aac9f]">
              <span>Analyze</span>
              <span>Legal Documents</span>
            </div>
            <div className="grid h-[calc(100%-30px)] grid-cols-2 gap-3">
              <DocumentPage compact />
              <DocumentPage />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SideMenu() {
  const items = ["Dashboard", "Actions", "Docs", "Queries", "Summary", "Logs"];

  return (
    <aside className="rounded-sm bg-[#08261f]/88 p-2 text-[8px] font-semibold text-[#a9beb0]">
      <div className="mb-4 rounded bg-[#d7ff54] px-2 py-1 text-[#09281f]">
        AI
      </div>
      <div className="grid gap-3">
        {items.map((item, index) => (
          <span
            className={`rounded px-1.5 py-1 ${
              index === 0 ? "bg-[#d7ff54]/15 text-[#d7ff54]" : ""
            }`}
            key={item}
          >
            {item}
          </span>
        ))}
      </div>
    </aside>
  );
}

function DocumentPage({ compact = false }: { compact?: boolean }) {
  return (
    <article className="relative overflow-hidden rounded-sm bg-[#f7f3e8] p-4 text-[#15372c] shadow-xl">
      <div className="mb-3 flex items-start justify-between border-b border-[#d8d2c6] pb-2">
        <div>
          <div className="h-2 w-24 rounded-full bg-[#193a2e]" />
          <div className="mt-2 h-1.5 w-32 rounded-full bg-[#c5c0b3]" />
        </div>
        <span className="rounded-sm bg-[#15372c] px-2 py-1 text-[8px] font-bold text-white">
          Financial
        </span>
      </div>
      <div className="grid gap-1.5">
        {Array.from({ length: compact ? 13 : 16 }).map((_, index) => (
          <span
            className={`h-1.5 rounded-full ${
              index === 4 || index === 9
                ? "bg-[#cfff53]"
                : index % 5 === 0
                  ? "bg-[#98a293]"
                  : "bg-[#d4cfc2]"
            }`}
            key={index}
            style={{ width: `${70 + ((index * 17) % 28)}%` }}
          />
        ))}
      </div>
      <div className="mt-4 grid grid-cols-4 gap-1">
        {Array.from({ length: 16 }).map((_, index) => (
          <span
            className={`h-3 rounded-sm ${
              index % 6 === 0 ? "bg-[#d7ff54]" : "bg-[#e5ded2]"
            }`}
            key={index}
          />
        ))}
      </div>
    </article>
  );
}

function AnalyticsWorkspace() {
  return (
    <div
      className="relative min-h-[330px] overflow-hidden p-4 lg:min-h-0"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(11,39,32,0.94), rgba(11,39,32,0.66)), url(${analyticsPhoto})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute left-0 top-0 h-px w-full bg-[#cfff53]/25" />
      <h2 className="relative mb-3 text-xl font-medium text-[#f2f4e7]">
        KPI Dashboard
      </h2>
      <div className="relative grid h-[calc(100%-36px)] grid-cols-2 gap-2.5">
        <MetricPanel title="Geometric" type="bars" />
        <MetricPanel title="Metrics Trends" type="area" />
        <MetricPanel title="KPI Analytics" type="area" />
        <MetricPanel title="Bid Analytics" type="progress" />
      </div>
      <div className="absolute right-4 top-12 hidden w-[165px] rotate-[-2deg] rounded-md border border-[#d7ff54]/55 bg-[#f2eadc] p-2.5 text-[#12352a] shadow-[0_24px_48px_rgba(0,0,0,0.3)] sm:block">
        <div className="mb-2 flex items-center justify-between text-[9px] font-black">
          <span>Bid Analytics</span>
          <span className="rounded-full bg-[#153a2e] px-2 py-1 text-[#d7ff54]">
            Approved
          </span>
        </div>
        <Sparkline />
      <div className="mt-2 grid gap-1.5">
          {["Scenario 1", "Scenario 2", "Scenario 3"].map((item, index) => (
            <div className="grid grid-cols-[58px_1fr] items-center gap-2" key={item}>
              <span className="text-[8px] font-bold text-[#56665a]">{item}</span>
              <span className="h-2 rounded-full bg-[#153a2e]">
                <span
                  className="block h-full rounded-full bg-[#cfff53]"
                  style={{ width: `${84 - index * 14}%` }}
                />
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function MetricPanel({ title, type }: { title: string; type: string }) {
  return (
    <article className="overflow-hidden rounded-md border border-[#567364]/35 bg-[#102f27]/90 p-2.5 text-[#e7eee4] shadow-xl">
      <div className="mb-2 flex items-center justify-between text-[9px] font-bold">
        <span>{title}</span>
        <span className="text-[#d7ff54]">Live</span>
      </div>
      {type === "bars" && <BarChart />}
      {type === "area" && <Sparkline />}
      {type === "progress" && <ProgressList />}
    </article>
  );
}

function BarChart() {
  const heights = [36, 62, 48, 78, 54, 92, 68, 86, 42];

  return (
    <div className="flex h-full min-h-[86px] items-end gap-2">
      {heights.map((height, index) => (
        <span
          className={`flex-1 rounded-t-sm ${
            index % 2 === 0 ? "bg-[#d7ff54]" : "bg-[#91b65b]"
          }`}
          key={height}
          style={{ height: `${height}%` }}
        />
      ))}
    </div>
  );
}

function Sparkline() {
  return (
    <div className="relative h-full min-h-[86px] overflow-hidden rounded-sm bg-[#17382f]">
      <div className="absolute inset-x-0 bottom-0 h-[62%] bg-[linear-gradient(135deg,rgba(214,255,83,0.64),rgba(214,255,83,0.08))]" />
      <div className="absolute bottom-[24%] left-2 right-2 h-12 rounded-[50%] border-t-2 border-[#d7ff54]" />
      <span className="absolute left-[58%] top-[24%] rounded bg-[#edf4df] px-2 py-1 text-[8px] font-black text-[#12352a]">
        Action
      </span>
    </div>
  );
}

function ProgressList() {
  return (
    <div className="grid gap-3 pt-2">
      {[92, 79, 66, 51].map((width) => (
        <span className="h-3 rounded-full bg-[#244d3f]" key={width}>
          <span
            className="block h-full rounded-full bg-[#d7ff54]"
            style={{ width: `${width}%` }}
          />
        </span>
      ))}
    </div>
  );
}

function HeroSection() {
  return (
    <section className="flex min-h-screen flex-col justify-between bg-[#f4efe4] px-6 py-6 sm:px-8 lg:h-screen lg:min-h-0 lg:px-10 xl:px-12">
      <div className="flex justify-end gap-3">
        <span className="size-2 rounded-full bg-[#17382f]" />
        <span className="size-2 rounded-full bg-[#79927f]" />
      </div>

      <div className="grid flex-1 content-center gap-7">
        <div>
          <h1 className="max-w-[680px] text-[clamp(3.35rem,7.3vw,6.65rem)] font-black uppercase leading-[0.85] tracking-[-0.04em] text-[#0b3328]">
            Contracts Unlocked.
          </h1>
          <p
            className="mt-1 text-right text-[clamp(2.6rem,4.9vw,5.2rem)] leading-none text-[#0b3328] sm:pr-8"
            style={{ fontFamily: '"Brush Script MT", "Segoe Script", cursive' }}
          >
            Intelligence
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1fr_1.15fr] lg:items-end">
          <div>
            <p className="mb-5 text-xs font-semibold text-[#18372d]">
              Platform | AI Document Analytics
            </p>
            <button className="inline-flex items-center gap-3 bg-[#0b3328] px-5 py-3 text-xs font-semibold text-[#d7ff54] shadow-[0_16px_30px_rgba(11,51,40,0.18)]">
              Request Demo <span aria-hidden="true">-&gt;</span>
            </button>
          </div>
          <div className="max-w-[410px]">
            <p className="text-xs font-medium leading-5 text-[#18372d]">
              ContractLens integrates key legal intelligence, KPI performance
              diagnostics, and bid evaluations into one powerful platform. Deep
              extraction and knowledge graph technologies transform enterprise
              PDFs, tenders, and contracts into connected, actionable insights.
            </p>
            <button className="mt-5 bg-[#d7ff54] px-7 py-3 text-xs font-semibold text-[#0b3328] shadow-[0_16px_30px_rgba(146,183,37,0.22)]">
              Request Demo
            </button>
          </div>
        </div>
      </div>

      <PreviewStrip />
    </section>
  );
}

function PreviewStrip() {
  return (
    <div className="grid grid-cols-2 gap-2.5 md:grid-cols-4">
      {previewCards.map((card) => (
        <article
          className="h-[94px] overflow-hidden border border-[#d8d0c2] bg-[#fbf7ee] shadow-[0_10px_24px_rgba(11,51,40,0.08)]"
          key={card.title}
        >
          <div className="bg-[#0b3328] px-2 py-1 text-[8px] font-black uppercase tracking-[0.08em] text-[#d7ff54]">
            {card.title}
          </div>
          <div className="h-[70px] p-1.5">
            {card.type === "bars" && <MiniBars />}
            {card.type === "table" && <MiniTable />}
            {card.type === "graph" && <MiniGraph />}
            {card.type === "files" && <MiniFiles />}
          </div>
        </article>
      ))}
    </div>
  );
}

function MiniBars() {
  return (
    <div className="grid h-full grid-cols-[1.2fr_1fr] gap-2 bg-[#12352a] p-2">
      <div className="flex items-end gap-1">
        {[32, 54, 76, 44, 88, 62].map((height) => (
          <span
            className="flex-1 bg-[#d7ff54]"
            key={height}
            style={{ height: `${height}%` }}
          />
        ))}
      </div>
      <div className="grid gap-1">
        <span className="rounded bg-[#244d3f]" />
        <span className="rounded bg-[#244d3f]" />
        <span className="rounded bg-[#d7ff54]" />
      </div>
    </div>
  );
}

function MiniTable() {
  return (
    <div className="grid h-full gap-1 bg-white p-2">
      {Array.from({ length: 7 }).map((_, index) => (
        <span
          className={index === 3 ? "bg-[#d7ff54]" : "bg-[#e2ddd2]"}
          key={index}
        />
      ))}
    </div>
  );
}

function MiniGraph() {
  return (
    <div className="relative h-full bg-[#12352a]">
      <span className="absolute left-[40%] top-[34%] size-7 rounded-full border border-[#d7ff54] bg-[#1d4839]" />
      {[12, 26, 68, 82, 54].map((left, index) => (
        <span
          className="absolute size-2 rounded-full bg-[#d7ff54]"
          key={left}
          style={{ left: `${left}%`, top: `${20 + ((index * 19) % 58)}%` }}
        />
      ))}
    </div>
  );
}

function MiniFiles() {
  return (
    <div className="grid h-full grid-cols-3 gap-2 bg-white p-2">
      {["PDF", "XLS", "DOC"].map((item, index) => (
        <div
          className={`grid place-items-center border text-[9px] font-black ${
            index === 1
              ? "border-[#d7ff54] bg-[#12352a] text-[#d7ff54]"
              : "border-[#d8d0c2] bg-[#f4efe4] text-[#12352a]"
          }`}
          key={item}
        >
          {item}
        </div>
      ))}
    </div>
  );
}
