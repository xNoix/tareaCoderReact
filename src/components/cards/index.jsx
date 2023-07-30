import React from "react";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';




const Item = ( {producto} ) => {
    return (
      <>
           
            <Card className="card w-auto h-auto" >
                <Card.Img  className='cardImage'variant="top" src={producto.imagen} alt={producto.titulo}/>
                <Card.Body>
                <Card.Title className="text-center pb-4 fw-bold fs-4 text-decoration-underline">{producto.titulo}</Card.Title>
                <Card.Text className="fw-bold  fs-5 pb-1 m-2">
                Precio: $ {producto.precio}
                </Card.Text>
                <Card.Text className="  pb-2">
                Categoría: { producto.categoría}
                </Card.Text>
                <Link to={`/item/${producto.id}`}><button className="btn pulse ms-5 pb-1 fs-5 border-black">Ver más</button> </Link>
       
      </Card.Body>
    </Card>

</>
    )
  }
  
  export default Item