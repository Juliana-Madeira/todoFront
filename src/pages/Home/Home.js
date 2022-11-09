import React, { useEffect, useState } from 'react';

import { TodoList } from '../../components/TodoList/TodoList';
import { Addbar } from '../../components/Addbar/Addbar';

import apiTodos from '../../utils/api.utils';

export const Home = () => {
    const [todos, setTodos] = useState([]);

    const getAllTodos = async () => {
        try {
            const data = await apiTodos.getTodos();
            setTodos(data)
        } catch (error) {
            console.log(error, `Error to connect to api`)
        }
    }

    useEffect(() => {
        getAllTodos()
    }, [])
    

  return (
    <div>
        <Addbar getAllTodos={getAllTodos}/>
        <TodoList todos={todos} getAllTodos={getAllTodos}/>
    </div>
  )
}
