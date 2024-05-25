import { useState } from "react";

export const SearchProduct = ({ sneakers, buttonFilterProdcut, handleViewAll }) => {

    const markUnics = new Set(sneakers.map(sneaker => sneaker.marca));
    const marcas = [...markUnics]

    const handleChangeProduct = (marca) => {
        buttonFilterProdcut(marca);
    }

    const handleClickAllProduct = (sneakers) => {
        handleViewAll(sneakers);
    }

    return (
        <>
            {
                marcas.map((marca, index) => (
                    <button 
                    type="button"
                    key={index}
                    onClick={()=>handleChangeProduct(marca)}
                    >{marca}</button>
                ))
            }

            <button className="button__viewAll" type="button" onClick={handleClickAllProduct}>Ver Todos</button>
        </>
    )
}

