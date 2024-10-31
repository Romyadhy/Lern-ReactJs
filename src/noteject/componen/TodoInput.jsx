import React, { useState } from 'react'

export default function TodoInput(props) {
  const {hendleAddValue} = props
  const [todoValue, setTodoValue] = useState('')

  return (
    <div className='flex flex-row tex-center justify-center'>
      <input value={todoValue} onChange={(e) => {
        setTodoValue(e.target.value);
      }} className='p-2 rounded-md border-2 border-gray-700 pe-10 shadow-sm sm:text-sm' type="text" placeholder='enter what u must to do.....' />
      <button onClick={() => {
        hendleAddValue(todoValue)
        setTodoValue('')
      }}
         className='m-2 bg-gray-800 text-white p-2 rounded-md hover:bg-gray-600' type='submit'>add</button>
    </div>
  );
}
