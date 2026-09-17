// ---------------------------------------------------------------------------
// The development drawing.
//
// One sheet of board, accumulating a layer per stage. Nothing is redrawn
// between stages — layers are added, exactly the way a real carton drawing is
// built up: brief, requirements, cut line, substrate, artwork, separations.
//
// The last stage is the only place a formed box appears on this site, and it
// is drawn as an isometric line elevation with dashed hidden edges, because
// it is a technical drawing of an outcome, not an ornament.
// ---------------------------------------------------------------------------

type Props = { stage: number; className?: string };

const show = (on: boolean) => ({
  opacity: on ? 1 : 0,
  transition: "opacity .55s var(--ease-spec)",
});

export function SequenceDrawing({ stage, className = "" }: Props) {
  const folded = stage >= 6;

  return (
    <svg
      viewBox="0 0 400 320"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      {/* ---- Flat-sheet composition, stages 01–06 --------------------- */}
      <g style={show(!folded)}>
        {/* The raw board. Present from the first stage: before anything is
            decided, this is all there is. */}
        <rect
          x="70"
          y="36"
          width="260"
          height="248"
          className="dl"
          stroke="currentColor"
          strokeWidth="0.9"
          strokeDasharray="2 4"
          opacity="0.5"
        />

        {/* Substrate fill, stage 04. */}
        <g style={show(stage >= 3)}>
          <path
            d="M120 50h160v40h40v140h-40v40H120v-40H80V90h40z"
            fill="var(--color-kraft-pale)"
            stroke="none"
          />
          <rect x="70" y="278" width="260" height="6" className="flute" />
          <g className="dl-dim" stroke="currentColor">
            <path d="M60 278h-14M60 284h-14M53 278v6" />
          </g>
          <text
            className="font-mono"
            fill="currentColor"
            x="22"
            y="296"
            fontSize="9"
            letterSpacing="1.4"
            opacity="0.7"
          >
            1.5mm
          </text>
        </g>

        {/* Requirements written onto the blank sheet, stage 02. */}
        <g style={show(stage >= 1 && stage < 3)} className="dl-dim" stroke="currentColor">
          <path d="M200 60v-22M340 160h22M200 260v22M60 160H38" />
          <g
            className="font-mono"
            fill="currentColor"
            stroke="none"
            fontSize="9"
            letterSpacing="1.4"
          >
            <text x="172" y="30" >VENT</text>
            <text x="352" y="152">STACK</text>
            <text x="176" y="296">RIGID</text>
            <text x="12" y="152">NO GREASE</text>
          </g>
        </g>

        {/* Cut line and crease pattern, stage 03. */}
        <g style={show(stage >= 2)}>
          <path
            d="M120 50h160v40h40v140h-40v40H120v-40H80V90h40z"
            className="dl"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <g className="dl-crease">
            <path d="M120 90h160v140H120z" />
            <path d="M120 50v40M280 50v40M120 230v40M280 230v40M80 90h40M80 230h40M280 90h40M280 230h40" />
          </g>
        </g>

        {/* Brand panels, stage 05 — placed only where they are seen. */}
        <g style={show(stage >= 4)}>
          <rect x="150" y="128" width="100" height="26" fill="currentColor" opacity="0.88" />
          <rect x="150" y="162" width="62" height="7" fill="currentColor" opacity="0.4" />
          <rect x="132" y="244" width="70" height="12" fill="currentColor" opacity="0.35" />
          <g className="dl-dim" stroke="currentColor">
            <path d="M250 141h46" />
          </g>
          <text
            className="font-mono"
            fill="currentColor"
            x="300"
            y="144"
            fontSize="9"
            letterSpacing="1.4"
            opacity="0.7"
          >
            LID
          </text>
        </g>

        {/* Separations, bleed and registration, stage 06. */}
        <g style={show(stage >= 5)}>
          <path
            d="M114 44h172v40h40v152h-40v40H114v-40H74V84h40z"
            stroke="var(--color-crease-line)"
            strokeWidth="0.8"
            strokeDasharray="1.5 3"
            fill="none"
          />
          <g stroke="var(--color-crease-line)" strokeWidth="0.9">
            <path d="M92 62h10M97 57v10M308 62h10M313 57v10M92 258h10M97 253v10M308 258h10M313 253v10" />
          </g>
          <g stroke="none">
            <rect x="150" y="272" width="16" height="8" fill="var(--color-ink)" />
            <rect x="168" y="272" width="16" height="8" fill="var(--color-crease-line)" />
            <rect x="186" y="272" width="16" height="8" fill="var(--color-kraft)" />
            <rect x="204" y="272" width="16" height="8" fill="var(--color-brand)" />
          </g>
        </g>
      </g>

      {/* ---- Delivery composition, stage 07 --------------------------- */}
      <g style={show(folded)}>
        {/* Shipped flat: a bundle of nets. */}
        <g className="dl" stroke="currentColor">
          <path d="M40 210h96l24-14H64z" />
          <path d="M40 210v10l96 0v-10M136 210l24-14v10l-24 14z" />
          <path d="M46 202h96M52 194h96" strokeWidth="0.9" opacity="0.6" />
        </g>
        <text
          className="font-mono"
          fill="currentColor"
          x="40"
          y="244"
          fontSize="9"
          letterSpacing="1.6"
          opacity="0.7"
        >
          FLAT · BUNDLED 50
        </text>

        {/* The fold operation. */}
        <g className="dl-dim" stroke="var(--color-crease-line)">
          <path d="M180 178h30M204 173l6 5-6 5" />
        </g>
        <text
          className="font-mono"
          fill="var(--color-crease-line)"
          x="176"
          y="166"
          fontSize="9"
          letterSpacing="1.6"
        >
          FOLD
        </text>

        {/* Formed carton, isometric line elevation. Hidden edges dashed. */}
        <g className="dl" stroke="currentColor">
          <path d="M290 96 360 136 290 176 220 136z" />
          <path d="M220 136v44l70 40v-44M290 176v44l70-40v-44" />
          <g strokeDasharray="3 3" strokeWidth="0.9" opacity="0.55">
            <path d="M290 96v44M290 140l-70 40M290 140l70 40" />
          </g>
        </g>
        <g className="dl-dim" stroke="currentColor">
          <path d="M372 136v84M368 136h8M368 220h8" />
        </g>
        <text
          className="font-mono"
          fill="currentColor"
          x="252"
          y="252"
          fontSize="9"
          letterSpacing="1.6"
          opacity="0.7"
        >
          MADE UP IN ONE MOVE
        </text>
      </g>
    </svg>
  );
}
