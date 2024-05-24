import './Login.css'

export const Login = () => {
    return (
        <>
            <div className="login">
                <form action="">
                    <main className="login__main">
                        <div className="user">
                            <label htmlFor="user"></label>
                            <input type="text" name="text user" id="user" placeholder="Usuario" />
                        </div>
                        <div className="password">
                            <label htmlFor="password">
                            </label>
                            <input type="email" name="text password" id="password" placeholder="Contraseña" />
                        </div>
                        <div className="check">
                            <input type="checkbox" name="check recorder user" />
                            <p>Recordarme en esta pagina</p>
                        </div>
                        <input type="submit" value="Ingresar" />

                        <div className="email__error">
                            <span>¿Olvidaste tu contraseña?</span>
                        </div>
                    </main>
                    <div className="login__register">
                        <p>¿No tienes una cuenta? <span>Registrate</span></p>
                    </div>
                </form>
            </div>
        </>
    )
}


