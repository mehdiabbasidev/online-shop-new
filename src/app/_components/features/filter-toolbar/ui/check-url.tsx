import React from "react";

type Props = {
  label: string;
  checked: boolean;
  onChange: (next: boolean) => void;
};

export function CheckUrl({ label, checked, onChange }: Props) {
  return (
    <label className="inline-flex items-center gap-2 text-sm">
      <input
        type="checkbox"
        checked={checked}
        onChange={e => onChange(e.target.checked)}
        className="h-4 w-4 rounded border-border text-primary focus:ring-0"
      />
      <span className="text-sm text-muted-foreground">{label}</span>
    </label>
  );
}