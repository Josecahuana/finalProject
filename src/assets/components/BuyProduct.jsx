import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './BuyProduct.css'
export const BuyProduct = () => {

  const location = useLocation();
  const { state } = location;
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setCart(state.data);
    setTotal()
  }, [cart])
  useEffect(() => {
    console.log(cart.map(car => car.id))
  }, [total])


  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className="buy">
      <section className="buy__products">
        {
          cart.length <= 1 ? <h2>Carrito (<span>{cart.length}</span> compra)</h2> :
            <h2>Carrito (<span>{cart.length}</span> compras)</h2>
        }
        <div className='items'>
          {
            cart.map((car) => {
              return (
                <div key={car.id} className="buy__item">
                  <p>{car.nombre}</p>
                  <span>S/{car.precio}</span>
                  <select id="miSelect">
                    <option value="opcion1">37</option>
                    <option value="opcion2">38</option>
                    <option value="opcion3">39</option>
                    <option value="opcion4">40</option>
                    <option value="opcion4">41</option>
                    <option value="opcion4">42</option>
                  </select>
                  <div className="buy__increment">
                    <button className='button__increment' onClick={() => handleIncrementCant(car.id)}>
                      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" /></svg>
                    </button>
                    <span>{car.cantidad <= 5 ? car.cantidad : 5}</span>
                    <button className='button__decrement' onClick={() => handleDecrementCant(car.id)} >
                      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M200-440v-80h560v80H200Z" /></svg>
                    </button>
                    <button className='button__delete' type="button" onClick={() => handleClickDelete(car.id)}>
                      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#EA3323"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm80-160h80v-360h-80v360Zm160 0h80v-360h-80v360Z" /></svg>
                    </button>
                  </div>
                </div>
              )
            })
          }
        </div>

      </section>
      <section className="buy__pay">
        <h2>Resumen de la orden</h2>
        <div className='pay__item'>
          <div>
            <p>Costo de envio estimado</p>
            <p>S/ 9.90</p>
          </div>
          <div>
            <p>Productos ({cart.length}) </p>
            <p>S/ { }</p>
          </div>
          <div>
            <p>Total:</p>
            <p>S/ { }</p>
          </div>
        </div>
        <section>
          <form onSubmit={handleSubmit} >
            <div>
              <label htmlFor="location">Agregar Ubicación</label>
              <input type="text" id='location' />
            </div>
            <div>
              <label htmlFor="card">Agregar número de tarjeta</label>
              <input type="text" id='card' />
            </div>
            <div className='dateCard'>
              <label htmlFor="dateCard">Fecha de vencimineto</label>
              <input type="number" />
              <input type="number" />
            </div>
            <div>
              <label htmlFor="cvv">CVV</label>
              <input type="number" id='cvv' />
            </div>

            <button type='submit' className='form__buy'>Comprar</button>
          </form>
        </section>
      </section>
    </div>
  )
}

