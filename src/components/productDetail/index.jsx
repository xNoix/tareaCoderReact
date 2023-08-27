import { useContext, useState } from "react";
import { CartContext } from "../../context/index";
import Contador from "../../componentes/selectorCantidad/index";
import { Link } from "react-router-dom";
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
const ItemDetail = ( {item} ) => {

    const { carrito, agregarAlCarrito } = useContext(CartContext);
    console.log(carrito);

    const [cantidad, setCantidad] = useState(1);

    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }

    const handleSumar = () => {
        cantidad < item.stock && setCantidad(cantidad + 1)
    }

  return (
    <div className="container detalle">
        <div className="producto-detalle">
          <img className="zoom" src={item.imagen} alt={item.titulo} />
            
            <div className="contenido">
                <h3 className="titulo ps-5">{item.titulo}</h3>
                
                <p className="precio  fw-bolder ps-5"> ${item.precio}</p>
                <p className=" pt-5 pb-0 ps-5">Selecciona la cantidad:</p>
                <Contador
                  cantidad={cantidad}
                  handleSumar={handleSumar}
                  handleRestar={handleRestar}
                  handleAgregar={() => { agregarAlCarrito(item, cantidad) }}
                />
                <Link className=" text-decoration-none"><p className="ps-5 ">Ver promociones vigentes</p></Link>
                <div className=" ms-5 pb-1 align-content-center">
                  <CreditCardIcon  className="m-2"/>
                  <AccountBalanceIcon className="m-2"/>
                  <LocalAtmIcon className="m-2"/>
                </div>
                
                <Link className=" text-decoration-none">  <p className="ps-5 ">Calculador de Envío</p></Link>
                <Link className=" text-decoration-none"><p className="ps-5 ">Ver Politicas de cambio</p></Link>
               
             
               
               <div className="ps-5 pt-5 pb-3">
                <h3>Descripción</h3>
                <p className="descripcion"> {item.description}</p>
               </div>

            </div>
        </div>
        
        
              
    </div>
  )
}

export default ItemDetail