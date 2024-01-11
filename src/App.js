
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { useState } from 'react';
import data from './data.js';
import bg from './img/bg.jpeg';
import {Routes, Route, Link} from 'react-router-dom';
import Main from './Main.js';
import Detail from './Detail.js';
function App() {
  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">SHOEKER</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#sale">Sale</Nav.Link>
            <Nav.Link href="#cart">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Link to="/">호모로</Link>
      <Link to="/detail">상페</Link>

      <Routes>
        <Route path="/" element={<Main></Main>}/>
        <Route path="/detail" element={<Detail></Detail>}/>
        <Route path="/cart" element={<div>cart</div>}/>
      </Routes>

      
    </div>
  );
}


export default App;
