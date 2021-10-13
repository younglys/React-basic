import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.scss';

const TodoList = () => {
  return (
    <div class="toDoList">
      <TodoListItem />
      <TodoListItem />
      <TodoListItem />
      <TodoListItem />
      <TodoListItem />
    </div>
  );
};

export default TodoList;
