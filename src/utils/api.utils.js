import axios from 'axios';

class Api{
    constructor() {
        this.api = axios.create({
            baseURL: "http://localhost:5000/"
        })

        this.api.interceptors.request.use(
            (config) => {
                const token = localStorage.getItem('token')
                if(token){
                    config.headers = {
                        Authorization: `Bearer ${token}`
                    }
                }
                return config
            },
            (error) => {
                console.log(error)
            }
        )

        this.api.interceptors.response.use(
            (response) => response,
            (error) => {
                if(error.response.status === 401){
                    localStorage.removeItem('token')
                }
                throw error
            }
        )
    }

    //adicionar um Todo
    addTodo = async (title) => {
        try {
            const { data } = await this.api.post('/todos', {title});
            console.log(data)
            return data; 
        } catch (error) {
            console.log(error, `Could not add a new Todo`)
        }
    }

    //pegar all Todos
    getTodos = async () => {
        try {
            const { data } = await this.api.get('/todos');
            console.log(data)
            return data;
        } catch (error) {
            console.log(error, `Could not load the Todos`)
        }
    }

    //atualizar um Todo
    updateTodo = async (id, todo) => {
        try {
            const { data } = await this.api.put(`/todos/${id}`, todo);
            return data
        } catch (error) {
            console.log(error, `Could not update this Todo`)
            
        }
    }

    //deletar um Todo
    deleteTodo = async (id) => {
        try {
            await this.api.delete(`/todos/${id}`)
        } catch (error) {
            console.log(error, `Could not delete this Todo`)
        }
    }

    //login
    login = async (loginInfo) => {
        try {
            const { data } = await this.api.post('/auth/login', loginInfo)
            localStorage.setItem('token', data.token)
            // localStorage.setItem('user', JSON.stringify(data.user))
            return data
        } catch (error) {
            throw error.response;
        }
    }

    //signup
    signup = async (signupInfo) => {
        try {
            const { data } = await this.api.post('/auth/signup', signupInfo)
            return data
        } catch (error) {
            throw error.response;
        }
    }

}

export default new Api();