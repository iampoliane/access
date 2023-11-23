import './App.css';
import { Dashboard } from './pages/Dashboard';
import { Header } from './components/Header';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Component } from 'react';
import { Details } from './pages/Details';

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Dashboard/>}/>
      <Route path='/:id' element={<Details/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
