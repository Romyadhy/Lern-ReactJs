import React from 'react'

export default function TodoCard(props) {

  const {children, handleDeleteValue, index} = props
  

  return (
    <li className='m-4 flex bg-gray-300 rounded-md p-4'> 
      {children}
      <div className='mx-2'>
        <button>
          <i className=" mx-3 fa-solid fa-pen-to-square"></i>
        </button>
        <button onClick={() => {
          handleDeleteValue(index)
        }}>
          <i className=" fa-solid fa-trash"></i>
        </button>
      </div>
    </li>
    // <h1>helo</h1>
  );
}
