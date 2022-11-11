import React, { useEffect, useState } from 'react';

import { Addbar } from '../Addbar/Addbar';

import apiTodos from  '../../utils/api.utils';
import axios from 'axios';

import '../TodoList/TodoList.css'

export const TodoList = ({completed, title, _id}) => {
  const [todos, setTodos] = useState([]);
  const [checked, setChecked] = useState(completed);     //completed default é false, está lá no model da Api

  const handleChangeChecked = async (e) => {
    try {
      setChecked(e.currentTarget.checked);
      const itemTodo = {
        title,
        completed: e.currentTarget.checked,
      }
      await apiTodos.updateTodo(itemTodo, _id)
      await getMyAllTodos()
    } catch (error) {
      console.error(error, `Error on check`);
    }
  }

  const deleteOneTodo = async (_id) => {
    try {
      console.log('tentando deletar um todo')
      await axios.delete(`/todos/${_id}`)
      // await apiTodos.deleteTodo(_id);
      await getMyAllTodos();
    } catch (error) {
      console.error(error, `Error to delete this Todo`);
    }
  }

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
          <div key={todo._id} className='todo-list'>
            <div className='todo-list-item'>
              <input type="checkbox" checked={checked} onChange={handleChangeChecked}/>
              <span>{todo.title}</span>
              <div className='btn-todo-list'>
                <button onClick={() => deleteOneTodo()} >X</button>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
