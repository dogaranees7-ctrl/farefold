// ---------------------------------------------------------------------------
// Farefold — content model.
//
// Everything on the site reads from here. The site is structured as a
// packaging specification, so content is modelled the way a spec is: each
// section is a numbered SHEET, and every technical claim below is the kind
// of general packaging knowledge a specifier actually applies — not invented
// business facts, statistics, clients or certifications.
//
// NOTE: whatsappNumber is digits only (country code, no "+" or spaces) for
// the wa.me link; whatsappDisplay is the human-readable form shown on page.
// ---------------------------------------------------------------------------

export const siteConfig = {
  name: "Farefold",
  legalName: "Farefold",
  tagline: "Restaurant branding, packaging and launch systems",
  description:
    "Farefold helps restaurants and food businesses build recognizable brands through branding, packaging, custom systems and launch support. Pakistan first.",
  url: "https://www.farefold.com",
  email: "contactfarefold@gmail.com",
  whatsappNumber: "923358577371",
  whatsappDisplay: "+92 335 8577371",
};

export function getWhatsappLink(message: string) {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function getMailtoLink(subject: string, body?: string) {
  const query = body
    ? `subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    : `subject=${encodeURIComponent(subject)}`;
  return `mailto:${siteConfig.email}?${query}`;
}

// A real brief template, pre-filled into the visitor's own mail client. Not a
// fake form — it just asks up front for what we would ask for anyway.
export const quoteBrief = [
  "Business name:",
  "Type of business (restaurant / cafe / bakery / cloud kitchen / other):",
  "What you serve (top 3 items):",
  "Packaging you need:",
  "Approximate monthly volume:",
  "Do you need design and printing, or supply only?",
  "Timeline:",
  "City / delivery location:",
].join("\n");

export const whatsappOpener =
  "Hi Farefold — I would like to talk about packaging. Here is what I serve and roughly what I need:";

// --- Navigation -------------------------------------------------------------

export const navLinks = [
  { label: "Businesses", href: "/businesses" },
  { label: "Branding", href: "/branding" },
  { label: "Products", href: "/products" },
  { label: "Packaging", href: "/packaging" },
  { label: "Custom", href: "/custom" },
  { label: "Guidelines", href: "/guidelines" },
  { label: "Contact", href: "/contact" },
];

// The sheet index — drives the left drafting rail and the footer colophon.
export const sheets = [
  { no: "01", title: "Cover", href: "#top" },
  { no: "02", title: "Method", href: "#thinking" },
  { no: "03", title: "Development", href: "#sequence" },
  { no: "04", title: "Library", href: "#library" },
  { no: "05", title: "Industries", href: "#industries" },
  { no: "06", title: "Materials", href: "#materials" },
  { no: "07", title: "Brand", href: "#brand" },
  { no: "08", title: "Production", href: "#process" },
  { no: "09", title: "Work order", href: "#contact" },
];

// --- SHEET 02 — Method ------------------------------------------------------
// The interrogation a packaging specifier runs before drawing anything. Each
// question resolves to a concrete engineering decision — nothing here is a
// "value", everything is a consequence.

export type Question = {
  ask: string;
  determines: string;
  detail: string;
};

export const questions: Question[] = [
  {
    ask: "What are you serving?",
    determines: "Structure class",
    detail:
      "A pizza, a burger and a portion of curry have nothing in common structurally. The food picks the format long before anyone picks a colour.",
  },
  {
    ask: "How does it travel?",
    determines: "Board grade + closure",
    detail:
      "Counter pickup, a five-minute drive and a thirty-minute rider queue are three different engineering problems.",
  },
  {
    ask: "How hot, cold, greasy or wet is it?",
    determines: "Liner, coating, venting",
    detail:
      "Steam softens board. Oil migrates. Condensation ruins a crust. Barrier and ventilation get chosen against the food, not against the budget.",
  },
  {
    ask: "How is it held?",
    determines: "Grip, handle, carrier",
    detail:
      "One hand on a scooter, two hands to a table, or a stack of twelve to an office. Each one changes the carrier.",
  },
  {
    ask: "How is it stacked?",
    determines: "Edge crush + footprint",
    detail:
      "Packaging fails in the stack more often than in the hand. Footprint also decides how much storeroom you end up renting.",
  },
  {
    ask: "How does the customer open it?",
    determines: "Tab, perforation, lid mechanic",
    detail:
      "Opening it is the first thing your customer does with your brand. A tab that tears the lid in half undoes the meal.",
  },
  {
    ask: "Where does the brand appear?",
    determines: "Print process + panel",
    detail:
      "The panel that faces up in the bag is worth more than the one underneath it. That gets decided before artwork starts.",
  },
  {
    ask: "How does it scale?",
    determines: "Tooling + reorder cycle",
    detail:
      "A design that only works at five hundred units is a design you replace at five thousand. We plan the second order during the first.",
  },
];

// --- SHEET 03 — Development sequence ---------------------------------------
// One packaging system taken through seven stages. The drawing accumulates a
// layer at each stage: brief, requirements, cut line, board, artwork,
// separations, folded form.

export type Stage = {
  key: string;
  label: string;
  headline: string;
  body: string;
  spec: [string, string][];
};

export const stages: Stage[] = [
  {
    key: "menu",
    label: "Menu",
    headline: "It starts with the food, not the box.",
    body: "The item, its portion, its temperature and how long it sits before someone eats it. At this point that brief is the only thing on the sheet.",
    spec: [
      ["Item", "12in stone-baked pizza"],
      ["Exit temp", "~90C, uncovered"],
      ["Journey", "20–35 min, two-wheeler"],
      ["Constraint", "Crust must not steam"],
    ],
  },
  {
    key: "function",
    label: "Function",
    headline: "What the packaging has to survive.",
    body: "The brief becomes a list of physical requirements, written on the blank sheet before a single line is drawn. This is what the structure has to answer to.",
    spec: [
      ["Must", "Vent steam, stay rigid hot"],
      ["Must", "Stack six high in a bag"],
      ["Must", "Open flat on a table"],
      ["Must not", "Let grease through"],
    ],
  },
  {
    key: "structure",
    label: "Structure",
    headline: "The dieline is the design.",
    body: "Now the cut line gets drawn. Panels, tabs, locks, and the crease pattern that turns one flat sheet into a rigid form with no glue and very little offcut.",
    spec: [
      ["Style", "One-piece corner-lock"],
      ["Panels", "6 + 4 locking tabs"],
      ["Creases", "12, scored both ways"],
      ["Yield", "2-up on sheet"],
    ],
  },
  {
    key: "material",
    label: "Material",
    headline: "Board chosen against the food.",
    body: "Grade, flute and liner get specified once the structure is known — because caliper and stiffness change the crease allowances on the dieline you just drew.",
    spec: [
      ["Substrate", "E-flute corrugated"],
      ["Caliper", "1.5 mm"],
      ["Surface", "Kraft outer, white liner"],
      ["Treatment", "Grease-resistant inner"],
    ],
  },
  {
    key: "brand",
    label: "Brand",
    headline: "Artwork fitted to the panels that get seen.",
    body: "The identity goes onto the flat sheet, not onto a picture of a finished box. The mark lands on the panels that face up in the bag and out on the counter.",
    spec: [
      ["Primary panel", "Lid, top-facing"],
      ["Secondary", "Front wall, 40 mm band"],
      ["Carries", "Mark + one line of copy"],
      ["Skipped", "Base panel — never seen"],
    ],
  },
  {
    key: "print",
    label: "Print",
    headline: "Separations, registration, tolerance.",
    body: "Artwork splits into printable colours, bleed runs past the trim, and registration marks go down so colour lands where the drawing says it lands.",
    spec: [
      ["Process", "Flexo, two colour"],
      ["Bleed", "3 mm past cut"],
      ["Registration", "Four corner marks"],
      ["Tolerance", "±1.5 mm on kraft"],
    ],
  },
  {
    key: "delivery",
    label: "Delivery",
    headline: "Flat to your storeroom. Folded in your kitchen.",
    body: "It ships flat — that is the entire economic argument for a folding carton — and your team makes it up in a second. Then it repeats on your schedule.",
    spec: [
      ["Ships", "Flat, bundled in 50s"],
      ["Assembly", "One fold sequence, no tape"],
      ["Storage", "Fraction of made-up volume"],
      ["Resupply", "Scheduled, no re-brief"],
    ],
  },
];

// --- SHEET 04 — Packaging library ------------------------------------------
// The specimen wall. Each entry is a real structure with the notes a
// specifier would write against it. `structure` keys a line drawing.

export type Specimen = {
  no: string;
  coord: string;
  structure: string;
  label: string;
  form: string;
  material: string;
  note: string;
};

export const specimens: Specimen[] = [
  { no: "01", coord: "A1", structure: "pizzaBox", label: "Pizza", form: "Corner-lock corrugated box", material: "E-flute kraft", note: "Vented, stacks hot" },
  { no: "02", coord: "A2", structure: "clamshell", label: "Burger", form: "Hinged clamshell", material: "Coated board", note: "Opens one-handed" },
  { no: "03", coord: "A3", structure: "bucket", label: "Chicken", form: "Tapered bucket + lid", material: "Poly-lined board", note: "Nests when empty" },
  { no: "04", coord: "A4", structure: "platter", label: "BBQ", form: "Foil platter + board lid", material: "Aluminium", note: "Grease and heat" },
  { no: "05", coord: "A5", structure: "sleeveWrap", label: "Shawarma", form: "Wrap + printed band", material: "Greaseproof", note: "Holds the roll shut" },
  { no: "06", coord: "A6", structure: "pail", label: "Chinese", form: "Folded-top pail", material: "Poly-lined board", note: "Leak-resistant base" },
  { no: "07", coord: "B1", structure: "roundTub", label: "Desi / Curry", form: "Round tub + snap lid", material: "PP", note: "Sauce-tight, hot fill" },
  { no: "08", coord: "B2", structure: "windowBox", label: "Bakery", form: "Window box", material: "White board", note: "Shows the product" },
  { no: "09", coord: "B3", structure: "cakeBox", label: "Cake", form: "Tall box + handle", material: "Rigid board", note: "Carried level" },
  { no: "10", coord: "B4", structure: "dessertCup", label: "Dessert", form: "Cup + dome lid", material: "PET", note: "Layers stay visible" },
  { no: "11", coord: "B5", structure: "hotCup", label: "Café", form: "Hot cup + sleeve", material: "Double-wall board", note: "Sleeve carries brand" },
  { no: "12", coord: "B6", structure: "carrier", label: "Beverage", form: "Four-cup carrier", material: "Moulded pulp", note: "No spill in transit" },
  { no: "13", coord: "C1", structure: "tallCup", label: "Juice / Shake", form: "Tall cup + dome lid", material: "PET", note: "Cold, condensation" },
  { no: "14", coord: "C2", structure: "iceTub", label: "Ice Cream", form: "Tub + tamper lid", material: "Poly board", note: "Freezer stable" },
  { no: "15", coord: "C3", structure: "cateringBox", label: "Catering", form: "Large handled box", material: "B-flute", note: "Volume, carried far" },
  { no: "16", coord: "C4", structure: "modular", label: "Cloud Kitchen", form: "Modular container set", material: "Mixed", note: "One system, many menus" },
  { no: "17", coord: "C5", structure: "gussetBag", label: "Grocery / Retail", form: "Gusseted carrier bag", material: "Kraft", note: "Shelf plus takeaway" },
  { no: "18", coord: "C6", structure: "blankDieline", label: "Custom", form: "Drawn from zero", material: "Specified", note: "For when nothing fits" },
];

// --- SHEET 05 — Industries --------------------------------------------------
// Each segment paired with what its food actually demands of packaging.

export type Segment = {
  no: string;
  label: string;
  needs: string[];
};

export const segments: Segment[] = [
  { no: "01", label: "Restaurants", needs: ["Dine-in to takeaway parity", "Portion fit", "Brand on every exit", "Reorder rhythm"] },
  { no: "02", label: "Cafés", needs: ["Heat retention", "Grip", "Lid seal", "Counter presentation"] },
  { no: "03", label: "Bakeries", needs: ["Protection", "Presentation", "Stacking", "Grease"] },
  { no: "04", label: "Cloud Kitchens", needs: ["One system, many brands", "Rider handling", "Seal integrity", "Storage footprint"] },
  { no: "05", label: "Pizzerias", needs: ["Steam venting", "Rigid when hot", "Stack strength", "Flat storage"] },
  { no: "06", label: "Burger & Fast Food", needs: ["Speed of assembly", "Grease barrier", "Holds shape", "Lets fry heat out"] },
  { no: "07", label: "Chicken & BBQ", needs: ["Grease", "Heat", "Load strength", "Carrying"] },
  { no: "08", label: "Shawarma & Middle Eastern", needs: ["Roll containment", "Sauce control", "One-hand eating", "Wrap print"] },
  { no: "09", label: "Chinese", needs: ["Heat retention", "Sauce containment", "Ventilation", "Stacking"] },
  { no: "10", label: "Desi / South Asian", needs: ["Gravy seal", "Compartments", "Reheat tolerance", "Multi-dish sets"] },
  { no: "11", label: "Dessert & Ice Cream", needs: ["Presentation", "Structure", "Temperature", "Protection"] },
  { no: "12", label: "Beverage & Juice", needs: ["Leak resistance", "Temperature", "Grip", "Branding"] },
  { no: "13", label: "Catering & Events", needs: ["Volume", "Transport", "Organisation", "Consistency"] },
  { no: "14", label: "Food Retail", needs: ["Shelf face", "Labelling space", "Stack density", "Repeat print runs"] },
  { no: "15", label: "Restaurant Chains", needs: ["Colour consistency", "Multi-site supply", "Spec control", "Version management"] },
  { no: "16", label: "New Restaurants", needs: ["Opening-day list", "Budget staging", "Minimum quantities", "Room to grow"] },
];

// --- SHEET 06 — Materials lab ----------------------------------------------
// Indicative properties only. Real performance depends on grade, caliper and
// coating — which the sheet itself says out loud.

export type Material = {
  code: string;
  name: string;
  swatch: string;
  summary: string;
  uses: string[];
  print: string;
  strengths: string[];
  limits: string[];
  ratings: { grease: number; heat: number; moisture: number; print: number };
};

export const materials: Material[] = [
  {
    code: "M-01",
    name: "Kraft board",
    swatch: "kraft",
    summary: "Unbleached brown board. The default warm, plain-spoken substrate.",
    uses: ["Takeaway cartons", "Bags and sleeves", "Wrap bands"],
    print: "One or two spot colours sit best. Light inks lose contrast against the brown ground.",
    strengths: ["Rigid for its weight", "Strong contrast with dark inks", "Cost-efficient at volume"],
    limits: ["Not grease-resistant untreated", "Shade varies between batches"],
    ratings: { grease: 1, heat: 2, moisture: 1, print: 2 },
  },
  {
    code: "M-02",
    name: "Paperboard (SBS / FBB)",
    swatch: "white",
    summary: "Bleached white board. The best printing surface in packaging.",
    uses: ["Cake and dessert boxes", "Sleeves", "Folding cartons"],
    print: "Full-colour offset, foil, emboss and spot varnish all hold cleanly.",
    strengths: ["Highest print fidelity", "Crisp creases and clean edges", "Takes finishing well"],
    limits: ["Needs coating or a liner for grease or moisture", "Shows marks more than kraft"],
    ratings: { grease: 1, heat: 2, moisture: 1, print: 3 },
  },
  {
    code: "M-03",
    name: "Corrugated (E / B flute)",
    swatch: "corrugated",
    summary: "Fluted board. Structure and insulation in one material.",
    uses: ["Pizza boxes", "Catering boxes", "Outer shippers"],
    print: "Flexo direct to board, or litho-lamination where photographic artwork is needed.",
    strengths: ["Stacking strength", "Some thermal insulation", "Absorbs handling damage"],
    limits: ["Coarser print surface", "Bulkier to store than flat board"],
    ratings: { grease: 1, heat: 3, moisture: 1, print: 2 },
  },
  {
    code: "M-04",
    name: "Food-grade paper",
    swatch: "paper",
    summary: "Light direct-contact paper. Sits between the food and the structure.",
    uses: ["Basket liners", "Bag liners", "Interleaving"],
    print: "One or two colours with food-contact inks. Keep coverage light.",
    strengths: ["Very low cost", "Almost no added weight", "Puts a brand on a cheap format"],
    limits: ["No structure of its own", "No barrier without treatment"],
    ratings: { grease: 1, heat: 1, moisture: 0, print: 2 },
  },
  {
    code: "M-05",
    name: "Greaseproof / parchment",
    swatch: "greaseproof",
    summary: "Oil-resistant paper. The answer to fried food bleeding through.",
    uses: ["Burger wraps", "Fried chicken", "Shawarma", "Bakery"],
    print: "One or two colours. The surface resists heavy ink coverage.",
    strengths: ["Resists oil migration", "Flexes around irregular food", "Keeps outer packaging clean"],
    limits: ["Not a moisture barrier", "No rigidity — always needs a carrier"],
    ratings: { grease: 3, heat: 2, moisture: 1, print: 1 },
  },
  {
    code: "M-06",
    name: "PET",
    swatch: "pet",
    summary: "Clear rigid plastic. Used when the product has to sell itself.",
    uses: ["Cold cups", "Salad bowls", "Dessert domes", "Cake lids"],
    print: "Applied labels, shrink sleeves or screen print. The material itself stays clear.",
    strengths: ["Optical clarity", "Holds shape cold", "Clean seal to lids"],
    limits: ["Not for hot fill", "Scratches and shows fingerprints"],
    ratings: { grease: 3, heat: 0, moisture: 3, print: 1 },
  },
  {
    code: "M-07",
    name: "PP",
    swatch: "pp",
    summary: "Polypropylene. The heat-tolerant container plastic.",
    uses: ["Curry and soup containers", "Microwavable meals", "Lids"],
    print: "In-mould labels or screen print. Less clarity than PET.",
    strengths: ["Tolerates hot fill", "Reheat tolerant", "Seals tightly against sauce"],
    limits: ["Cloudier than PET", "Lid fit has to be specified carefully"],
    ratings: { grease: 3, heat: 3, moisture: 3, print: 1 },
  },
  {
    code: "M-08",
    name: "Aluminium",
    swatch: "aluminium",
    summary: "Foil containers. Oven and grill work, straight to the customer.",
    uses: ["BBQ and grills", "Catering trays", "Bake-and-serve"],
    print: "Print goes on the board lid or an applied label, not on the foil.",
    strengths: ["Oven safe", "Rigid at high heat", "Holds heat in transit"],
    limits: ["Not microwave safe", "Almost no direct print surface"],
    ratings: { grease: 3, heat: 3, moisture: 2, print: 0 },
  },
  {
    code: "M-09",
    name: "Recycled board",
    swatch: "recycled",
    summary: "Board with post-consumer content. Visibly recycled, deliberately.",
    uses: ["Sleeves", "Outer cartons", "Trays"],
    print: "Earthy palettes and single colours work with the flecked ground rather than against it.",
    strengths: ["Distinct flecked surface", "Pairs well with restrained palettes"],
    limits: [
      "Shade varies noticeably between runs",
      "Specify a direct-food-contact grade wherever it touches food",
    ],
    ratings: { grease: 1, heat: 2, moisture: 1, print: 2 },
  },
  {
    code: "M-10",
    name: "Plant-fibre / compostable",
    swatch: "fibre",
    summary: "Moulded bagasse and lined fibre formats.",
    uses: ["Bowls", "Trays", "Clamshells", "Lids"],
    print: "Limited direct print. Brand usually lands on a band, a label or the lid.",
    strengths: ["Rigid", "Handles hot food well", "Matte, tactile surface"],
    limits: [
      "Disposal outcome depends on local collection and certification — check what actually exists in your market before putting a claim on pack",
      "Costs more than equivalent board",
    ],
    ratings: { grease: 2, heat: 3, moisture: 2, print: 1 },
  },
];

// --- SHEET 07 — Brand across touchpoints -----------------------------------

export type Touchpoint = {
  no: string;
  label: string;
  line: string;
};

export const touchpoints: Touchpoint[] = [
  { no: "01", label: "Logo", line: "One mark, drawn to survive being printed at 14 mm on a wrap band." },
  { no: "02", label: "Colour", line: "Specified as ink, not as a screen value. Kraft shifts everything." },
  { no: "03", label: "Pattern", line: "A system that can fill a bag panel or a 5 mm sleeve edge." },
  { no: "04", label: "Packaging", line: "Applied to the panels facing the customer, not the ones facing the floor." },
  { no: "05", label: "Table", line: "The box sits there for the whole meal. It is furniture, briefly." },
  { no: "06", label: "Delivery", line: "Sealed, stacked, and photographed by someone before it is opened." },
  { no: "07", label: "Customer", line: "The last thing they touch, and the only part of you they keep for an hour." },
];

// --- SHEET 08 — Production loop --------------------------------------------

export type ProcessStep = {
  no: string;
  label: string;
  blurb: string;
};

export const processSteps: ProcessStep[] = [
  { no: "01", label: "Consult", blurb: "Menu, volumes, current packaging, and what is failing." },
  { no: "02", label: "Design", blurb: "Structure and dieline drawn against the food brief." },
  { no: "03", label: "Source", blurb: "Materials and makers matched to the spec and the run size." },
  { no: "04", label: "Print", blurb: "Separations, registration and finish set for the substrate." },
  { no: "05", label: "Sample", blurb: "A physical unit you can load, close, carry and drop." },
  { no: "06", label: "Approve", blurb: "Spec frozen. The drawing becomes the contract." },
  { no: "07", label: "Supply", blurb: "Production run delivered flat, on your schedule." },
  { no: "08", label: "Repeat", blurb: "Reorders run off the approved spec. Nobody re-briefs anyone." },
];

// --- Services (kept for search and the footer colophon) ---------------------

export const services = [
  "Packaging supply",
  "Custom packaging",
  "Structural packaging design",
  "Custom printing",
  "Packaging sourcing",
  "Packaging consultation",
  "New restaurant setup",
  "Recurring supply",
  "Brand application",
];
