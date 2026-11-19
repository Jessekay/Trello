import { useState } from 'react';
import List from './List'
export default function Board() {
  const [boardLists, setBoardLists] = useState([])


  const listItem = boardLists.map(list => (
    <List key={list.id} title={list.title} cards={list.cards}/>
  ))

  const handleOnclick = () => {
    const newList = { id:crypto.randomUUID(), title:"new list", cards:[]};
    setBoardLists(prev => [...prev, newList])
  }

  return (
    <div className='flex items-start gap-3 overflow-x-auto p-3'>
      {listItem}
      <div className='flex justify-center text-1xl bg-amber-50 text-black p-2 rounded-2xl w-[20%] min-w-48 max-w-64'>
        <button onClick={handleOnclick}>+ Add another list</button>
      </div>
    </div>
  )
}