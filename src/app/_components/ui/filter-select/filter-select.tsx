"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useMemo, useState } from "react";
import { FilterSelectProps, Option } from "./filter-select.types";

const FilterSelect: React.FC<FilterSelectProps> = ({
  label,
  options,
  value,
  defaultValue,
  onChange,
  suffix,
  paramName,
  className,
  id = "items-select",
  preferUrl = false,
  syncOnMount = true,
}) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();


  const isNumericOptions = useMemo(
    () => options.every((o) => typeof o === "number" || (!isNaN(Number(o)) && typeof o !== "object")),
    [options]
  );


  // console.log("isNumericOptions : ",isNumericOptions);


  const fromUrl: Option | undefined = useMemo(() => {
    const raw = searchParams?.get(paramName ?? "");
    if (raw == null) return undefined;

    if (isNumericOptions) {
      const n = Number(raw);
      return Number.isFinite(n) ? n : undefined;
    }
    return raw;
  }, [searchParams, paramName, isNumericOptions]);

  // console.log("fromUrl : ",fromUrl);



  const initial: Option =
    (preferUrl ? fromUrl : value ?? defaultValue) ??  (!preferUrl ? fromUrl : undefined) ??  (options?.[0] as Option);

  // console.log("initial : ",initial);
  
  
  
  const [internal, setInternal] = useState<Option>(initial);
  
  useEffect(() => {
    if (!syncOnMount) return;
    try {
      const sp = new URLSearchParams(searchParams?.toString());
      if (String(internal) !== sp.get(paramName)) {
        sp.set(paramName, String(internal));
        router.replace(`${pathname}?${sp.toString()}`, { scroll: false });
      }
    } catch { }
  },[] );
  
  // console.log("internal : ",internal);


  
  useEffect(() => {
    // console.log("value : ",value);
    if (value !== undefined && value !== internal) {
      setInternal(value);
    }
  }, [value, internal]);




const handleChange = (raw: string) => {
  const next: Option = isNumericOptions ? Number(raw) : raw;

  setInternal(next);

  onChange?.(next);
  
  try {
    const sp = new URLSearchParams(searchParams?.toString());
    sp.set(paramName, String(next));

    sp.delete("page");

    router.replace(`${pathname}?${sp.toString()}`, { scroll: false });
  } catch {}
};


  const keyOf = (v: Option) => String(v);
  
  return (
    <div className={`hidden items-center gap-2 sm:flex ${className ?? ""}`}>
      <label htmlFor={id} className="text-sm text-muted-foreground">
        {label}:
      </label>
      <div className="hover:bg-slate-100">
        <select
          id={id}
          className="inline-flex items-center gap-1 rounded-md px-1 py-1.5 font-medium text-slate-700 bg-white hover:bg-slate-100"
          value={keyOf(internal)}
          onChange={(e) => handleChange(e.target.value)}
        >
          {options.map((opt) => (
            <option key={keyOf(opt)} value={keyOf(opt)}>
              {String(opt)}{isNumericOptions && suffix ? ` ${suffix}` : ""}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default FilterSelect;
