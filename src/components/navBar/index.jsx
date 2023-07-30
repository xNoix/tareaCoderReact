import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { Divider } from '@mui/material';
import CartWidget from '../cartIcon';
import SearchBar from '../searchBar';



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
              alt="logo"
              src="./logo192.png"
              width="100"
              height="100"
              className=" d-inline-block rounded-circle"
             
            />
        </Navbar.Brand></Link> 
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto ">
            <Link to="/"className="a ms-2 me-2 p-2" >INICIO</Link>
            <NavDropdown title="CATEGORIA" id="collasible-nav-dropdown" className='flex'>
              <Link to={"/productos/Masculino"} className='text-center m-1 a   '> <li>RELOJES MASCULINOS</li></Link>
              <Divider/>
              <Link to={"/productos/Femenino"} className='text-center a m-1'>
               <li>RELOJES FEMENINOS</li>
              </Link>
              <Divider/>
              <Link to={"/productos/Smartwatch"} className="text-center a m-1"> <li>SMARTWATCHS</li> </Link >
              
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