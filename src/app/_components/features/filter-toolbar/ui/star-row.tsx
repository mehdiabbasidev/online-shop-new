export function StarRow({
  stars,
  active,
  onClick,
}: {
  stars: number;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex items-center gap-3 text-left ${active ? "opacity-100" : "opacity-70 hover:opacity-100"}`}
      aria-pressed={active}
    >
      <div className="flex items-center text-amber-400">
        {Array.from({ length: stars }).map((_, i) => (
          <svg key={i} className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.97c.3.921-.755 1.688-1.54 1.118L10 13.347l-3.49 2.616c-.784.57-1.838-.197-1.539-1.118l1.287-3.97a1 1 0 00-.364-1.118L2.514 9.397c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.97z" />
          </svg>
        ))}
      </div>
      <span className="text-sm text-muted-foreground">({stars} stars & up)</span>
    </button>
  );
}