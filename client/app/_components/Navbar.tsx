import Link from "next/link";

const leftLinks = ["Platform AI +", "Our Story", "What Is Insight?"];
const rightLinks = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "#", label: "Team Tour" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#ded6c8] bg-[#f5f0e5]/95 backdrop-blur">
      <div className="grid h-12 grid-cols-[1fr_auto_1fr] items-center px-5 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#0b3328]">
        <nav className="hidden items-center gap-9 md:flex">
          {leftLinks.map((link) => (
            <a className="hover:text-[#6d7e26]" href="#" key={link}>
              {link}
            </a>
          ))}
        </nav>

        <Link
          className="justify-self-center font-serif text-xl font-black normal-case tracking-[0.03em]"
          href="/"
        >
          ContractLens
        </Link>

        <div className="flex items-center justify-end gap-7">
          <nav className="hidden items-center gap-8 md:flex">
            {rightLinks.map((link) => (
              <Link
                className="hover:text-[#6d7e26]"
                href={link.href}
                key={link.label}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <button aria-label="Search" className="nav-icon nav-icon-search" />
            <button aria-label="Account" className="nav-icon nav-icon-user" />
            <button aria-label="Workspace" className="nav-icon nav-icon-bag" />
          </div>
        </div>
      </div>
    </header>
  );
}
