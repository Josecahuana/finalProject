import { useParams } from 'react-router-dom';
import sneakers from './data.js'
import './SneakerPage.css'
import { useEffect, useState } from 'react';

export const SneakerPage = () => {
   const {id} = useParams();

   const newData = sneakers.find( sneaker => sneaker.id === +id)

    return (
        <>
            <div className='sneaker__div'>
                <section className="snaker__img">
                    <img src="" alt="" />
                    <div>
                        {newData.marca}
                    </div>
                </section>
                <section>
                    <div>
                        <p>{newData.nombre} </p>
                        <p>Codigo</p>
                    </div>
                    <h3></h3>

                </section>
            </div>
        </>
    )
}
