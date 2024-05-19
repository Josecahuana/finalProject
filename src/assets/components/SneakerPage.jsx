import { useParams } from 'react-router-dom';
import './SneakerPage.css'

export const SneakerPage = ({ data }) => {

    let params = useParams();
    return (
        <>

                <section className="snaker__img">
                    <img src="" alt="" />
                    <div>
                        {params.id}
                    </div>
                </section>
                <section>
                    <div>
                        <p></p>
                        <p>Codigo</p>
                    </div>
                    <h3></h3>

                </section>
        </>
    )
}
