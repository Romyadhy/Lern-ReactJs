import React from 'react'

export default function TodoCard(props) {

  const {children} = props
  

  return (
    <li className='m-4 flex bg-gray-300 rounded-md p-4'> 
      {children}
      <div className='mx-2'>
        <i className="cursor-pointer mx-3 fa-solid fa-pen-to-square"></i>
        <i className="cursor-pointer fa-solid fa-trash"></i>
      </div>
    </li>
    // <h1>helo</h1>
  );
}
