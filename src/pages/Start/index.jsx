import React from "react";
import Carrusel from "../../components/carrusel";
import ItemListContainer from "../../containers/products/itemListContainer";



const StartPage= ()=>{
    return(
      <div>
        <div className="wrapper">
          <svg>
            <text x="50%" y="50%" dy=".35em" textAnchor="middle">
           GEODA
           </text>
          </svg>
        </div>
        <div className="glitch-wrapper container p-2 main-title">
   <div className="glitch" data-text="ENCONTRÁ  AQUÍ TU RELOJ FAVORITO">ENCONTRÁ  AQUÍ TU RELOJ FAVORITO</div>
</div>

    
        <Carrusel />
        <ItemListContainer/>
      </div>
    )
}


export default StartPage;