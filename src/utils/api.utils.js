import axios from 'axios';

class Api{
    constructor() {
        this.api = axios.create({
            baseURL: "http://localhost:5000/todos"
        })
    }

    //adicionar um Todo
    addTodo = async (title) => {
        try {
            const { data } = await this.api.post('/todos', { title });
            console.log(data)
            return data; 
        } catch (error) {
            console.log(error, `Could not add a new Todo`)
        }
    }

    //pegar all Todos
    getTodos = async () => {
        try {
            const { data } = await this.api.get('/');
            console.log(data)
            return data;
        } catch (error) {
            console.log(error, `Could not load the Todos`)
        }
    }

    //atualizar um Todo
    updateTodo = async (id, todo) => {
        try {
            const { data } = await this.api.put(`/${id}`, todo);
            return data
        } catch (error) {
            console.log(error, `Could not update this Todo`)
            
        }
    }

    //deletar um Todo
    deleteTodo = async (id) => {
        try {
            await this.api.delete(`/${id}`)
        } catch (error) {
            console.log(error, `Could not delete this Todo`)
        }
    }

}

export default new Api();