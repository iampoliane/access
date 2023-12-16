import './App.css';
import { Dashboard } from './pages/Dashboard';
import { Header } from './components/Header';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Details } from './pages/Details';
import { Form } from './pages/Form';
import { Login } from './pages/Login';

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Dashboard/>}/>
      <Route path='/:id' element={<Details/>}/>
      <Route path='/form' element={<Form/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
    </BrowserRouter>
  );
  }
export default App;
