import menu from './assets/img/menu.svg'
import project from './assets/img/project.jpeg'
import sneakers from './assets/components/data'
import imgNotFound from './assets/img/imgNotFound.svg'
import {Header} from './assets/components/Header'
import { SectionLocation } from './assets/components/SectionLocation'
import { SectionLinks } from './assets/components/SectionLinks'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { SneakerPage } from './assets/components/SneakerPage'
import { useState } from 'react'

import './App.css'
import { SearchProduct } from './assets/components/SearchProduct'


export const App = () => {

  const [view, setView] = useState(false);

  const handleChangeShow = (value) => {
    setView(value);
  }

  return (
    <Router>
      <>
        <Header />
        {/* <SectionLocation />
        <SectionLinks /> */}
        <main className={!view ? 'products__main' : 'products__main-change'}>
          <section className={!view ? 'products__options' : 'products__option-change'}>
            <div>
              <h2>Productos</h2>
              <b>Zapatillas</b>
            </div>
            <div>
              <p>Resultados</p>
            </div>
            <div >
              <h4>Marcas</h4>
              <input type="text" placeholder='Buscar' />
              <div>
                <SearchProduct sneakers={sneakers} />
              </div>
            </div>
          </section>
          <section className='products__list'>
            <header >
              <div>


              </div>
              <div>
                <div>

                </div>
                <div>

                </div>
              </div>
            </header>
            <section className={!view ? 'product' : 'Change'}>
              {
                !view ?
                  sneakers.map((sneaker) => {
                    return (
                      <Link key={sneaker.id} to={`/sneaker/${sneaker.id}`} onClick={() => handleChangeShow(true)} style={{ textDecoration: 'none' }}>
                        <div className='product__data'  >
                          <img src={sneaker.img && sneaker.img !== 'undefined' ? sneaker.img : imgNotFound} alt={`image of ${sneakers.img}`} />
                          <header>{sneaker.marca} </header>
                          <h3>{sneaker.nombre} </h3>
                          <p><b>Por:</b> {sneaker.empresa} </p>
                          <span>S/ {sneaker.precio}</span>
                          <button>Agregar al carrito</button>
                        </div>

                      </Link>
                    )
                  }) : <Routes>
                    <Route path='/sneaker/:id' element={<SneakerPage handleChangeShow={handleChangeShow} sneakers={sneakers} />} />
                  </Routes>
              }
            </section>
          </section>
        </main>
      </>
    </Router>
  )
}

