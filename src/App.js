import './App.css';

import { Routes, Route} from 'react-router-dom'

import { Navbar } from './components/Navbar/Navbar';
import { Home } from './pages/Home/Home';
import { Login } from './pages/Login/Login';
import { Signup } from './pages/Signup/Signup';
import { Todos } from  './pages/Todos/Todos';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/' element={<Home/>} />
        <Route path='/myTodos' element={<Todos/>}/>
      </Routes>
    </div>
  );
}

export default App;
