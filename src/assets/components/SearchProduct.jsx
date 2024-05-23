import { useState } from "react";

export const SearchProduct = ({ sneakers, buttonFilterProdcut }) => {


    const markUnics = new Set(sneakers.map(sneaker => sneaker.marca));
    const marcas = [...markUnics]

    const handleChangeProduct = (marca) => {
        buttonFilterProdcut(marca);
    }


    return (
        <>
            {
                marcas.map((marca, index) => (
                    <button 
                    key={index}
                    onClick={()=>handleChangeProduct(marca)}
                    >{marca}</button>
                ))
            }
        </>
    )
}

