import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/login';
import  Home  from './components/Home';
import SignUp from './components/SignUp';



function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<ProductedRoute><Home /></ProductedRoute>} />
        <Route path='/users/login' element={<Login />} />
        <Route path='/users/signup' element={<SignUp/>} />
      </Routes>
    </div>
  );
}

function ProductedRoute({ children }) {
  const isAuth = localStorage.getItem("token");
  // console.log(isAuth);
  return isAuth ? children : <Navigate replace to={"/users/login"} />;
}

export default App;
