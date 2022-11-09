import React from 'react';
import { TodoItem } from '../TodoItem/TodoItem.js';

export const TodoList = ({todos, getAllTodos}) => {
  return (
    <div>
        {todos.map(todo => <TodoItem key={todo._id} {...todo} getAllTodos={getAllTodos}/>)}
    </div>
  )
}
