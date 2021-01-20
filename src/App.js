import React, { useState } from 'react';
import './App.css';
import ToDo from './components/ToDo'
import ToDoView from './components/ToDoView'

function App() {
  const [list, setList] = useState([]);
  const updateList = (newListItem) => {
    setList([...list, newListItem]);
  }
  const deleteList = (itemDelete) => {
    const newList = list.filter(!list.includes(itemDelete))
    setList([...newList])
  }
  return (
    <div className="App">
      <ToDo onNewList={updateList} />
      <ToDoView list={list} onListDelete={deleteList} />
    </div>
  );
}

export default App;
