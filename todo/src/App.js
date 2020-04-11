import React, { useReducer, useState, useEffect } from 'react';
import logo from './logo.svg';
import {initialTodoList, reducer} from './components/reducer';
import './App.css';

// Todolist
import TodoList from "./components/todolist";

function App() {
  const [todoState, dispatch] = useReducer(reducer, initialTodoList);
  const [newTaskName, setNewTaskName] = useState('');
  const handleChange = (e) => {
    e.preventDefault();
    setNewTaskName(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_ITEM", payload: newTaskName});
  }
  return (
    <div className="App">
      <TodoList list={todoState} />
      <form onSubmit={handleSubmit}>
        <label>Add New Item</label>
        <input value={newTaskName} onChange={handleChange}></input>
      </form>
    </div>
  );
}

export default App;
