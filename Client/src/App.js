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
// import AuthProvider from './Context/AuthContext';
import Home from './Pages/Home';
import ForgotPassword from "./Pages/forgotPassword/ForgotPassword";
import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from './Context/AuthContext'

function App() {
  const [user, setUser] = useState({
    username: '',
  });

  const [data, setData] = useState();
  const { currentUser } = useAuth();

  const fetch_data = () => {
    axios.post('http://localhost:9002/', { message: 'GET_USER_INFO', id: currentUser.uid })
      .then(res => {
        setData(res.data)
      })
  }

  useEffect(() => {
    fetch_data();
  }, [])

  return (
    <BrowserRouter>
      {/* <AuthProvider> */}
      <Routes>
        <Route path='/login' element={<Login setUser={setUser} />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/register' element={<Register />} />
        <Route path='/' element={<SharedLayout user={user} data={data} />}>
          <Route index element={<Home data={data} />} />
        </Route>
      </Routes>
      {/* </AuthProvider> */}
    </BrowserRouter>
  );
}


export default App;