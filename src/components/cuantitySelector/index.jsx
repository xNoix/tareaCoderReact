import React from "react";

const Contador= ( {cantidad, handleRestar, handleSumar, handleAgregar} ) => {

  return (
    <div>
      
      <div className="item-count  ps-5 ">  
            <button className="btn pulse border-black"  onClick={handleSumar}>+</button>
            <p className="p-2 m-2" >{cantidad}</p>
            <button className="btn pulse border-black" onClick={handleRestar}>-</button>
        </div>
        <button className="agregar-al-carrito btn pulse m-5 border-black" onClick={handleAgregar}>Agregar al carrito</button>
    </div>
   
  );
};

export default Contador;