import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/config";
import ItemList from "./itemList";

const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);

    const [titulo, setTitulo] = useState();

    const categoria = useParams().categoria;
    
  

    useEffect(() => {

      const productosRef = collection(db, "productos");
      const q = categoria ? query(productosRef, where("categoría", "==", categoria)) : productosRef;
     

      getDocs(q)
        .then((resp) => {

          setProductos(
            resp.docs.map((doc) => {
              return { ...doc.data(), id: doc.id }
            })
          );
          setTitulo(categoria ? `Relojes ${categoria+"s"}` : "Todos los Relojes");
        })
        
    }, [categoria])
    

  return (
    <div className="relojes-container">
        <ItemList productos={productos} titulo={titulo} />
    </div>
  )
}

export default ItemListContainer