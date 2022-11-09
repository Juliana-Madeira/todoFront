import React, { useState } from 'react';
import apiTodos from '../../utils/api.utils'

import '../Addbar/Addbar.css';

export const Addbar = ({getAllTodos}) => {
    const [title, setTitle] = useState('');

    const handleChangeInput = (e) => {
        setTitle(e.currentTarget.value)
    }

    const handleAddTodo = async () => {
        try {
            await apiTodos.addTodo(title)
            setTitle('')
            await getAllTodos()
        } catch (error) {
            console.log(error, `Could not add a new Todo`)
        }
    }

  return (
    <form className='form'>
        <input 
            type="text" 
            placeholder='Digite o Todo...' 
            value={title} 
            onChange={handleChangeInput}/>
        <button type='submit' onClick={handleAddTodo}>Add Todo</button>
    </form>
  )
}