import React from 'react'
import TodoCard from './TodoCard';

export default function TodoList() {
    const items = [
        "lordVrax",
        "hattori",
        "hattori",
        "hattori"
      ];
  return (
    <ul className='m-4 p-2 '> 
      {items.map((item, ItemsIndex) => {
        return (
          <TodoCard key={ItemsIndex}>
            <p className=''>{item}</p> 
          </TodoCard>
        );
      })}
    </ul>
  )
}
