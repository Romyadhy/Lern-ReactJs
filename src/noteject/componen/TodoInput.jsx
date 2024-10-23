import React from 'react'

export default function TodoInput() {
  return (
    <div className='flex flex-row tex-center justify-center'>
      <input className='p-2 rounded-md border-2 border-gray-700 pe-10 shadow-sm sm:text-sm' type="text" placeholder='enter what u must to do.....' />
      <button className='m-2 bg-gray-800 text-white p-2 rounded-md hover:bg-gray-600' type='submit'>add</button>
    </div>
  );
}
