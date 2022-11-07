import React, { useState } from 'react';
import './input.css';

import { useDispatch } from 'react-redux';
import { saveTodo } from '../features/todoSlice';

const Input = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const inputChangeHandler = (e) => {
    const inputValue = e.target.value;
    setInput(inputValue);
  };

  const addTodo = () => {
    console.log(`Adding ${input}`);

    dispatch(
      saveTodo({
        item: input,
        done: false,
        id: Date.now(),
      })
    );
  };
  return (
    <div className='input'>
      <input
        type='text'
        name=''
        id=''
        value={input}
        onChange={inputChangeHandler}
      />
      <button onClick={addTodo}>Add!</button>
    </div>
  );
};

export default Input;
