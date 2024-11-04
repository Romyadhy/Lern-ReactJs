import React from 'react'
import TodoCard from './TodoCard';

export default function TodoList(props) {
  const {items} = props
  return (
    <ul className='m-4 p-2'> 
      {items.map((item, ItemsIndex) => {
        return (
          <TodoCard {...props} key={ItemsIndex} index={ItemsIndex}>
            <p className=''>{item}</p> 
          </TodoCard>
        );
      })}
    </ul>
  )
}
