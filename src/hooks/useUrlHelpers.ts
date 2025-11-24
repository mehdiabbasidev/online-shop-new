"use client";

import { joinCSV, splitCSV } from "@/utils/helper";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export function useUrlHelpers() {

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const replace = useCallback((sp: URLSearchParams) => {
    sp.delete("page"); 
    const qs = sp.toString();
    router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
  }, [router, pathname]);
  

  const toggleCSV = useCallback((key: string, value: string) => {
    const sp = new URLSearchParams(searchParams.toString());
    const current = splitCSV(sp.get(key));
    const val = value.trim();
    if (!val) return;
    if (current.has(val)) 
      current.delete(val);
    else 
      current.add(val);
    if (current.size) 
      sp.set(key, joinCSV(current));
    else 
      sp.delete(key);
    replace(sp);
  }, [searchParams, replace]);


  const setBool = useCallback((key: string, value: boolean) => {
    const sp = new URLSearchParams(searchParams.toString());
    if (value) sp.set(key, "1");
    else sp.delete(key);
    replace(sp);
  }, [searchParams, replace]);
  

  const setSingle = useCallback((key: string, value?: string | number | null) => {
    const sp = new URLSearchParams(searchParams.toString());
    if (value === undefined || value === null || value === "") sp.delete(key);
    else sp.set(key, String(value));
    replace(sp);
  }, [searchParams, replace]);
  
  
  const setMany = useCallback((pairs: [string, string | number | null | undefined][]) => {
    const sp = new URLSearchParams(searchParams.toString());
    for (const [key, value] of pairs) {
      if (value === undefined || value === null || value === "") 
        sp.delete(key);
      else 
        sp.set(key, String(value));
    }
    replace(sp);
  }, [searchParams, replace]);
  

  const clearKeys = useCallback((keys: string[]) => {
    const sp = new URLSearchParams(searchParams.toString());
    keys.forEach(k => sp.delete(k));
    replace(sp);
  }, [searchParams, replace]);
  

  return { searchParams, toggleCSV, setBool, setSingle, setMany, clearKeys };
}


