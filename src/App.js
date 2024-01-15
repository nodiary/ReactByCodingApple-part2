
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { createContext, useEffect, useState } from 'react';
import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom';
import axios from 'axios'

import data from './data.js';
import bg from './img/bg.jpeg';
import Main from './routes/Main.js';
import Detail from './routes/Detail.js';
import Cart from './routes/Cart.js';
import Watched from './routes/Watched.js';
import { useQuery } from 'react-query';
// context API
export let Context1 = createContext() // state 보관함

function App() {

  useEffect(()=>{
    const isExist = localStorage.hasOwnProperty('watchedList')
    if(isExist) return;
    localStorage.setItem('watchedList',JSON.stringify([]))
  },[])


  let [shoes, setShoes] = useState(data);
  let [stockCount, setStockCount] = useState([10, 11, 12]);
  let navigate = useNavigate();

  

  // react-query 사용
  // 장점 1. 성공/실패/로딩 쉽게 파악 가능
  let result = useQuery('작명', ()=>{
    return axios.get('https://codingapple1.github.io/userdata.json').then((result)=>{
      return result.data
    })
  })

  // result.data
  // result.isLoading
  // result.error

  return (
    <div className="App">
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          {/* v1 */}
          {/* <Navbar.Brand href="/">SHOEKER</Navbar.Brand> */}
          {/* v2 */}
          <Navbar.Brand onClick={()=>{ navigate('/') }}>SHOEKER</Navbar.Brand>
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
            <Nav.Link onClick={()=>{ navigate('/cart') }}>Cart</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/watched') }}>최근 본 상품</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            { result.isLoading ? '로딩중' : result.data.name }
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={
          <Context1.Provider value={{shoes, stockCount}}>
            <Main shoes={shoes} setShoes={setShoes}/>
          </Context1.Provider>
        }/>
        {/* URL파라미터 */}
        <Route path="/detail/:id" element={
          <Context1.Provider value={{stockCount, shoes}}>
            <Detail shoes={shoes}/>
          </Context1.Provider>
          }/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/watched" element={<Watched/>}/>
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
