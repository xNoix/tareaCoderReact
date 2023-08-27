import React, { useState, useEffect } from "react";
import Item from "../../components/cards";

// Componente Spinner (puedes utilizar uno personalizado o de alguna librería)
const Spinner = () => {
  return <div className="custom-loader"></div>;
};

const ItemList = ({ productos, titulo }) => {
  const [loading, setLoading] = useState(true); // Estado para controlar si está cargando

  useEffect(() => {
    // Simulación de una carga asincrónica
    const delay = setTimeout(() => {
      setLoading(false); // Cambiar el estado a "false" después del tiempo de carga simulado
    }, 2000); 

    // Limpieza del efecto
    return () => clearTimeout(delay);
  }, []);

  return (
    <div className="container">
      <h1 className="main-title ">{titulo}</h1>

      {loading ? ( // Si está cargando, mostrar el spinner
        <Spinner />
      ) : (
        // Si no está cargando, mostrar la lista de productos
        <div className="productos productos-grid">
          {productos.map((prod) => (
            <Item producto={prod} key={prod.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ItemList;