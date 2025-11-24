"use client";

import { useMemo } from "react";
import { useUrlHelpers } from "../../../../../hooks/useUrlHelpers";
import { CheckUrl } from "../ui/check-url";


const GROUPS = ["mobile", "laptop", "accessory", "tablet", "smartwatch", "audio", "camera"];

export function FilterGroups() {
  const { searchParams, toggleCSV } = useUrlHelpers();
  const groups = useMemo(() => {
    const v = searchParams.get("groups");
    return new Set((v ?? "").split(",").map(s => s.trim()).filter(Boolean));
  }, [searchParams]);

  return (
    <div>
      <h4 className="mb-3 text-sm font-medium text-foreground">Product groups</h4>
      <div className="flex flex-col gap-2">
        {GROUPS.map(g => (
          <CheckUrl
            key={g}
            label={g[0].toUpperCase() + g.slice(1)}
            checked={groups.has(g)}
            onChange={() => toggleCSV("groups", g)}
          />
        ))}
      </div>
    </div>
  );
}