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
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" /></svg>
            <b>Menú</b>
          </div>
        </div>
        <div>
          <input type="text" />
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" /></svg>
          </span>
        </div>
        <div>
          <p>Hola, <b>Inia sesión</b></p>
          <p>Mis, <span><b>compras span</b><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" /></svg></span></p>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" /></svg>
          </span>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z" /></svg>
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
                  <div className='product__data' onClick={()=> handleClick()} >
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

