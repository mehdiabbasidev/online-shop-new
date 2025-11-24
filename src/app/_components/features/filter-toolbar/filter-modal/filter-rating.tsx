"use client";
import { useCallback } from "react";
import { useUrlHelpers } from "../../../../../hooks/useUrlHelpers";
import { StarRow } from "../ui/star-row";

export function FilterRating() {
  const { searchParams, setSingle } = useUrlHelpers();

  const currentRate = Number(searchParams.get("rate") ?? "") || undefined;
  
  const handleStarClick = useCallback((st: number) => {
    if (currentRate === st) {
      setSingle("rate", undefined);
    } else {
      setSingle("rate", st);
    }
  }, [currentRate, setSingle]);

  return (
    <div>
      <h4 className="mb-3 text-sm font-medium text-foreground">Rating</h4>
      <div className="flex flex-col gap-3">
        {[5, 4, 3, 2, 1].map(st => (
          <StarRow
            key={st}
            stars={st}
            active={currentRate === st}
            onClick={() => handleStarClick(st)}
          />
        ))}

        
      </div>
    </div>
  );
}

