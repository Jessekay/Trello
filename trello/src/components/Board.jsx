import { useState } from 'react';
import List from './List'
export default function Board() {
  const [boardLists, setBoardLists] = useState([])

  const handleAddCard = (listId, text) => {
    const newCard = {id:crypto.randomUUID(), text:text}
    setBoardLists((prev) => {
      return prev.map((list) => {
        if (list.id === listId) {
          return {...list, cards:[...list.cards, newCard]}
        }
        return list
      })
  })
  }

  const listItem = boardLists.map(list => (
    <List 
    key={list.id}
    id={list.id} 
    title={list.title} 
    cards={list.cards}
    onAddCard={handleAddCard}
    />
  ))

  const handleOnclick = () => {
    const newList = { id:crypto.randomUUID(), title:"new list", cards:[]};
    setBoardLists(prev => [...prev, newList])
  }

  return (
    <div className='flex items-start gap-3 overflow-x-auto p-3 h-screen'>
      {listItem}
      <div className='flex justify-center font-medium bg-blue-400 text-white p-2 rounded-2xl w-[20%] min-w-48 max-w-64'>
        <button onClick={handleOnclick}>+ Add another list</button>
      </div>
    </div>
  )
}