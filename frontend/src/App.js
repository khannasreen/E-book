import './App.css';
import { BrowserRouter, Routes, Route, AppProvider } from "react-router-dom";
import Home from './components/Home';
import Nabvar from './components/Nabvar';
import Login from './components/Login';
import Registration from './components/Registration';

function App() {
  return (

    <BrowserRouter>
      <Nabvar />
      {/* <Home/> */}
      <Routes>
        <Route element={<Home />} path='/' />
        <Route element={<Login />} path='login' />
        <Route element={<Registration />} path='registration' />
      </Routes>

    </BrowserRouter>
  );
}

export default App;


