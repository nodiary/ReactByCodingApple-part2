
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { useState } from 'react';
import data from './data.js';
import bg from './img/bg.jpeg';
import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom';
import Main from './routes/Main.js';
import Detail from './routes/Detail.js';
function App() {
  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate();
  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">SHOEKER</Navbar.Brand>
          {/* <Link className="navbar-brand" to="/"></Link> */}
          <Nav className="me-auto">
            {/* v1
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#sale">Sale</Nav.Link>
            <Nav.Link href="#cart">Cart</Nav.Link> */}

            {/* v2
            <Link className="nav-link" to="/">호모로</Link>
            <Link className="nav-link" to="/detail">상페</Link> */}

            {/* v3-n */}
            <Nav.Link onClick={()=>{ navigate('/') }}>Home</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/detail') }}>Detail</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/event') }}>Event</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/admin') }}>Admin</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Main shoes={shoes}></Main>}/>
        {/* URL파라미터 */}
        <Route path="/detail/:id" element={<Detail shoes={shoes}></Detail>}/>
        <Route path="/cart" element={<div>cart</div>}/>
        <Route path="*" element={<div>없는페이지404</div>}/>
        {/* nested routes 예시 */}
        <Route path="/admin" element={<Admin/>}>
            <Route path="member" element={<div>멤버임</div>}></Route>
            <Route path="orders" element={<div>orders</div>}></Route>
        </Route>

        <Route path="/event" element={<Event/>}>
            <Route path="first-order" element={<div>첫 주문시 양배추즙 서비스</div>}></Route>
            <Route path="birthday" element={<div>생일기념 쿠폰받기</div>}></Route>
        </Route>
      </Routes>
    </div>
  );
}
function Admin(){
  return(
    <div>
      <h4>어드민임</h4>
      {/* nested routes 위치 잡아주기 */}
      <Outlet></Outlet>
    </div>
  )
}
function Event(){
  return(
    <div>
      <h4>오늘의 이벤트</h4>
      {/* nested routes 위치 잡아주기 */}
      <Outlet></Outlet>
    </div>
  )
}
export default App;
