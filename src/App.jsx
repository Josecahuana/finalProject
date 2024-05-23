import { BarImage } from './assets/components/BarImage'
import { Header } from './assets/components/Header'
import { SectionLocation } from './assets/components/SectionLocation'
import { SectionLinks } from './assets/components/SectionLinks'
import { Main } from './assets/components/Main'
import { BrowserRouter as Router } from 'react-router-dom'

import { useEffect, useState } from "react";
import data from './assets/components/data'

import './App.css'

export const App = () => {

  const [cart, setCart] = useState([]);

  const [searchProduct, setSearchProduct] = useState([]);

  const handleChangeCart = (value) => {
    const newValue = data.find(item => item.id === value);
    setCart(prevCart => [...prevCart, newValue]);
  }

  const handleChangeSearchProduct = (valueSearch) => {
    setSearchProduct(valueSearch)
  }

  
  useEffect(() => {
  }, [cart, searchProduct]);

  return (
    <Router>
      <>
        <BarImage />
        <Header cart={cart} data={data} handleChangeSearchProduct={handleChangeSearchProduct} />
        <SectionLocation />
        {/* <SectionLinks /> */}
        <Main handleChangeCart={handleChangeCart} searchProduct={searchProduct} />
      </>
    </Router>
  )
}

