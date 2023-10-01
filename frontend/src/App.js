import './App.css';
import { BrowserRouter, Routes, Route, AppProvider } from "react-router-dom";
import Home from './components/Home';
import Nabvar from './components/Nabvar';
import Login from './components/Login';
import Registration from './components/Registration';
import AddBook from './components/AddBook';
import GenerFiction from './components/GenerFiction';
import Literary from './components/Literary';
import MainStream from './components/MainStream';
function App() {
  return (

    <BrowserRouter>
      <Nabvar />
      <Routes>
        <Route element={<Home />} path='/' />
        {/* <Route element={<Login />} path='/login' /> */}
        <Route element={<GenerFiction />} path='generfiction' />
        <Route element={<Literary />} path='/literary' />
        <Route element={<MainStream />} path='/mainstream' />
        <Route element={<Login />} path='/login' />
        <Route element={<Registration />} path='/s' />
        <Route element={<AddBook />} path='/addbook' />
      </Routes>

    </BrowserRouter>
  );
}

export default App;


