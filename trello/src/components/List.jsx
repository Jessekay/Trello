import { useState } from "react";
export default function List({ title, cards }) {

  const [isEdit, setIsEdit] = useState(false);
  const [listTitle, setListTitle] = useState(title);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === "Escape") {
      setIsEdit(false)
    }
  }
  const handleOnclick = () => setIsEdit(true)
  const handleOnBlur = () => setIsEdit(false)
  const handleOnchange = (e) => setListTitle(e.target.value)
  return (
    <div className="w-68 shrink-0 rounded-xl bg-[#101204] p-2 text-[#b6c2cf]">
      <h2 className="px-2 py-1 text-sm font-semibold">
        {isEdit ? (
          <input
            type="text"
            value={listTitle}
            onChange={handleOnchange}
            onBlur={handleOnBlur}
            onKeyDown={handleKeyDown}
          />
        ) : (
          <span onClick={handleOnclick}>{listTitle}</span>
        )}
      </h2>
      {cards.map((card) => (
        <div key={card.id} className="mt-2 rounded-lg bg-[#22272b] px-3 py-2 text-sm">
          {card.text}
        </div>
      ))}
    </div>
  );
}