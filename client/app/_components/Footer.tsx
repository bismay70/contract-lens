const platformLinks = [
  "Document Intelligence",
  "KPI Analytics",
  "Bidwise RFP",
  "Knowledge Graph",
];

const resourceLinks = [
  "Documentation",
  "Security & Compliance",
  "API Reference",
  "Support",
];

const socialLinks = ["in", "X", "GH", "YT", "WWW"];

export function Footer() {
  return (
    <footer className="bg-[#f4efe4] px-2 pb-2 text-[#efe8d6]">
      <div className="relative overflow-hidden rounded-b-xl bg-[#073a28] px-6 pb-4 pt-9 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] sm:px-9 lg:px-12">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_18%,rgba(163,255,48,0.12),transparent_26%),radial-gradient(circle_at_75%_60%,rgba(255,255,255,0.07),transparent_30%)]" />

        <div className="relative grid gap-10 lg:grid-cols-[1.4fr_0.9fr_0.9fr_1.6fr]">
          <section>
            <div className="flex items-center gap-3">
              <span className="grid size-12 place-items-center rounded-xl bg-[#a8ff2f] text-2xl font-black text-[#073a28]">
                CL
              </span>
              <h2 className="text-2xl font-black tracking-[-0.02em]">
                ContractLens
              </h2>
            </div>
            <p className="mt-6 max-w-[270px] text-lg font-medium leading-7 text-[#c7bea6]">
              Transforming disconnected enterprise documents, tenders, and KPIs
              into actionable, evidence-backed intelligence.
            </p>
          </section>

          <FooterColumn title="Platform" links={platformLinks} />
          <FooterColumn title="Resources" links={resourceLinks} />

          <section>
            <h3 className="text-xl font-black">Get Updates</h3>
            <form className="mt-12 flex max-w-[310px] rounded-full border border-[#557060] bg-[#082c20] p-1 shadow-[0_10px_30px_rgba(0,0,0,0.18)]">
              <label className="sr-only" htmlFor="footer-email">
                Work email
              </label>
              <input
                className="min-w-0 flex-1 bg-transparent px-4 text-sm font-medium text-[#efe8d6] outline-none placeholder:text-[#8d9b8d]"
                id="footer-email"
                placeholder="Enter work email"
                type="email"
              />
              <button
                className="rounded-full bg-[#a8ff2f] px-5 py-3 text-sm font-black text-[#073a28]"
                type="button"
              >
                Subscribe
              </button>
            </form>

            <div className="mt-6 flex flex-wrap gap-4">
              {socialLinks.map((label) => (
                <a
                  aria-label={label}
                  className="grid size-10 place-items-center rounded-full border border-[#476a58] bg-[#082c20] text-xs font-black text-[#efe8d6] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)] transition hover:border-[#a8ff2f] hover:text-[#a8ff2f]"
                  href="#"
                  key={label}
                >
                  {label}
                </a>
              ))}
            </div>
          </section>
        </div>

        <div className="relative mt-16 border-t border-[#44624f] pt-4">
          <div className="flex flex-col gap-4 text-base font-medium text-[#efe8d6] sm:flex-row sm:items-center sm:justify-between">
            <p>&copy; 2026 ContractLens. All rights reserved.</p>
            <nav className="flex gap-7 text-[#c7bea6]">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ links, title }: { links: string[]; title: string }) {
  return (
    <section>
      <h3 className="text-xl font-black">{title}</h3>
      <nav className="mt-5 grid gap-4 text-base font-medium leading-6 text-[#c7bea6]">
        {links.map((link) => (
          <a href="#" key={link}>
            {link}
          </a>
        ))}
      </nav>
    </section>
  );
}
