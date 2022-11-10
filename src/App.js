import './App.css';

import { Routes, Route} from 'react-router-dom'

import { Navbar } from './components/Navbar/Navbar';
import { Home } from './pages/Home/Home';
import { Login } from './pages/Login/Login';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/' element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;
