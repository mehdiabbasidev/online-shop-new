"use client";

import { useCallback, useState } from "react";
import { useUrlHelpers } from "../../../../../hooks/useUrlHelpers";

export function FilterPrice() {
  const { searchParams, setMany } = useUrlHelpers();

  const minValue=searchParams.get("minPrice");
  const maxValue=searchParams.get("maxPrice");

  const [minPrice, setMinPrice] = useState<string>(minValue ?? "");
  const [maxPrice, setMaxPrice] = useState<string>(maxValue ?? "");

  const applyPrice = useCallback(() => {
    const min = minPrice.trim();
    const max = maxPrice.trim();
    setMany([
      ["minPrice", min || undefined],
      ["maxPrice", max || undefined],
    ]);
  }, [minPrice, maxPrice, setMany]);

  const clearPrice = useCallback(() => {
    setMinPrice("");
    setMaxPrice("");
    setMany([
      ["minPrice", undefined],
      ["maxPrice", undefined],
    ]);
  }, [setMany]);

  return (
    <div>
      <h4 className="mb-3 text-sm font-medium text-foreground">Price</h4>
      <div className="flex flex-col gap-2">
        <input
          type="number"
          inputMode="numeric"
          min="0"
          value={minPrice}
          onChange={e => setMinPrice(e.target.value)}
          placeholder="Min price"
          className="rounded-md border px-3 py-1.5 text-sm"
        />
        
        <input
          type="number"
          inputMode="numeric"
          min="0"
          value={maxPrice}
          onChange={e => setMaxPrice(e.target.value)}
          placeholder="Max price"
          className="rounded-md border px-3 py-1.5 text-sm"
        />

        <div className="flex gap-2">
          <button
            onClick={applyPrice}
            className="mt-1 rounded-md border px-3 py-1.5 text-sm hover:bg-muted/30"
            type="button"
          >
            Apply price
          </button>

          <button
            onClick={clearPrice}
            className="mt-1 rounded-md border px-3 py-1.5 text-sm hover:bg-muted/30"
            type="button"
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}



// "use client";

// import React, { useState, useCallback } from "react";
// import { useUrlHelpers } from "./use-url-helpers";

// export function FilterPrice() {
//   const { searchParams, setSingle } = useUrlHelpers();
//   const [minPrice, setMinPrice] = useState<string>(searchParams.get("minPrice") ?? "");
//   const [maxPrice, setMaxPrice] = useState<string>(searchParams.get("maxPrice") ?? "");

//   const applyPrice = useCallback(() => {
//     setSingle("minPrice", minPrice.trim() || undefined);
//     setSingle("maxPrice", maxPrice.trim() || undefined);
//   }, [minPrice, maxPrice, setSingle]);

//   return (
//     <div>
//       <h4 className="mb-3 text-sm font-medium text-foreground">Price </h4>
//       <div className="flex flex-col gap-2">
        
//         <input
//           type="number"
//           value={minPrice}
//           onChange={e => setMinPrice(e.target.value)}
//           placeholder="Min price"
//           className="rounded-md border px-3 py-1.5 text-sm"
//         />
//         <input
//           type="number"
//           value={maxPrice}
//           onChange={e => setMaxPrice(e.target.value)}
//           placeholder="Max price"
//           className="rounded-md border px-3 py-1.5 text-sm"
//         />
//         <button onClick={applyPrice} className="mt-1 rounded-md border px-3 py-1.5 text-sm hover:bg-muted/30" type="button">
//           Apply price
//         </button>
//       </div>
//     </div>
//   );
// }