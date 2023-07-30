import { createContext, useEffect, useState } from "react";
import Swal from 'sweetalert2'


export const CartContext = createContext();

const carritoInicial = JSON.parse(localStorage.getItem("carrito")) || [];

export const CartProvider = ({children}) => {

    const [carrito, setCarrito] = useState(carritoInicial);

    const agregarAlCarrito = (item, cantidad) => {
        const itemAgregado = { ...item, cantidad };

        const nuevoCarrito = [...carrito];
        const estaEnElCarrito = nuevoCarrito.find((producto) => producto.id === itemAgregado.id);

        if (estaEnElCarrito) {
            estaEnElCarrito.cantidad += cantidad;
        } else {
            nuevoCarrito.push(itemAgregado);
        }
        setCarrito(nuevoCarrito);
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'El Producto se ha agregado al carrito',
            showConfirmButton: false,
            timer: 1500
          })
    }
    const eliminarProducto = (productId) => {
        const updatedCart = carrito.filter((item) => item.id !== productId)
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: 'btn btn-success',
              cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
          })
          
          swalWithBootstrapButtons.fire({
            title: '¿Estás seguro que quieres eliminar el producto?',
            text: "Esta acción eliminará el producto del carrito,",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'SI,ELIMÍNALO !!!',
            cancelButtonText: 'NO, CANCELA!',
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed) {
              swalWithBootstrapButtons.fire(
                '¡BORRADO!',
                'El Producto ha sido eliminado del carrito',
                'success',
              ) 
              setCarrito(updatedCart);
              
            } else if (
              /* Read more about handling dismissals below */
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire(
                'CANCELADO',
                'El producto sigue en el carrito :)',
                'error'
              )
            }
          })
        
      };

    const cantidadEnCarrito = () => {
        return carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
    }

    const precioTotal = () => {
        return carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0);
    }

    const vaciarCarrito = () => {
        setCarrito([]);
        
    }

    useEffect(() => {
        localStorage.setItem("carrito", JSON.stringify(carrito));
    }, [carrito])
    

    return (
        <CartContext.Provider value={ {
            carrito,
            agregarAlCarrito,
            eliminarProducto,
            cantidadEnCarrito,
            precioTotal,
            vaciarCarrito
        } }>
            {children}
        </CartContext.Provider>
    )



}