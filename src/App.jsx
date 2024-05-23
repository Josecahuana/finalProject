import { Home } from './assets/components/Home';
import { Menu } from './assets/components/Menu';
import { SneakerPage } from './assets/components/SneakerPage';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { useState } from 'react';
import sneakers from './assets/components/data'

import './App.css'

export const App = () => {

  const [view, setView] = useState(false);

  const handleChangeShow = (value) => {
    setView(value);
}

// const handleChangeSetCart = (value) => {
//     handleChangeCart(value);
// }

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Menu' element={<Menu />} />
        <Route path='/sneaker/:id/:nombre' element={<SneakerPage handleChangeShow={handleChangeShow} sneakers={sneakers} />} />
      </Routes>
    </Router>
  )
}

