import { BarImage } from './BarImage'
import { Header } from './Header'
import { Main } from './Main'
import { useEffect, useState } from "react";
import data from './data'

export const Menu = () => {

    const [cart, setCart] = useState([]);
    const [searchProduct, setSearchProduct] = useState([]);
    const [filteredInput, setFilteredInput] = useState([]);
    const [filterText, setFilterText] = useState('');

    const handleInsertCart = (value) => {
        const newValue = data.find(item => item.id === value);
        const productInCart = cart.find(product => product.id === newValue.id);

        if (productInCart) {
            setCart(prevCart => prevCart.map(product =>
                product.id === newValue.id
                    ? { ...product, cantidad: (product.cantidad || 1) + 1 }
                    : product
            ));
        } else {
            setCart(prevCart => [...prevCart, { ...newValue, cantidad: 1 }]);
        }

    }

    const handleDeleteCart = (id) => {
        const deleteCart = cart.filter(product => product.id !== id)
        setCart(deleteCart);
    }

    const handleIncrementCant = (id) => {
        setCart(prevCart => prevCart.map(product =>
            product.id === id
                ? { ...product, cantidad: product.cantidad < 5 ? product.cantidad + 1 : 5 }
                : product
        ));
    };

    const handleDecrementCant = (id) => {
        setCart(prevCart => prevCart.map(product =>
            product.id === id
                ? { ...product, cantidad: product.cantidad > 1 ? product.cantidad - 1 : 1 }
                : product
        ));
    };

    const handleChangeSearchProduct = (valueSearch) => {
        setSearchProduct(prevSearchProduct => [...prevSearchProduct, valueSearch]);
    }

    const handleFilterChange = (text) => {
        setFilterText(text);

        const filtered = data.filter(item =>
            item.nombre.toLowerCase().includes(text.toLowerCase())
        );
        setFilteredInput(filtered);
    };

    useEffect(() => {
    }, [cart, searchProduct]);

    return (
        <>
            <BarImage />
            <Header
                cart={cart}
                data={data}
                handleChangeSearchProduct={handleChangeSearchProduct}
                handleDeleteCart={handleDeleteCart}
                handleIncrementCant={handleIncrementCant}
                handleDecrementCant={handleDecrementCant}
                filterText={filterText}
                handleFilterChange={handleFilterChange}
                
            />

            <Main
                handleInsertCart={handleInsertCart}
                filterText={filterText}
                filteredInput={filteredInput}
            />
        </>
    )
}

