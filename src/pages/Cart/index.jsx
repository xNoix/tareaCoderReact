import React, { useContext } from 'react'
import { CartContext } from '../../context'
import { Link } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import SentimentVeryDissatisfiedSharpIcon from '@mui/icons-material/SentimentVeryDissatisfiedSharp';

const Card = () => {

    const { carrito, precioTotal,eliminarProducto } = useContext(CartContext);

  

  return (
    <div className=" containerCarrito pb-4 border-success border">
        <h1 className="main-title m-2 ">Carrito</h1>

        {
            carrito.map((prod) => (
                <div key={prod.id}>
                    <br />
                   <div className=" d-grid">
                        <h3>{prod.titulo}</h3>
                        <p className='m-4'>Precio unit: ${prod.precio}</p> 
                        <p className='m-2'>Cant: {prod.cantidad}</p>
                     <DeleteIcon onClick={() => eliminarProducto(prod.id)} />
                    </div>
                 
                    <p className='p-4'>Precio total: ${prod.precio * prod.cantidad}</p>
                    
                    
                    <br />
                </div>
            ))
        }

        {  
            carrito.length > 0 ?
            <>
                <h2> Total Carrito: ${precioTotal()}</h2>
                <Link to={"/checkout"}><button className="btn-finalizar-compra pulse btn  m-2">Finalizar Compra</button></Link>
                <Link to={"/"}> <button className='btn pulse '>Seguir Comprando</button></Link>
            </> :
            <> 
            <div>
                <h2>El carrito está vacío :(</h2>
                <SentimentVeryDissatisfiedSharpIcon className=' w-25 h-25'/>
            </div>
                <Link to={"/"}> <button className=' fs-6 btn  m-3 pulse border-black  '>Volver a Inicio</button></Link>
                <Link to={"/Masculinos"}> <button className=' fs-6  pulse btn border-black  m-3'>Notebooks</button></Link>
                <Link to={"/Femeninos"}> <button className=' fs-6 btn border-black  m-3 pulse'>Auriculares</button></Link> 
                <Link to={"/"}> <button className=' fs-6 btn pulse border-black m-3'>Teclados</button></Link>
            </>
               
        
           
        }
        
    </div>
  )
}

export default Card;