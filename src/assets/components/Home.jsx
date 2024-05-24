import ImageGallery from "react-image-gallery";
import faketitle from '../img/faketitle.jpg'
import "react-image-gallery/styles/css/image-gallery.css"
import ropaslider from '../img/ropaHombre.png'
import sliderrefri from '../img/ropaMujer.png'
import sliderShoes from '../img/Zapatillas.png'
import { Link } from "react-router-dom";
import { InputSearch } from "./InputSearch";

export const Home = () => {

    const images = [
        {
            original: "./src/assets/components/dataImg/banner/banner.png"
        },
        {
            original: "./src/assets/components/dataImg/banner/banner2.png"
        }
    ]

    return (
        <>
            <section className="barraOferta">
                <div>
                    <h4>🔥Envio gratis en compras mayores a S/199 👟</h4>
                </div>
            </section>

            <header className='menu__header'>
                <div className='menu__option'>
                    <img src={faketitle} alt="img fakeshop" />
                </div>
                <InputSearch />
                <div className="menu__sesion">
                    <p>Hola, <b>Iniciar sesión</b></p>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" /></svg>
                    </span>
                    <span className="sesion__cart">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z" /></svg>
                        <span className="cart__span">0</span>
                        <div className="shops">
                            <p className="shops__title">Listado de tus compras</p>
                        </div>
                    </span>
                </div>
            </header>

            <div className="BannerImage"> 
                <ImageGallery className="" items={images}
                showPlayButton={false}
                showFullscreenButton={false}
                showThumbnails={false}
                showBullets={true} 
                
                />
             </div>
              
            <div className="descount__product">
                <img className="descount__important" src={ropaslider} alt="img  clothes" />
                <Link to='/Menu'>
                    <img className="descount__important" src={sliderShoes} alt="img shoes" />
                </Link>
                <img className="descount__important" src={sliderrefri} alt="img fridge" />
            </div>

        </>

    )

}
