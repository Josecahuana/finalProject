import table from '../img/tabla.jpg'
import { Link, useParams } from 'react-router-dom';
import './SneakerPage.css'
import { useState } from 'react';

export const SneakerPage = ({ handleChangeShow, sneakers }) => {

    const [showImage, setShowImage] = useState(false)
    const { id, nombre } = useParams();

    const newData = sneakers.find(sneaker => sneaker.id === +id)

    const handleClick = (value) => {
        handleChangeShow(value)
    }

    const handleClickTable = () => {
        setShowImage(!showImage)
    }

    return (
        <>
            <div className="container" onClick={handleClickTable}>
                <div className='sneaker__div'>
                    <Link to={'/Menu'}>
                        <button className='sneaker__back' type='button' onClick={() => handleClick(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" /></svg>
                        </button>
                    </Link>
                    <section className="sneaker__img">
                        <img className="sneaker__shoes" src={newData.img !== 'undefined' ? newData.img : ''} alt="" />

                    </section>
                    <section className='sneaker__data'>
                        <div className='data'>
                            <div className='data__marca'>
                                <b>{newData.marca}</b>
                                <p>Codigo</p>
                            </div>
                            <h3>{newData.nombre} </h3>
                        </div>
                        <section className='info__grid'>
                            <div className='sizes'>
                                <header className='sizes__header'>
                                    <p>Vendido por <a href="#">{newData.empresa}</a>  </p>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#434343"><path d="M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z" /></svg></span>
                                </header>
                                <div className='sizes__div'>
                                    <b>Selecciona Talla</b>
                                    <div className='sizes__table'>
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#999999"><path d="M160-240q-33 0-56.5-23.5T80-320v-320q0-33 23.5-56.5T160-720h640q33 0 56.5 23.5T880-640v320q0 33-23.5 56.5T800-240H160Zm0-80h640v-320H680v160h-80v-160h-80v160h-80v-160h-80v160h-80v-160H160v320Zm120-160h80-80Zm160 0h80-80Zm160 0h80-80Zm-120 0Z" /></svg>
                                        </span>
                                        <span className='table__span' onClick={handleClickTable}>Tabla de tallas </span>
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#434343"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" /></svg>
                                        </span>
                                    </div>
                                </div>
                                <div className='sizes__button'>
                                    <button type='button'>35.5</button>
                                    <button type='button'>36</button>
                                    <button type='button'>37</button>
                                    <button type='button'>38</button>
                                    <button type='button'>38.5</button>
                                    <button type='button'>39</button>
                                    <button type='button'>40</button>
                                </div>
                                <div className='sizes__shipment'>
                                    <div className='shipment'>
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#065101"><path d="M240-200q-50 0-85-35t-35-85H40v-360q0-33 23.5-56.5T120-760h560l240 240v200h-80q0 50-35 85t-85 35q-50 0-85-35t-35-85H360q0 50-35 85t-85 35Zm360-360h160L640-680h-40v120Zm-240 0h160v-120H360v120Zm-240 0h160v-120H120v120Zm120 290q21 0 35.5-14.5T290-320q0-21-14.5-35.5T240-370q-21 0-35.5 14.5T190-320q0 21 14.5 35.5T240-270Zm480 0q21 0 35.5-14.5T770-320q0-21-14.5-35.5T720-370q-21 0-35.5 14.5T670-320q0 21 14.5 35.5T720-270ZM120-400h32q17-18 39-29t49-11q27 0 49 11t39 29h304q17-18 39-29t49-11q27 0 49 11t39 29h32v-80H120v80Zm720-80H120h720Z" /></svg>
                                        </span>
                                        <a href="#">Ver envio a domicilio</a>
                                    </div>
                                    <div className='shipment'>
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#065101"><path d="M841-518v318q0 33-23.5 56.5T761-120H201q-33 0-56.5-23.5T121-200v-318q-23-21-35.5-54t-.5-72l42-136q8-26 28.5-43t47.5-17h556q27 0 47 16.5t29 43.5l42 136q12 39-.5 71T841-518Zm-272-42q27 0 41-18.5t11-41.5l-22-140h-78v148q0 21 14 36.5t34 15.5Zm-180 0q23 0 37.5-15.5T441-612v-148h-78l-22 140q-4 24 10.5 42t37.5 18Zm-178 0q18 0 31.5-13t16.5-33l22-154h-78l-40 134q-6 20 6.5 43t41.5 23Zm540 0q29 0 42-23t6-43l-42-134h-76l22 154q3 20 16.5 33t31.5 13ZM201-200h560v-282q-5 2-6.5 2H751q-27 0-47.5-9T663-518q-18 18-41 28t-49 10q-27 0-50.5-10T481-518q-17 18-39.5 28T393-480q-29 0-52.5-10T299-518q-21 21-41.5 29.5T211-480h-4.5q-2.5 0-5.5-2v282Zm560 0H201h560Z" /></svg>
                                        </span>
                                        <a href="#">Ver retiro en tienda</a>
                                    </div>
                                </div>
                            </div>
                            <div className='price'>
                                <header className='descount'>
                                    <div className='descount__div'>
                                        <p>S/ {newData.precio}</p>
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#434343"><path d="M718-313 604-426l57-56 57 56 141-141 57 56-198 198ZM440-501Zm0 381L313-234q-72-65-123.5-116t-85-96q-33.5-45-49-87T40-621q0-94 63-156.5T260-840q52 0 99 22t81 62q34-40 81-62t99-22q81 0 136 45.5T831-680h-85q-18-40-53-60t-73-20q-51 0-88 27.5T463-660h-46q-31-45-70.5-72.5T260-760q-57 0-98.5 39.5T120-621q0 33 14 67t50 78.5q36 44.5 98 104T440-228q26-23 61-53t56-50l9 9 19.5 19.5L605-283l9 9q-22 20-56 49.5T498-172l-58 52Z" /></svg>
                                        </span>
                                    </div>
                                    <p className='descount__p'>S/ {+newData.precio + 100}</p>
                                </header>
                                <div className='amount'>
                                    <div>
                                        <button type='button'> - </button>
                                        <p>1</p>
                                        <button type='button'> +</button>
                                    </div>
                                    <span>Máximo 10 unidades</span>
                                </div>
                                <button className='button__options' type='button'>Agregar al carrito</button>
                            </div>
                        </section>
                    </section>
                </div>
                {showImage && (
                    <img
                        className='table__shoes'
                        src={table}
                        alt="Table de talla"
                    />
                )}
            </div>
        </>
    )
}
