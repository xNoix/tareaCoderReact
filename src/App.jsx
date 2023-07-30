import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/navBar';
import { CartProvider } from './context';
import PageNotFound from './pages/404';
import Footer from './components/footer';
import ItemListContainer from './containers/products/itemListContainer';
import StartPage from './pages/Start';
import Card from './pages/Cart';
import Contact from './pages/Contact';
import Checkout from './components/checkout';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/item/:id" element={<ItemListContainer />}/>
          <Route path="/productos" element={<ItemListContainer />} />
          <Route path="/productos/:categoria" element={<ItemListContainer />} />
          <Route path="/contacto" element={<Contact/>} />
          <Route path="/carrito" element={<Card/>} />
          <Route path="/checkout" element={<Checkout />}/>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </CartProvider>
);
}


export default App;
