export default function List({ title, cards }) {
  return (
    <div className="w-68 shrink-0 rounded-xl bg-[#101204] p-2 text-[#b6c2cf]">
      <h2 className="px-2 py-1 text-sm font-semibold">{title}</h2>
      {cards.map((card) => (
        <div key={card.id} className="mt-2 rounded-lg bg-[#22272b] px-3 py-2 text-sm">
          {card.text}
        </div>
      ))}
    </div>
  );
}