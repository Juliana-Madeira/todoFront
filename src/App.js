import './App.css';

import { Routes, Route} from 'react-router-dom'

import { Navbar } from './components/Navbar/Navbar';
import { Home } from './pages/Home/Home';
import { Login } from './pages/Login/Login';
import { Signup } from './pages/Signup/Signup';
import { TodoList } from './components/TodoList/TodoList';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/todos' element={<TodoList/>} />
      </Routes>
    </div>
  );
}

export default App;
