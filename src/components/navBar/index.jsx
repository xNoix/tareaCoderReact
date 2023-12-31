import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { Divider } from '@mui/material';
import CartWidget from '../cartIcon';
import SearchBar from '../searchBar';
import logo from './logo.png'; 


const NavBar=()=> {
  
  
  const handleSearch = (searchTerm) => {
    // Lógica para procesar la búsqueda
    console.log('Búsqueda realizada:', searchTerm);
  };

  
  return (
    <Navbar collapseOnSelect expand="lg" className="menu bg-body-tertiary">
      <Container>
       <Link to={"/"}><Navbar.Brand className='p-1 pe-5'>
          <img
              src={logo}
              width="30"
              height="20"
            />
        </Navbar.Brand></Link> 
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto ">
            <Link to="/"className="a ms-2 me-2 p-2" >INICIO</Link>
            <NavDropdown title="CATEGORIA" id="collasible-nav-dropdown" className='flex'>
              <Link to={"/productos/Notebook"} className='text-center m-1 a   '> <li>Notebook</li></Link>
              <Divider/>
              <Link to={"/productos/Auriculare"} className='text-center a m-1'>
               <li>Auriculares</li>
              </Link>
              <Divider/>
              <Link to={"/productos/Teclado"} className="text-center a m-1"> <li>Teclados</li> </Link >
              
            </NavDropdown>
            <Link to={"/contacto"} className=" a ms-2 me-2 p-2"> CONTACTO</Link>
          </Nav>

            <SearchBar className="pe-5 "  onSearch={handleSearch} />
          <CartWidget className=" ps-5"/>
      
         
          
        

          </Navbar.Collapse>
          

        </Container>
      </Navbar>);
          };

export default NavBar;