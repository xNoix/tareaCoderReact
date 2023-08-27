
import Carousel from 'react-bootstrap/Carousel';

const Carrusel= () => {
  // Array de productos destacados
  const images= [
    { id: 1, name: 'Relojes elegante', image: 'https://media.spdigital.cl/file_upload/Desktop_Hero_(7)_46a7c0ee.png', descripcion:"Los mas Fachero del mercado" },
    { id: 2, name: 'Relojes deportivo', image: 'https://media.spdigital.cl/file_upload/Desktop_Hero_4_(4)_212f2461.png', descripcion:"Los mas Fachero del mercado"},
    { id: 3, name: 'Relojes clásico', image: 'https://media.spdigital.cl/file_upload/Desktop_Hero_OfertasFlash_ProductosAgo-2023_(1)_8d4988cb.png', descripcion:"Los mas Fachero del mercado"},
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
        </Carousel.Item>
      ))}
    </Carousel>
  );
   
    
};

export default Carrusel;