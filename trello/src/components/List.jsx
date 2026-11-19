import { useState } from "react";
import Card from './Card.jsx'
export default function List({ title, cards, id, onAddCard }) {

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
  const handleClosingForm = () => {
    setCardText("")
    setIsAdding(false)
  }

  const handleSubmitCard = () => {
    if (cardText.trim() === "") return;
    onAddCard(id, cardText.trim());
    handleClosingForm();
  }

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
            autoFocus
          />
        ) : (
          <span onClick={handleOnclick} className="cursor-pointer">{listTitle}</span>
        )}
      </h2>
      {cards.map((card) => (
        <Card key={card.id} text={card.text}/>
      ))}

    {isAdding ? (
  <div>
    <input
      type="text"
      value={cardText}
      placeholder="Enter a title..."
      onChange={(e) => (setCardText(e.target.value))}
      autoFocus
      className="p-0.5 gap-2"
    />
    <button className="cursor-pointer bg-blue-300 text-white rounded-xs" onClick={handleSubmitCard}>Add card</button>
    <button className="cursor-pointer" onClick={handleClosingForm}>✕</button>
  </div>
) : (
  <button onClick={() => setIsAdding(true)} className="cursor-pointer">
    Add a card
  </button>
)}

    </div>
  );
}