import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import Nav from 'react-bootstrap/Nav';

const Footer= ()=>{
    return (
        <footer className="w-auto h-auto">
          <div className="footer-column">
            <p className="rights">© 2023 Todos los derechos reservados</p>
          </div>
          <div className="footer-column">
            <p className="contact">Contacto: darosayonatanrafael@gmail.com</p>
          </div>
          <div className="footer-column">
            <p className="share">Síguenos en:</p>
            <div className="social-links m-4">
        
            <Nav.Link href="http://" className='social-links  pt-2 pe-3'> <InstagramIcon/>Instagram   </Nav.Link>
            
            <Nav.Link href="http://" className='social-links  pt-2 pe-3'> <FacebookRoundedIcon/>Facebook   </Nav.Link>
        
            <Nav.Link href="http://" className='social-links  pt-2 pe-3'> <TwitterIcon/>  Twitter </Nav.Link>
            

            </div>
          </div>
        </footer>
      );
    }
export default Footer;