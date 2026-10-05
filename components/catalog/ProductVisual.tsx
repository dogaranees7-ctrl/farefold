export type ProductVisualKind = "pizza" | "coffee" | "meal" | "sauce" | "bottle" | "sushi" | "bag" | "bakery";

type Props = { kind: ProductVisualKind; compact?: boolean };

const palettes = {
  pizza: { board: "#c08a4a", ink: "#16130f", accent: "#a24120" },
  coffee: { board: "#f7f4ec", ink: "#16130f", accent: "#234d38" },
  meal: { board: "#e9dabe", ink: "#16130f", accent: "#a24120" },
  sauce: { board: "#234d38", ink: "#f7f4ec", accent: "#c8552e" },
  bottle: { board: "#dfe9e5", ink: "#13301f", accent: "#a24120" },
  sushi: { board: "#f7f4ec", ink: "#16130f", accent: "#234d38" },
  bag: { board: "#c08a4a", ink: "#16130f", accent: "#234d38" },
  bakery: { board: "#ece5d6", ink: "#16130f", accent: "#a24120" },
} as const;

function Specimen({ kind, ink, board, accent }: { kind: ProductVisualKind; ink: string; board: string; accent: string }) {
  const label = (text: string, x: number, y: number, fill = ink) => (
    <text x={x} y={y} fill={fill} fontSize="8" fontFamily="monospace" letterSpacing="1.3">{text}</text>
  );

  switch (kind) {
    case "pizza":
      return <g>
        <path d="M36 52 L126 30 L184 58 L94 80 Z" fill={board} stroke={ink} strokeWidth="1.5" />
        <path d="M36 52 L36 105 L94 136 L94 80 Z" fill="#d2a064" stroke={ink} strokeWidth="1.5" />
        <path d="M94 80 L184 58 L184 109 L94 136 Z" fill="#b77c3c" stroke={ink} strokeWidth="1.5" />
        <ellipse cx="109" cy="59" rx="34" ry="13" fill="#f7f4ec" stroke={ink} strokeWidth="1.2" />
        <circle cx="96" cy="57" r="3" fill={accent} /><circle cx="116" cy="53" r="3" fill={accent} /><circle cx="126" cy="62" r="3" fill={accent} />
        <rect x="48" y="88" width="25" height="19" fill={board} stroke={ink} /><rect x="137" y="80" width="27" height="18" fill={board} stroke={ink} />
        {label("PIZZA", 83, 96)}{label("SIDES", 49, 100)}{label("SAUCE", 139, 92)}
      </g>;
    case "coffee":
      return <g>
        <path d="M47 64 L160 64 L178 79 L65 79 Z" fill={board} stroke={ink} strokeWidth="1.5" />
        <path d="M47 64 L47 127 L65 140 L65 79 Z" fill="#ece5d6" stroke={ink} strokeWidth="1.5" />
        <path d="M65 79 L178 79 L178 125 L65 140 Z" fill="#f0ede4" stroke={ink} strokeWidth="1.5" />
        <path d="M79 91 L79 123 M113 86 L113 119 M147 84 L147 114" stroke={accent} strokeWidth="2" />
        <ellipse cx="79" cy="88" rx="13" ry="6" fill="#fff" stroke={ink} /><ellipse cx="113" cy="83" rx="13" ry="6" fill="#fff" stroke={ink} /><ellipse cx="147" cy="81" rx="13" ry="6" fill="#fff" stroke={ink} />
        {label("CUP 01", 69, 111)}{label("CUP 02", 103, 106)}{label("BAKERY", 135, 105)}
      </g>;
    case "meal":
      return <g>
        <rect x="42" y="49" width="138" height="86" rx="8" fill={board} stroke={ink} strokeWidth="1.5" />
        <rect x="48" y="55" width="79" height="73" rx="6" fill="#f7f4ec" stroke={ink} />
        <rect x="133" y="55" width="41" height="34" rx="5" fill="#f7f4ec" stroke={ink} />
        <rect x="133" y="95" width="41" height="33" rx="5" fill="#f7f4ec" stroke={ink} />
        <path d="M67 91 C72 71 103 70 111 91 C104 109 75 111 67 91Z" fill="#c08a4a" stroke={ink} />
        <circle cx="153" cy="72" r="9" fill="#d5e1d3" stroke={ink} /><circle cx="153" cy="111" r="9" fill={accent} />
        {label("MAIN", 78, 95)}{label("SIDE", 143, 75)}{label("DIP", 146, 114)}
      </g>;
    case "sauce":
      return <g>
        {[0,1,2].map(i => <g key={i} transform={"translate(" + (i * 42) + " 0)"}>
          <path d="M58 62 L82 62 L86 73 L81 127 L59 127 L54 73 Z" fill={board} stroke={ink} strokeWidth="1.5" />
          <path d="M57 72 L83 72" stroke={accent} strokeWidth="2" />
          {label(["CLASSIC","GARLIC","BBQ"][i], 56, 104, ink)}
        </g>)}
      </g>;
    case "bottle":
      return <g>
        <path d="M92 43 L128 43 L128 57 L139 67 L139 130 Q139 138 131 138 L89 138 Q81 138 81 130 L81 67 L92 57 Z" fill={board} stroke={ink} strokeWidth="1.5" />
        <path d="M99 43 L121 43 L121 34 L99 34 Z" fill={accent} stroke={ink} strokeWidth="1.2" />
        <rect x="85" y="82" width="50" height="34" rx="2" fill="#f7f4ec" stroke={ink} />
        {label("DRINK", 96, 96)}{label("FAREFOLD", 91, 106)}
      </g>;
    case "sushi":
      return <g>
        <rect x="38" y="50" width="144" height="82" rx="7" fill={board} stroke={ink} strokeWidth="1.5" />
        <rect x="45" y="57" width="84" height="68" rx="5" fill="#fff" stroke={ink} />
        <rect x="135" y="57" width="40" height="31" rx="5" fill="#fff" stroke={ink} />
        <rect x="135" y="94" width="40" height="31" rx="5" fill="#fff" stroke={ink} />
        {[0,1,2,3].map(i => <ellipse key={i} cx={61 + i * 17} cy="91" rx="7" ry="12" fill={i % 2 ? "#234d38" : "#c08a4a"} stroke={ink} />)}
        {label("MAIN", 79, 114)}{label("ROLL", 143, 76)}{label("DIP", 146, 113)}
      </g>;
    case "bag":
      return <g>
        <path d="M57 61 L163 61 L153 135 L67 135 Z" fill={board} stroke={ink} strokeWidth="1.5" />
        <path d="M80 64 C80 34 140 34 140 64" fill="none" stroke={ink} strokeWidth="5" />
        <rect x="78" y="83" width="64" height="31" fill="#f7f4ec" stroke={ink} />
        {label("CARRY", 89, 96)}{label("BRAND", 88, 107)}
      </g>;
    case "bakery":
      return <g>
        <path d="M43 57 L177 57 L165 132 L55 132 Z" fill={board} stroke={ink} strokeWidth="1.5" />
        <path d="M56 72 L164 72 L157 113 L63 113 Z" fill="#ffffff" fillOpacity="0.55" stroke={ink} strokeWidth="1.2" />
        <path d="M69 92 C77 76 91 76 99 92 C107 108 121 108 129 92 C137 76 150 78 156 93" fill="none" stroke={accent} strokeWidth="2" />
        {label("BAKERY", 82, 124)}{label("WINDOW", 103, 68)}
      </g>;
  }
}

export function ProductVisual({ kind, compact = false }: Props) {
  const { board, ink, accent } = palettes[kind];
  return (
    <div className={compact ? "relative flex min-h-[16rem] items-center justify-center overflow-hidden border-b border-page-border bg-page-surface p-6" : "relative flex min-h-[24rem] items-center justify-center overflow-hidden border border-page-border bg-page-surface p-7 sm:p-10"}>
      <span className="absolute left-5 top-5 t-tech-sm text-page-ink-mute">STRUCTURE / {kind}</span>
      <span className="absolute right-5 top-5 t-tech-sm text-page-accent">FAREFOLD</span>
      <svg viewBox="0 0 220 170" className="h-auto w-full max-w-[28rem]" role="img" aria-label={kind + " packaging specimen"}>
        <defs>
          <filter id="product-shadow" x="-20%" y="-20%" width="140%" height="150%">
            <feDropShadow dx="0" dy="5" stdDeviation="5" floodOpacity=".16" />
          </filter>
        </defs>
        <g filter="url(#product-shadow)"><Specimen kind={kind} ink={ink} board={board} accent={accent} /></g>
        <path d="M24 151 H196" stroke={ink} strokeWidth="1" strokeDasharray="3 4" opacity=".35" />
        <text x="24" y="160" fill={ink} fontSize="7" fontFamily="monospace" letterSpacing="1.2">CONCEPT / STRUCTURAL STUDY / NOT TO SCALE</text>
      </svg>
    </div>
  );
}
