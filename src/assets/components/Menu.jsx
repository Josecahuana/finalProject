import {BarImage } from './BarImage'
import { Header } from './Header'
import { Main } from './Main'
import { useEffect, useState } from "react";
import data from './data'

export const Menu = () => {

    const [cart, setCart] = useState([]);
    const [searchProduct, setSearchProduct] = useState([]);
    const [input, setInput] = useState('');

    const handleChangeCart = (value) => {
        const newValue = data.find(item => item.id === value);
        setCart(prevCart => [...prevCart, newValue]);
    }

    const handleChangeSearchProduct = (valueSearch, valueChar) => {
        setSearchProduct(prevSearch => [...prevSearch, valueSearch]);
        setInput(valueChar);
        console.log(input);
    }


    useEffect(() => {
    }, [cart, searchProduct, input]);

    return (
        <>
            <BarImage />
            <Header cart={cart} data={data} handleChangeSearchProduct={handleChangeSearchProduct} />
            <Main handleChangeCart={handleChangeCart} searchProduct={searchProduct} input={input} />
        </>
    )
}

