import React from "react";
import Carrusel from "../../components/carrusel";
import ItemListContainer from "../../containers/products/itemListContainer";



const StartPage= ()=>{
    return(
      <div>
        <div className="glitch-wrapper container p-2 main-title">
   <div className="glitch" data-text="ENCONTRÁ  AQUÍ TU RELOJ FAVORITO">ENCONTRÁ  AQUÍ TUS PRODUCTOS FAVORITO</div>
</div>

    
        <Carrusel />
        <ItemListContainer/>
      </div>
    )
}


export default StartPage;