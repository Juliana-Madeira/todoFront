import React, { useState } from 'react';
import apiTodos from '../../utils/api.utils';

export const TodoItem = ({ title, completed, _id, getAllTodos}) => {

    const [checked, setChecked] = useState(completed);
 
    const handleChecked = async (e) => {
        try {
            setChecked(e.currentTarget.checked);    //precisamos mudar o valor do checked, false ou true
            const itemTodo = {                         //armazena o item do Todo que será setado e atualizado
                title,
                completed: e.currentTarget.checked
            }
            await apiTodos.updateTodo(_id, itemTodo)
            await getAllTodos();
        } catch (error) {
            console.error(error, `Error on check`);
        }
    }

    const deleteItem = async (id) => {
        try {
            await apiTodos.deleteTodo(id);
            await getAllTodos();
        } catch (error) {
            console.error(error, `Error to delete the Todo`);
        }
    }

  return (
    <div>
        <input type="checkbox" onChange={handleChecked} checked={checked}/>
        <h3>{title}</h3>
        <button onClick={() => deleteItem(_id)}>X</button>
    </div>
  )
}
