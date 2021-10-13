import React from 'react';
import {
  MdCheckBoxOutlineBlank,
  MdOutlineRemoveCircleOutline,
} from 'react-icons/md';
import './TodoListItem.scss';

const TodoListItem = () => {
  return (
    <div className="toDoListItem">
      <div className="checkbox">
        <MdCheckBoxOutlineBlank />
        <div className="text">할 일</div>
      </div>
      <div className="remove">
        <MdOutlineRemoveCircleOutline />
      </div>
    </div>
  );
};

export default TodoListItem;
