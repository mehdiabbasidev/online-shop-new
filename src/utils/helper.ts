export const toNum = (v: string | null, fallback: number): number => {
  const n = Number(v);
  return Number.isFinite(n) ? n : fallback;
};

// --------------------------------------------------------------------
export const parseCSV = (v: string | null): string[] =>
  (v ?? "").split(",").map(s => s.trim()).filter(Boolean);

// --------------------------------------------------------------------
export const low = (s?: string | number | null) =>
  s == null ? "" : String(s).toLowerCase();

// --------------------------------------------------------------------
export const toNumOrUndef = (raw: string | null): number | undefined => {
  if (raw == null) return undefined;
  const s = raw.trim();

  if (s === "") return undefined;
  const n = Number(s);
  return Number.isFinite(n) ? n : undefined;
};

// --------------------------------------------------------------------
export const splitCSV = (v: string | null): Set<string> =>
  new Set((v ?? "").split(",").map(s => s.trim()).filter(Boolean));

// --------------------------------------------------------------------
export const joinCSV = (s: Set<string>): string =>
  Array.from(s).join(",");
