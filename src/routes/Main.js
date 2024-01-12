import { Link } from 'react-router-dom';
import axios from 'axios'

function Main(props){
    let shoes=props.shoes;
    return(
      <>
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
                  <Card key={idx} item={item}></Card>
                )
              })
            }
          </div>
        </div>
        <button onClick={()=>{
          // 로딩 on
          axios.get('https://codingapple1.github.io/shop/data2.json')
          .then((result)=>{
            console.log(result.data);
            let copy = [...shoes, ...result.data];
            props.setShoes(copy);
          })
          .catch(()=>{
            console.log('실패.');
            // 로딩 off
          })


          // 동시에 여러 ajax 요청하고 모든 요청이 완료된 후 작업...
          // Promise.all([axios.get('/url1'), axios.get('/url2')])
          //   .then(()=>{

          //   })
        }}>버튼</button>
      </>
    )
  }
  function Card (props){
    const item = props.item;
    const id = item.id;
    const title = item.title;
    const price = item.price;
    return(
      <div className="col-md-4">
        <Link to={`/detail/${id}`}>
          <img src={`https://codingapple1.github.io/shop/shoes${id+1}.jpg`} width="80%"/>
          <h4>{title}</h4>
          <p>{price}</p>
        </Link>
      </div>
    )
  }
export default Main; 