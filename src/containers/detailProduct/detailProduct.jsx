import { useEffect, useState } from "react"
import ItemDetail from "../../componentes/detalleProducto/index";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";


const ItemDetailContainer = () => {

    const [item, setItem] = useState(null);
    const id = useParams().id;

    useEffect(() => {

      const docRef = doc(db, "productos", id);
      getDoc(docRef)
        .then((resp) => {
          setItem(
            { ...resp.data(), id: resp.id }
          );
        })

    }, [id])
    

  return (
    <div className=" detalleProducto">
        {item && <ItemDetail item={item} />}
    </div>
  )
}

export default ItemDetailContainer