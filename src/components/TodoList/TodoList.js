import React, { useEffect, useState } from 'react';

import { Addbar } from '../Addbar/Addbar';

import apiTodos from  '../../utils/api.utils';

export const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const getMyAllTodos = async () => {
    try {
      const data = await apiTodos.getTodos();
      setTodos(data)
    } catch (error) {
      console.log(error, `Error to connect to api`)
    }
  }

  useEffect(() => {
    getMyAllTodos()
  }, [])

  return (
    <div>
      <h1>My Todos</h1>
      <Addbar getMyAllTodos={getMyAllTodos}/>
      {todos.map((todo) => {
        return (
          <div key={todo._id}>
            <input type="checkbox" />
            <span>{todo.title}</span>
            <button>X</button>
          </div>
        )
      })}
    </div>
  )
}
