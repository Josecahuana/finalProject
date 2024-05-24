import { useState } from 'react'
import shop from '../img/shop.png'
import './Login.css'
export const Login = () => {

    const [register, setRegister] = useState([]);

    const handleRegister = () => {
    }


    return (
        <>
            <div className="register" onSubmit={handleRegister}>

                <div className='main'>
                    <span className='main__icon'><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M240-80q-33 0-56.5-23.5T160-160v-480q0-33 23.5-56.5T240-720h80q0-66 47-113t113-47q66 0 113 47t47 113h80q33 0 56.5 23.5T800-640v480q0 33-23.5 56.5T720-80H240Zm160-640h160q0-33-23.5-56.5T480-800q-33 0-56.5 23.5T400-720Zm200 200q17 0 28.5-11.5T640-560v-80h-80v80q0 17 11.5 28.5T600-520Zm-240 0q17 0 28.5-11.5T400-560v-80h-80v80q0 17 11.5 28.5T360-520Z" /></svg></span>
                    <img src={shop} />
                    <p className='main__text'>FakeShop</p>

                    <form action="">
                        <div className="user">
                            <label htmlFor="user"></label>
                            <input type="text" name="text user" id="user" placeholder="Usuario" />
                        </div>
                        <div className="password">
                            <label htmlFor="password">
                            </label>
                            <input type="email" name="text password" id="password" placeholder="Contraseña" />
                        </div>
                        <input className='register__button' type="submit" value="Ingresar" />
                    </form>
                </div>
            </div>
        </>
    )
}


