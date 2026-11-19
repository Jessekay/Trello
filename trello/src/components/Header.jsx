import { useState } from "react";
import { LayoutGrid, Search, Megaphone, Bell, CircleHelp, X } from "lucide-react";

function IconButton({ label, children, dot = false }) {
  return (
    <button
      aria-label={label}
      title={label}
      className="relative flex h-8 w-8 items-center justify-center rounded text-[#9fadbc] transition-colors hover:bg-white/10"
    >
      {children}
      {dot && (
        <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-fuchsia-400" />
      )}
    </button>
  );
}

export default function Header() {
  const [query, setQuery] = useState("");

  return (
    <header className="grid h-12 grid-cols-[1fr_auto_1fr] items-center border-t-2 border-black/40 bg-[#1d2125] px-3 text-[#b6c2cf]">
      <div className="flex items-center gap-2">
        <button
          aria-label="Switch apps"
          className="flex h-8 w-8 items-center justify-center rounded text-[#9fadbc] hover:bg-white/10"
        >
          <LayoutGrid size={18} />
        </button>

        <a href="/" className="flex items-center gap-2 rounded px-1 py-1 hover:bg-white/10">
          <span className="flex h-6 w-6 items-center justify-center rounded bg-[#b6c2cf]">
            <span className="flex h-4 w-4 items-start gap-0.5 p-0.5">
              <span className="h-full w-1.25 rounded-[1px] bg-[#1d2125]" />
              <span className="h-2/3 w-1.25 rounded-[1px] bg-[#1d2125]" />
            </span>
          </span>
          <span className="text-lg font-bold text-[#9fadbc]">Trello</span>
        </a>
      </div>

      <div className="flex items-center gap-2">
        <div className="relative w-[min(780px,50vw)]">
          <Search
            size={14}
            className="pointer-events-none absolute left-2.5 top-1/2 -translate-y-1/2 text-[#9fadbc]"
          />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search"
            className="h-8 w-full rounded border border-[#738496] bg-[#22272b] pl-8 pr-8 text-sm text-[#b6c2cf] placeholder:text-[#9fadbc] focus:border-[#579dff] focus:outline-none focus:ring-1 focus:ring-[#579dff]"
          />
          {query && (
            <button
              aria-label="Clear search"
              onClick={() => setQuery("")}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-[#9fadbc] hover:text-white"
            >
              <X size={14} />
            </button>
          )}
        </div>

        <button className="h-8 rounded bg-[#579dff] px-3 text-sm font-medium text-[#1d2125] transition-colors hover:bg-[#85b8ff]">
          Create
        </button>
      </div>

      <div className="flex items-center justify-end gap-1">
        <IconButton label="Notices">
          <Megaphone size={18} />
        </IconButton>
        <IconButton label="Notifications">
          <Bell size={18} />
        </IconButton>
        <IconButton label="Help" dot>
          <CircleHelp size={18} />
        </IconButton>

        <button
          aria-label="Account"
          className="ml-1 flex h-7 w-7 items-center justify-center rounded-full bg-[#8270db] text-[11px] font-semibold text-[#1d2125]"
        >
          JK
        </button>
      </div>
    </header>
  );
}