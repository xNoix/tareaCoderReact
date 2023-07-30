
import Carousel from 'react-bootstrap/Carousel';

const Carrusel= () => {
  // Array de productos destacados
  const images= [
    { id: 1, name: 'Relojes elegante', image: 'https://images.pexels.com/photos/9878300/pexels-photo-9878300.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', descripcion:"Los mas Fachero del mercado" },
    { id: 2, name: 'Relojes deportivo', image: 'https://images.pexels.com/photos/277319/pexels-photo-277319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', descripcion:"Los mas Fachero del mercado"},
    { id: 3, name: 'Relojes clásico', image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', descripcion:"Los mas Fachero del mercado"},
  ];

  return (
    <Carousel className='container  pb-3 pt-3'>
      {images.map(image => (
        <Carousel.Item key={image.id}>
          <img
            className="flex w-100 h-auto"
            src={image.image}
            alt={image.name}
            height={500}
          />
          {/* <Carousel.Caption className=' h-auto w-auto'>
            <h3>{image.name}</h3>
            <p>{image.descripcion}</p>
          </Carousel.Caption> */}
        </Carousel.Item>
      ))}
    </Carousel>
  );
   
    
};

export default Carrusel;