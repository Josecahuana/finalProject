import sneakers from './data'
import { SearchProduct } from './SearchProduct'
import { Routes, Route, Link } from 'react-router-dom'
import imgNotFound from './dataImg/imgNotFound.svg'
import { SneakerPage } from './SneakerPage'
import { useState } from 'react'

export const Main = ({ handleChangeCart, searchProduct, input }) => {

    const [view, setView] = useState(false);

    const handleChangeShow = (value) => {
        setView(value);
    }

    const handleChangeSetCart = (value) => {
        handleChangeCart(value);
    }

    return (
        <>
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

                            // !view ?
                                sneakers.map((sneaker) => {
                                    return (
                                        <div key={sneaker.id} className='product__data'  >
                                            <Link className='link' to={`/sneaker/${sneaker.id}/${sneaker.nombre}`} onClick={() => handleChangeShow(true)}>
                                                <img src={sneaker.img && sneaker.img !== 'undefined' ? sneaker.img : imgNotFound} alt={`image of ${sneakers.img}`} />
                                                <header >{sneaker.marca} </header>
                                                <h3 >{sneaker.nombre} </h3>
                                                <p><b>Por:</b> {sneaker.empresa} </p>
                                                <span>S/ {sneaker.precio}</span>
                                            </Link>
                                            <button onClick={() => handleChangeSetCart(sneaker.id)}>Agregar al carrito</button>
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

