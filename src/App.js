import React, { useState } from 'react';
import './App.css';
import ToDo from './components/ToDo'
import ToDoView from './components/ToDoView'

function App() {
  const [list, setList] = useState([]);
  const updateList = (newListItem) => {
    setList([...list, newListItem]);
  }
  const deleteList = (itemDelete,i) => {
    const newList = list.filter(itemDelete => list.indexOf(itemDelete) !== i)
    setList([...newList])
  }
  return (
    <div className="App">
      <ToDo onNewList={updateList} />
      {/* <ToDoView list={list} /> */}
      <ToDoView list={list} onListDelete={deleteList} />
    </div>
  );
}

export default App;
