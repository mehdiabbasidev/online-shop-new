"use client";


type ResultInfoProps = {
  total: number;
  startIndex: number;
  endIndex: number;
};

export default function ResultInfo({ total, startIndex, endIndex }: ResultInfoProps) {
  return (
    <span className="whitespace-nowrap">
      <span className="font-medium text-slate-700">Showing</span>{" "}
      {startIndex + 1}-{Math.min(endIndex, total)} of {total} results
    </span>
  );
}
