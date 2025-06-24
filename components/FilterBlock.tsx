const categories = ["Singers", "Dancers", "Speakers", "DJs"];

export default function FilterBlock({
  selected,
  onSelect
}: {
  selected: string | null;
  onSelect: (c: string | null) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => onSelect(null)}
        className={`px-3 py-1 rounded border ${!selected ? "bg-black text-white" : ""}`}
      >
        All
      </button>
      {categories.map((c) => (
        <button
          key={c}
          onClick={() => onSelect(c)}
          className={`px-3 py-1 rounded border ${selected === c ? "bg-black text-white" : ""}`}
        >
          {c}
        </button>
      ))}
    </div>
  );
          }
