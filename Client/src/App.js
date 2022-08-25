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
import AuthProvider from './Context/AuthContext';
import Home from './Pages/Home';
import ForgotPassword from "./Pages/forgotPassword/ForgotPassword";

function App() {
  // const [user, setUser] = useState({});
  // console.log(user);
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
          <Route path='/register' element={<Register />} />
          <Route path='/' element={<SharedLayout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}


export default App;
