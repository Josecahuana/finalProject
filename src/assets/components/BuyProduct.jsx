import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './BuyProduct.css'
export const BuyProduct = () => {


  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  /*validaciones*/
  const [location, setLocation] = useState('');
  const [card, setCard] = useState('');
  const [expiryMonth, setExpiryMonth] = useState('');
  const [expiryYear, setExpiryYear] = useState('');
  const [cvv, setCvv] = useState('');
  const [errors, setErrors] = useState({});

  const locationM = useLocation();
  const { state } = locationM;
  const navigate = useNavigate();


  /*Obtener los datos, id para obtener el precio a calcular*/
  useEffect(() => {
    setCart(state.data);
    setTotal()
  }, [cart])


  /**/
  useEffect(() => {
    console.log(cart.map(car => car.id))
  }, [total])

  const validarUbicacion = (ubicacion) => {
    if (!ubicacion) return "La ubicación no puede estar vacía.";
    if (ubicacion.length > 100) return "La ubicación es demasiado larga.";
    if (!/^[a-zA-Z\s,\.]+$/.test(ubicacion)) return "La ubicación contiene caracteres inválidos.";
    return null;
  };

  const validarTarjetaCredito = (numero) => {
    const sanitizedNumber = numero.replace(/\s+/g, '');
    if (!/^\d{16}$/.test(sanitizedNumber)) return "El número de tarjeta debe tener 16 dígitos.";
    let sum = 0;
    for (let i = 0; i < sanitizedNumber.length; i++) {
      let intVal = parseInt(sanitizedNumber.substr(i, 1));
      if (i % 2 === 0) {
        intVal *= 2;
        if (intVal > 9) intVal = (intVal % 10) + 1;
      }
      sum += intVal;
    }
    if (sum % 10 !== 0) return "El número de tarjeta no es válido.";
    return null;
  };

  const validarFechaVencimiento = (mes, año) => {
    if (!/^\d{2}$/.test(mes) || !/^\d{2}$/.test(año)) return "Formato de fecha no válido.";
    const month = parseInt(mes);
    const year = parseInt(año);
    if (month < 1 || month > 12) return "Mes de vencimiento no válido.";
    const currentYear = new Date().getFullYear() % 100;
    if (year < currentYear || (year === currentYear && month < new Date().getMonth() + 1)) return "La tarjeta está vencida.";
    return null;
  };

  const validarCvv = (cvv) => {
    if (!/^\d{3}$/.test(cvv)) return "El CVV debe tener 3 dígitos.";
    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    errors.location = validarUbicacion(location);
    errors.card = validarTarjetaCredito(card);
    errors.expiryDate = validarFechaVencimiento(expiryMonth, expiryYear);
    errors.cvv = validarCvv(cvv);

    if (Object.values(errors).some(error => error !== null)) {
      setErrors(errors);
      setTimeout(() => {
        setErrors({});
      }, 3000)
    } else {
      console.log('Formulario válido. Enviando...');
      const dataLocal = state;
      navigate('/', { state: dataLocal });
    }
  };


  console.log(errors);
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
          <form action='' onSubmit={handleSubmit}>
            <div style={{ position: 'relative' }}>
              <label htmlFor="location">Agregar Ubicación</label>
              <input
                type="text"
                id='location'
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="card">Agregar número de tarjeta</label>
              <input
                type="text"
                id='card'
                value={card}
                onChange={(e) => setCard(e.target.value)}
              />
            </div>
            <div className='dateCard'>
              <div>
                <label htmlFor="dateCard">Fecha de vencimiento</label>
                <input
                  type="number"
                  placeholder="MM"
                  value={expiryMonth}
                  onChange={(e) => setExpiryMonth(e.target.value)}
                />
                <input
                  type="number"
                  placeholder="YY"
                  value={expiryYear}
                  onChange={(e) => setExpiryYear(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label htmlFor="cvv">CVV</label>
              <input
                type="number"
                id='cvv'
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
              />

            </div>
            <button type='submit' className='form__buy'>Comprar</button>
          </form>

        </section>
      </section>
      {
       errors.location || errors.card || errors.expiryDate || errors.cvv ? <div className='error__message'>
        {errors.location && <p >{errors.location}</p>}
        {errors.card && <p>{errors.card}</p>}
        {errors.expiryDate && <p >{errors.expiryDate}</p>}
        {errors.cvv && <p >{errors.cvv}</p>}
        </div> : ''
      }
    </div>
  )
}

