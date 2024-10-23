import React from 'react'
// import TodoCard from './componen/TodoCard'
import TodoInput from './componen/TodoInput'
import TodoList from './componen/TodoList';

export default function Note() {
  

  return (
    <>
    <main className='min-h-screen'>
      <h1 className='text-center font-bold text-4xl m-4 '>Todo List</h1>
      <TodoInput />
      <TodoList />
    </main>
    </>
  )
}
