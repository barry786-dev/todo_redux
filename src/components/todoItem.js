import React from 'react';
import './todoItem.css';
import Checkbox from '@mui/material/Checkbox';

import { useDispatch } from 'react-redux';
import { setCheck } from '../features/todoSlice';

const TodoItem = (props) => {
  const { item: name, done, id } = props.todoItem;
  const dispatch = useDispatch();
  const handleCheck = () => {
    dispatch(setCheck(id))
  };
  return (
    <div className='todoItem'>
      <Checkbox
        checked={done}
        color='primary'
        onChange={handleCheck}
        inputProps={{ 'aria-label': 'controlled' }}
      />
      <p className={done && 'todoItem--done'}>{name}</p>
    </div>
  );
};

export default TodoItem;
