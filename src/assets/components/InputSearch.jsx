import { useState } from "react";
export const InputSearch = ({ data, handleChangeSearchProduct }) => {

    const [valueChar, setValueChar] = useState('');

    const handleChangeInput = (e) => {
        const newValue = e.target.value;
        setValueChar(newValue);

        const filterProduct = data.filter(item =>
            item.nombre.toLowerCase().includes(valueChar.toLowerCase())
        );
        handleChangeSearchProduct(filterProduct, valueChar);

    }
    return (
        <div className="menu__search">
            <input
                className="search__input"
                type="text"
                value={valueChar}
                onChange={handleChangeInput} 
                />
            <span className="search__span" >
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" /></svg>
            </span>
        </div>
    )
}

