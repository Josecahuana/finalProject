import menu from './assets/img/menu.svg'
import project from './assets/img/project.jpeg'

import sneakers from './assets/components/data'

import './App.css'

export const App = () => {
  return (
    <>
      <header className='menu__header'>
        <div className='menu__'>
          <img src="" alt="" />
          <div>
            <b>Menú</b>
          </div>
        </div>
        <div>
          <input type="text" />
          <span>
            <img src="" alt="" />
          </span>
        </div>
        <div>
          <p>Hola, <b>Inia sesión</b></p>
          <p>Mis, <b>compras</b></p>
          <span>
            <img src="" alt="" />
          </span>
          <span>
            <img src="" alt="" />
            <span>0</span>
          </span>
        </div>
      </header>
      <section className='location'>
        <div className='location__city'>
          <span>
            <img src="" alt="" />
          </span>
          <p>Entrega en <span>UBICACION-CHANGE</span></p>
        </div>
        <div className='location__pay'>
          <span>Tarjeta CRM</span>
          <span>Venta Telefónica</span>
          <span>Ayuda</span>
        </div>
      </section>
      <section className='section__links'>
        <span>
          <img src="" alt="" />
        </span>
        <a href="#">Home</a>
      </section>

      <main className='products__main'>
        <section className='products__options'>
          <div>
            <h2>Productos</h2>
            <b>Zapatillas</b>
          </div>
          <div>
            <p>Resultados</p>
          </div>
          <div>

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
          <section className='product'>
            {
              sneakers.map((sneaker) => {
                return (
                  <div className='product__data'>
                  <p>{sneaker.marca} </p>
                  <p>{sneaker.nombre} </p>
                  <p>{sneaker.empresa} </p>
                  <p>{sneaker.precio}</p>
                  </div>
                )
              })
            }
          </section>
        </section>
      </main>

    </>
  )
}

