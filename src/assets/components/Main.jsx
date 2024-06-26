import sneakers from './data'
import { SearchProduct } from './SearchProduct'
import { Routes, Route, Link } from 'react-router-dom'
import imgNotFound from './dataImg/imgNotFound.svg'
import { SneakerPage } from './SneakerPage'
import { useEffect, useState } from 'react'

export const Main = ({ handleInsertCart, filterText, filteredInput }) => {

    const [products, setProducts] = useState(sneakers);
    const [vacio, setVacio] = useState('');

    useEffect(() => {
        if (filterText === '') {
            setProducts(sneakers);
        } else {
            setProducts(filteredInput);
        }
    }, [filterText, filteredInput]);

    const handleChangeShow = (value) => {
        setView(value);
    }

    const handleChangeSetCart = (value) => {
        handleInsertCart(value);
    }

    const buttonFilterProdcut = (value) => {
        setProducts(sneakers);
        const buttonSelected = sneakers.filter(product => product.marca === value);
        setProducts(buttonSelected)
    }

    const handleViewAll = () => {
        setProducts(sneakers);
    }

    useEffect(()=>{
        const vacio = products.length === 0;
        (vacio) ? setVacio('Producto no encontrado') : setVacio('');
    }, [vacio])

    return (
        <>
            <main className='products__main'>
                <section className='products__options'>
                    <div>
                        <h2>Productos</h2>
                        <b>Zapatillas</b>
                    </div>
                    <div>
                        <p>Resultados</p>
                    </div>
                    <div >
                        <h4>Marcas</h4>
                        <div className='marks'>
                            <SearchProduct
                                sneakers={sneakers}
                                buttonFilterProdcut={buttonFilterProdcut}
                                handleViewAll={handleViewAll}
                            />
                        </div>
                    </div>
                </section>
                <section className='products__list'>
                    <section className='product'>
                        { vacio && <p>{vacio}</p> }
                        {
                         products.map((sneaker) => {
                                return (
                                    <div key={sneaker.id} className='product__data'  >
                                        <Link className='link' to={`/Menu/${sneaker.id}/${sneaker.nombre}`} onClick={() => handleChangeShow(true)}>
                                            <img src={sneaker.img && sneaker.img !== 'undefined' ? sneaker.img : imgNotFound} alt={`image of ${sneakers.img}`} />
                                            <header >{sneaker.marca} </header>
                                            <h3 >{sneaker.nombre} </h3>
                                            <p><b>Por:</b> {sneaker.empresa} </p>
                                            <span>S/ {sneaker.precio}</span>
                                        </Link>
                                            <button onClick={() => handleChangeSetCart(sneaker.id)} >Agregar al carrito</button>

                                    </div>
  
                                )
                            }) 
                        }

                    </section>

                    <Routes>
                        <Route path='/Menu/:id/:nombre' element={<SneakerPage handleChangeShow={handleChangeShow} sneakers={sneakers} />} />
                    </Routes>
                </section>

            </main>

        </>
    )
}
