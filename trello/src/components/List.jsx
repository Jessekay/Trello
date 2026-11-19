import { useState } from "react";
export default function List({ title, cards }) {

  const [isEdit, setIsEdit] = useState(false);
  const [listTitle, setListTitle] = useState(title);
  const [isAdding, setIsAdding] = useState(false);
  const [cardText, setCardText] = useState("")


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
      <h2 className="px-2 py-1 text-sm font-semibold curs">
        {isEdit ? (
          <input
            type="text"
            value={listTitle}
            onChange={handleOnchange}
            onBlur={handleOnBlur}
            onKeyDown={handleKeyDown}
            autoFocus
          />
        ) : (
          <span onClick={handleOnclick} className="cursor-pointer">{listTitle}</span>
        )}
      </h2>
      {cards.map((card) => (
        <div key={card.id} className="mt-2 rounded-lg bg-[#22272b] px-3 py-2 text-sm">
          {card.text}
        </div>
      ))}
    
    {isAdding ? (
  <div>
    <input
      type="text"
      value={cardText}
      placeholder="Enter a title..."
      onChange={(e) => (setCardText(e.target.value))}
      autoFocus
    />
    <button>Add card</button>
    <button onClick={() => (setIsAdding(false))}>✕</button>
  </div>
) : (
  <button onClick={() => setIsAdding(true)} className="cursor-pointer">
    Add a card
  </button>
)}

    </div>
  );
}