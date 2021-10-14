import React from 'react';
import {
  MdCheckBox,
  MdCheckBoxOutlineBlank,
  MdOutlineRemoveCircleOutline,
} from 'react-icons/md';
import classnames from 'classnames';
import './TodoListItem.scss';

const TodoListItem = ({ todo, onRemove }) => {
  const { id, text, checked } = todo;

  return (
    <div className="toDoListItem">
      <div className={classnames('checkbox', { checked })}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{text}</div>
      </div>
      <div className="remove" onClick={() => onRemove(id)}>
        <MdOutlineRemoveCircleOutline />
      </div>
    </div>
  );
};

export default TodoListItem;
