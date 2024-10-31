import React, { useState } from 'react'
// import TodoCard from './componen/TodoCard'
import TodoInput from './componen/TodoInput'
import TodoList from './componen/TodoList';

export default function Note() {
  // const items = [
  //   "lordVrax",
  //   "hattori",
  //   "hattori",
  //   "hattori"
  // ];

  const [items, setItems] = useState([
    // "lordVrax",
    // "hattori",
    // "hattori",
    // "hattori"
  ])

  function hendleAddValue(newItems) {
    const newItemsList = [...items, newItems]
    setItems(newItemsList)
  }

  function handleDeleteValue(index) {
    const newItemsList = items.filter((item, IndexItem) => {
      return IndexItem !== index
    })
    setItems(newItemsList)
  }

  return (
    <>
    <main className='min-h-screen'>
      <h1 className='text-center font-bold text-4xl m-4 '>Todo List</h1>
      <TodoInput hendleAddValue={hendleAddValue} />
      <TodoList handleDeleteValue={handleDeleteValue} items={items} />
    </main>
    </>
  )
}
