import React, { useContext } from 'react'
import { Link } from 'react-router-dom';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge, IconButton } from '@mui/material';
import { CartContext } from '../../context';

const CartWidget = () => {
  const {cantidadEnCarrito}= useContext(CartContext);

  return (
    <IconButton className='ms-5'>
        <Badge badgeContent={cantidadEnCarrito()} color="primary">
           <Link to={"/carrito"}> <ShoppingCartIcon htmlColor='#002884' /></Link> 
        </Badge>
    </IconButton>
  )
}

export default CartWidget;