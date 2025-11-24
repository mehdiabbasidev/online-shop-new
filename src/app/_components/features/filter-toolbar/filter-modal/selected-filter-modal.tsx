export default function SelectedFilterModal({
  searchParams,
  toggleCSV,
  setSingle,
  setBool,
}: {
  searchParams: ReturnType<typeof useSearchParams>;
  toggleCSV: (key: string, value: string) => void;
  setSingle: (key: string, value?: string | number | null) => void;
  setBool: (key: string, on: boolean) => void;
}) {
  
  // helpers fuction
  const splitCSV = (v: string | null) =>
    (v ?? "").split(",").map(s => s.trim()).filter(Boolean);

  

  // read active filters
  const brands   = splitCSV(searchParams.get("brands"));
  const groups   = splitCSV(searchParams.get("groups"));
  const tags     = splitCSV(searchParams.get("tags"));
  const minPrice = searchParams.get("minPrice");
  const maxPrice = searchParams.get("maxPrice");
  const rate     = searchParams.get("rate");
  const inStock  = searchParams.get("inStock") === "1";
  const fast     = searchParams.get("fast") === "1";
  const today    = searchParams.get("today") === "1";
  const discount = searchParams.get("discount") === "1";
  const official = searchParams.get("official") === "1";

  const filters: { label: string; onRemove: () => void }[] = [];

  brands.forEach(brand =>
    filters.push({ label: `Brand: ${brand[0].toUpperCase() + brand.slice(1)}`, onRemove: () => toggleCSV("brands", brand) })
  );

  
  
  groups.forEach(group =>
    filters.push({ label: `Group: ${group[0].toUpperCase() + group.slice(1)}`, onRemove: () => toggleCSV("groups", group) })
  );

  tags.forEach(tag =>
    filters.push({ label: `Tag: ${tag}`, onRemove: () => toggleCSV("tags", tag) })
  );

  if (minPrice) filters.push({ label: `Min: ${Number(minPrice).toLocaleString("fa-IR")}`, onRemove: () => setSingle("minPrice", undefined) });
  if (maxPrice) filters.push({ label: `Max: ${Number(maxPrice).toLocaleString("fa-IR")}`, onRemove: () => setSingle("maxPrice", undefined) });
  if (rate)     filters.push({ label: `≥ ${rate}★`, onRemove: () => setSingle("rate", undefined) });
  if (inStock)  filters.push({ label: "In stock",        onRemove: () => setBool("inStock", false) });
  if (fast)     filters.push({ label: "Fast shipping",   onRemove: () => setBool("fast", false) });
  if (today)    filters.push({ label: "Today delivery",  onRemove: () => setBool("today", false) });
  if (discount) filters.push({ label: "Discounted",      onRemove: () => setBool("discount", false) });
  if (official) filters.push({ label: "Official seller", onRemove: () => setBool("official", false) });

  if (filters.length === 0) {
    return (
      <div className="h-40 rounded-md border-2 border-blue-500/80 flex items-center justify-center text-sm text-muted-foreground">
        No active filters
      </div>
    );
  }

  return (
    <div className="min-h-40 rounded-md border-2 border-blue-500/80 p-1.5">
      <div className="mb-2 text-xl font-medium text-slate-700">Active filters <span>{filters.length}</span></div>
      <div className="flex flex-wrap gap-2">
        
        {filters.map((filter, i) => (
          <button
            key={i}
            type="button"
            onClick={filter.onRemove}
            className="group inline-flex items-center gap-1 rounded-full border px-2  text-[10px] font-medium
                       bg-white hover:bg-slate-100 transition"
            aria-label={`Remove ${filter.label}`}
          >
            <span className="text-slate-700">{filter.label}</span>
            <span className="rounded-full  pr-0  text-slate-500 group-hover:text-red-500 text-md font-medium">×</span>
          </button>
        ))}
      </div>
    </div>
  );
}
