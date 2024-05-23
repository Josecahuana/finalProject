import { useState } from "react";

export const SearchProduct = ({ sneakers }) => {



    const markUnics = new Set(sneakers.map(sneaker => sneaker.marca));
    const marcas = [...markUnics]



    return (
        <>
            {
                marcas.map(marca => (
                    <button key={marca}>{marca}</button>
                ))
            }
        </>
    )
}

