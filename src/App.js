
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { useState } from 'react';
import data from './data.js';
import bg from './img/bg.jpeg';


function App() {

  let [shoes, setShoes] = useState(data);

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

      <div className="main-bg"></div>

      <div className="container">
        <div className="row">
          
          {/* pulbic 폴더 이미지 사용 권장 방식 */}
          {/* <img src={process.env.PUBLIC_URL + '/logo192.png'} */}

          {/* v1 */}
          {/* <div className="col-md-4">
            <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="80%"/>
            <h4>{shoes[0].title}</h4>
            <p>{shoes[0].price}</p>
          </div>
          <div className="col-md-4">
            <img src="https://codingapple1.github.io/shop/shoes2.jpg" width="80%"/>
            <h4>{shoes[1].title}</h4>
            <p>{shoes[1].price}</p>
          </div>
          <div className="col-md-4">
            <img src="https://codingapple1.github.io/shop/shoes3.jpg" width="80%"/>
            <h4>{shoes[2].title}</h4>
            <p>{shoes[2].price}</p>
          </div> */}

          {/* v2 */}
          {
            shoes.map((item,idx) => {
              return(
                <ListItem key={idx} item={item}></ListItem>
              )
            })
          }
        </div>
      </div>
    </div>
  );
}
function ListItem (props){
  const id = props.item.id;
  const title = props.item.title;
  const price = props.item.price;
  return(
    <div className="col-md-4">
      <img src={`https://codingapple1.github.io/shop/shoes${id+1}.jpg`} width="80%"/>
      <h4>{title}</h4>
      <p>{price}</p>
    </div>
  )
}
export default App;
