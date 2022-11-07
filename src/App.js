import React from 'react';
import './App.css';
import Input from './components/input';
import TodoItem from './components/todoItem';

import { useSelector } from 'react-redux';
import {selectTodoList} from './features/todoSlice'
function App() {

  const todoList = useSelector(selectTodoList);
  return (
    <div className='app'>
      {/* todo list */}
      <div className='app_container'>
        <div className='app_todoContainer'>
          {todoList.map((item) => (
            <TodoItem todoItem={item} />
          ))}
        </div>
        <Input />
      </div>
    </div>
  );
}

export default App;
