import { Link } from 'react-router-dom';
import './SneakerPage.css'

export const SneakerPage = ({ data }) => {
    return (
        <>
            <Link>
                <section className="snaker__img">
                    <img src="" alt="" />
                    <div>

                    </div>
                </section>
                <section>
                    <div>
                        <p>{marca}</p>
                        <p>Codigo:{Math.radom}</p>
                    </div>
                    <h3>{nombre}</h3>

                </section>
            </Link>
        </>
    )
}
