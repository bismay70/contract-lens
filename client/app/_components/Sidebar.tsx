import { navItems } from "./dashboardData";

export function Sidebar() {
  return (
    <aside className="flex shrink-0 flex-row items-center gap-2 overflow-x-auto bg-[#10241f] px-4 py-3 text-[#d8e0d7] shadow-[inset_-1px_0_0_rgba(255,255,255,0.08)] lg:min-h-screen lg:w-[90px] lg:flex-col lg:gap-1 lg:overflow-visible lg:px-3 lg:py-8">
      {navItems.map((item) => (
        <a
          className={`group flex min-w-[74px] flex-col items-center gap-1.5 rounded-md px-2 py-2 text-center text-[10px] uppercase tracking-[0.04em] transition ${
            item.active
              ? "text-[#cfff53]"
              : "text-[#b7c2b8] hover:bg-white/5 hover:text-white"
          }`}
          href="#"
          key={item.label}
        >
          <span
            className={`grid size-7 place-items-center rounded-[6px] border text-[11px] font-black ${
              item.active
                ? "border-[#cfff53] bg-[#cfff53] text-[#10241f]"
                : "border-[#6e7d73]/60 text-[#cbd6cc]"
            }`}
          >
            {item.icon}
          </span>
          <span>{item.label}</span>
        </a>
      ))}
    </aside>
  );
}
