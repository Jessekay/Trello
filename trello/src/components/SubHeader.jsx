import { useState } from "react";
import {
  Columns3,
  ChevronDown,
  Plug,
  Zap,
  ListFilter,
  Star,
  Users,
  UserPlus,
  Ellipsis,
} from "lucide-react";

function BarButton({ label, onClick, children }) {
  return (
    <button
      aria-label={label}
      title={label}
      onClick={onClick}
      className="flex h-8 w-8 items-center justify-center rounded text-white transition-colors hover:bg-white/20"
    >
      {children}
    </button>
  );
}

export default function SubHeader({ title = "React learning period" }) {
  // useState: tracks whether the board is starred.
  // `starred` is true/false, `setStarred` flips it and re-renders the star icon.
  const [starred, setStarred] = useState(false);

  return (
    <div className="flex h-14 items-center justify-between bg-black/40 px-4 backdrop-blur-sm">
      {/* Left: title + board view switcher */}
      <div className="flex items-center gap-2">
        <h1 className="rounded px-2 py-1 text-base font-bold text-white hover:bg-white/20">
          {title}
        </h1>

        <button className="flex h-8 items-center gap-1 rounded px-2 text-white hover:bg-white/20">
          <Columns3 size={16} />
          <ChevronDown size={16} />
        </button>
      </div>

      {/* Right: members, tools, share */}
      <div className="flex items-center gap-1">
        <button
          aria-label="Account"
          className="mr-1 flex h-7 w-7 items-center justify-center rounded-full bg-[#8270db] text-[11px] font-semibold text-[#1d2125]"
        >
          JK
        </button>

        <BarButton label="Power-Ups">
          <Plug size={16} />
        </BarButton>
        <BarButton label="Automation">
          <Zap size={16} />
        </BarButton>
        <BarButton label="Filters">
          <ListFilter size={16} />
        </BarButton>
        <BarButton
          label={starred ? "Unstar board" : "Star board"}
          onClick={() => setStarred(!starred)}
        >
          <Star
            size={16}
            className={starred ? "fill-yellow-300 text-yellow-300" : ""}
          />
        </BarButton>
        <BarButton label="Board members">
          <Users size={16} />
        </BarButton>

        <button className="ml-1 flex h-8 items-center gap-1.5 rounded bg-[#dcdfe4] px-3 text-sm font-medium text-[#172b4d] transition-colors hover:bg-white">
          <UserPlus size={16} />
          Share
        </button>

        <BarButton label="Show menu">
          <Ellipsis size={16} />
        </BarButton>
      </div>
    </div>
  );
}
