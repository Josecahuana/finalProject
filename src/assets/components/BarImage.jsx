import zapatillas from './dataImg/zapatillas.jpg'
import { Link } from 'react-router-dom'
export const BarImage = () => {
  return (
    <>
     <Link to='/' >
     <img className='image__header' src={zapatillas} /> 
     </Link>
    </>
  )
}

