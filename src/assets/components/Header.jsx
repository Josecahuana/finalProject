import { InputSearch } from "./InputSearch"
import faketitle from '../img/faketitle.jpg'
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import data from './data';
export const Header = ({ cart, handleDeleteCart, handleIncrementCant, handleDecrementCant, filterText, handleFilterChange }) => {

    const location = useLocation();
    const { state } = location;

    const [cartLocal, setCartLocal] = useState(cart);

    const username = state?.user?.userName || 'Iniciar sesión';

    const handleClickDelete = (id) => {
        handleDeleteCart(id);
    }

    useEffect(() => {
        if (username) {
            try {
                const shopping = state?.user?.shopping;
                const productLocalUser = data.filter(producto => {
                    return shopping.some(item => item.id === producto.id);
                });
                setCartLocal(productLocalUser);
            } catch {
                console.log('error');
            }

        } else {
            console.log('wow');
        }
    }, [])
    return (
        <>
            <header className='menu__header'>
                <Link to='/' className='menu__option' >
                    <img src={faketitle} alt="img fakeshop" />
                </Link>
                <InputSearch filterText={filterText} handleFilterChange={handleFilterChange} />
                <div className="menu__sesion">
                    {username === 'Iniciar sesión' ?
                        <p>Hola, <Link to="/Login"> <b>{username}</b> </Link></p> :
                        <p>Hola <b>{username}</b></p>
                    }
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" /></svg>
                    </span>
                    <span className="sesion__cart">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z" /></svg>
                        <span className={cart.length > 0 ? "cart__span" : "cart__span-change"}>{cart.length}</span>
                        <div className="shops">
                            <p className="shops__title">Listado de tus compras</p>
                            {
                                cart.length <= 0 ? <div>No hay resultado</div> :
                                    (
                                        <div className="shops__list">
                                            {
                                                cart.map((car) => {
                                                    return (
                                                        <div key={car.id} className="shops__item">
                                                            <p>{car.nombre}</p>
                                                            <span>S/{car.precio}</span>
                                                            <div className="item__div">
                                                                <button onClick={() => handleIncrementCant(car.id)}>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" /></svg>
                                                                </button>
                                                                <span>{car.cantidad <= 5 ? car.cantidad : 5}</span>
                                                                <button onClick={() => handleDecrementCant(car.id)} >
                                                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M200-440v-80h560v80H200Z" /></svg>
                                                                </button>
                                                                <button type="button" onClick={() => handleClickDelete(car.id)}>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#EA3323"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm80-160h80v-360h-80v360Zm160 0h80v-360h-80v360Z" /></svg>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }
                                            <button className="shops__butonAll">
                                                <Link to='/BuyProduct'>
                                                    Comprar Productos
                                                </Link>
                                            </button>
                                        </div>
                                    )
                            }
                        </div>
                    </span>
                </div>
            </header>
        </>
    )
}
