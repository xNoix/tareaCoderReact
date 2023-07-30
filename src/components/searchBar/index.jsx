import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
    setSearchTerm('');
  };

  return (
    <Form className=" a d-flex" onSubmit={handleSubmit} >
            <Form.Control
              type="search"
              placeholder="Busca Tu Reloj"
              value={searchTerm}
              className="me-2"
              onChange={handleInputChange}
              aria-label="Search"
            />
            <button className='btn pulse border-black me-5'>Buscar</button>
          </Form>
  );
};

export default SearchBar;
