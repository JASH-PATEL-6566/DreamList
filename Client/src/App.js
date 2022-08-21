import { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import SharedLayout from './Pages/SharedLayout';
import Login from './Pages/login/Login';
// import Navbar from './Components/Navbar/Navbar'
import Register from './Pages/register/Register';
import Home from './Pages/Home';

function App() {
  const [user, setUser] = useState(true);
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/' element={<SharedLayout user={user} setUser={setUser} />}>
          <Route index element={<Home user={user} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


export default App;
