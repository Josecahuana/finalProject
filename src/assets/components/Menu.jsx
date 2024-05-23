import {BarImage } from './BarImage'
import { Header } from './Header'
import { Main } from './Main'
import { useEffect, useState } from "react";
import data from './data'

export const Menu = () => {

    const [cart, setCart] = useState([]);
    const [searchProduct, setSearchProduct] = useState([]);
    // const [input, setInput] = useState('');

    const handleChangeCart = (value) => {
        const newValue = data.find(item => item.id === value);
        const productInCart = cart.find(product => product.id === newValue.id);

        if (productInCart) {
            // Si ya está en el carrito, actualiza su cantidad
            setCart(prevCart => prevCart.map(product =>
                product.id === newValue.id
                    ? { ...product, cantidad: (product.cantidad || 1) + 1 }
                    : product
            ));
            console.log('Cantidad actualizada');
        } else {
            // Si no está en el carrito, agrégalo con cantidad 1
            setCart(prevCart => [...prevCart, { ...newValue, cantidad: 1 }]);
        }

    }
    console.log(cart);

    const handleChangeSearchProduct = (valueSearch) => {
        setSearchProduct([ ...searchProduct, valueSearch]);
        console.log(searchProduct);
    }


    useEffect(() => {
    }, [cart, searchProduct]);

    return (
        <>
            <BarImage />
            <Header cart={cart} data={data} handleChangeSearchProduct={handleChangeSearchProduct} />
            <Main handleChangeCart={handleChangeCart} searchProduct={searchProduct} 
            // input={input} 
            />
        </>
    )
}

