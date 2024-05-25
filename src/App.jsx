import { Home } from './assets/components/Home';
import { Menu } from './assets/components/Menu';
import { SneakerPage } from './assets/components/SneakerPage';
import { Login } from './assets/components/Login';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { useState } from 'react';
import sneakers from './assets/components/data'
import './App.css'
import BuyProduct from './assets/components/BuyProduct';

export const App = () => {

  const handleChangeShow = (value) => {
    setView(value);
  }

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Menu/*' element={<Menu />} />
        <Route path='/Menu/:id/:nombre' element={<SneakerPage handleChangeShow={handleChangeShow} sneakers={sneakers} />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/BuyProduct' element={<BuyProduct />} />
      </Routes>
    </Router>
  )
}

