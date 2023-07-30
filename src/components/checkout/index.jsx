import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/index';
import { useForm } from 'react-hook-form';
import { collection, addDoc } from "firebase/firestore";
import { db } from '../../firebase/config';
import {FaFaceLaughWink } from "react-icons/fa6";
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';

const Checkout = () => {

    
    const [pedidoId, setPedidoId] = useState("");

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

    const { register, handleSubmit } = useForm();

    const comprar = (data) => {
        const pedido = {
            cliente: data,
            productos: carrito,
            total: precioTotal()
        }
        console.log(pedido);

        const pedidosRef = collection(db, "pedidos");

        addDoc(pedidosRef, pedido)
            .then((doc) => {
                setPedidoId(doc.id);
                vaciarCarrito();
            })

    }

    if (pedidoId) {
        return (
            <div className="container">
                <h1 className="main-title">Muchas gracias por tu compra</h1>
                <p>En breve recibirás un E-mail con la confirmacion de la compra. </p>
                <p>Tu número de pedido es: {pedidoId}</p>
                <FaFaceLaughWink className='w-25 h-25' />
                <Link to={"/"}> <HomeIcon className='p-5'/></Link>
            </div>
        )
    }

  return (
    <div className="container pb-5">
        <h1 className="main-title">Finalizar compra</h1>
        <form className="formulario" onSubmit={handleSubmit(comprar)}>

            <input type="text" placeholder="Ingresá tu nombre" {...register("nombre")} />
            <input type="email" placeholder="Ingresá tu e-mail" {...register("email")} />
            <input type="phone" placeholder="Ingresá tu teléfono" {...register("telefono")} />

            <button className="btn btn-info pulse border-black" type="submit">COMPRAR</button>

        </form>
    </div>
  )
}

export default Checkout;