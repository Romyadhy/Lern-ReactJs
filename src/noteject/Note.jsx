import React, { useState, useEffect } from 'react';
// import TodoCard from './componen/TodoCard'
import TodoInput from './componen/TodoInput';
import TodoList from './componen/TodoList';

export default function Note() {
  const [items, setItems] = useState([]);
  const [todoValue, setTodoValue] = useState('');

  function persisData(newList) {
    localStorage.setItem('items', JSON.stringify({ items: newList }));
  }

  function hendleAddValue(newItem) {
    const newItemsList = [...items, newItem];
    setItems(newItemsList);
    persisData(newItemsList); // Simpan ke localStorage setelah menambahkan item
  }

  function handleDeleteValue(index) {
    const newItemsList = items.filter((_, IndexItem) => IndexItem !== index);
    setItems(newItemsList);
    persisData(newItemsList); // Simpan ke localStorage setelah menghapus item
  }

  function handleEditValue(index) {
    const itemToBeEdited = items[index];
    setTodoValue(itemToBeEdited); // Set nilai item yang diedit ke input
    handleDeleteValue(index); // Hapus item yang sedang diedit dari list
  }

  useEffect(() => {
    const localItems = localStorage.getItem('items');
    if (localItems) {
      const parsedItems = JSON.parse(localItems).items;
      setItems(parsedItems); // Set data dari localStorage ke state items
    }
  }, []);

  return (
    <>
      <main className='min-h-screen'>
        <h1 className='text-center font-bold text-4xl m-4'>Todo List</h1>
        <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} hendleAddValue={hendleAddValue} />
        <TodoList handleDeleteValue={handleDeleteValue} items={items} handleEditValue={handleEditValue} />
      </main>
    </>
  );
}
