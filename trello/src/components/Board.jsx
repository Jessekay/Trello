import { useState } from 'react';
import List from './List'
export default function Board() {
  const boardLists = [
    {
      id: "l1",
      title: "To do",
      cards: [
        { id: "c1", text: "Toggling state" },
        { id: "c2", text: "complex state arrays" },
      ],
    },
    {
      id: "l2",
      title: "Doing",
      cards: [{ id: "c3", text: "Trello cloning" }],
    },
  ];

  const listItem = boardLists.map(list => (
    <List key={list.id} title={list.title} cards={list.cards}/>
  ))

  return (
    <div className='flex items-start gap-3 overflow-x-auto p-3'>
      {listItem}
    </div>
  )
}