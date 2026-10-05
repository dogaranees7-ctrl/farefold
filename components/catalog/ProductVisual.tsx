// Product photography will be supplied by Farefold and mapped to each
// catalogue item. Until those real photographs arrive, product cards stay
// intentionally typographic rather than showing invented package renders.
export type ProductVisualKind = "pizza" | "coffee" | "meal" | "sauce" | "bottle" | "sushi" | "bag" | "bakery";

type Props = { kind: ProductVisualKind; compact?: boolean };

export function ProductVisual({ kind, compact = false }: Props) {
  return (
    <div className={`flex ${compact ? "min-h-[10rem]" : "min-h-[16rem]"} items-end border-b border-black/10 bg-[#ebe3d6] p-6 sm:p-7`}>
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-black/35">Photography coming to this format</p>
        <p className="mt-2 text-2xl font-extrabold tracking-[-0.04em] text-[#171614]">{kind} packaging</p>
      </div>
    </div>
  );
}
