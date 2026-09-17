// ---------------------------------------------------------------------------
// The cover drawing.
//
// A one-piece corner-lock carton net, drawn at a scale no viewport can hold.
// The viewBox windows onto the top-right corner of the net and the drawing is
// sliced rather than fitted, so what you get is a fragment at enormous scale:
// one corner lock, the crease intersection, the vent pattern. That reads as a
// technical drawing in a way a whole net shrunk to fit never does.
//
// Geometry only — every piece of text in the hero is HTML, so nothing here
// can collide with the type.
// ---------------------------------------------------------------------------

export function HeroDieline({ className = "" }: { className?: string }) {
  return (
    <svg
      // Window onto the upper-right of a 520 x 620 net.
      viewBox="150 40 340 430"
      preserveAspectRatio="xMidYMin slice"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <g className="dl" stroke="currentColor">
        {/* Cut line: the outer knife path of the whole net. */}
        <path
          className="plot"
          pathLength={100}
          style={{ ["--plot-i" as string]: 0 }}
          d="M110 140h40v-60h240v60h40l20 60v240l-20 60h-40v60H150v-60h-40l-20-60V200z"
          strokeWidth="2"
        />

        {/* Crease layer: every line the board folds on. */}
        <g className="dl-crease" strokeWidth="1.6">
          <path
            className="plot"
            pathLength={100}
            style={{ ["--plot-i" as string]: 1 }}
            d="M150 200h240v240H150z"
          />
          <path
            className="plot"
            pathLength={100}
            style={{ ["--plot-i" as string]: 2 }}
            d="M150 140h240M150 500h240M110 200h40M110 440h40M390 200h40M390 440h40"
          />
          <path
            className="plot"
            pathLength={100}
            style={{ ["--plot-i" as string]: 2 }}
            d="M150 80v60M390 80v60M150 500v60M390 500v60"
          />
        </g>

        {/* Corner lock detail — the tab that makes this a one-piece box. */}
        <g className="ink" style={{ ["--plot-i" as string]: 3 }} strokeWidth="1.4">
          <path d="M390 140l20 30M410 200l20-30" opacity="0.7" />
        </g>

        {/* Vent perforations, and the dimension that sets the panel. */}
        <g className="ink" style={{ ["--plot-i" as string]: 3 }}>
          <circle cx="250" cy="170" r="4" strokeWidth="1.4" />
          <circle cx="285" cy="162" r="4" strokeWidth="1.4" />
          <circle cx="320" cy="170" r="4" strokeWidth="1.4" />
        </g>

        <g className="dl-dim ink" style={{ ["--plot-i" as string]: 4 }} strokeWidth="1.2">
          <path d="M150 320h240" />
          <path d="M158 314l-8 6 8 6M382 314l8 6-8 6" />
          <path d="M150 300v40M390 300v40" />
        </g>
      </g>
    </svg>
  );
}
