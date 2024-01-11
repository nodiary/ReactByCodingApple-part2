function Main(){
    let [shoes, setShoes] = useState(data);
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
      </>
    )
  }
  function Card (props){
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
export default Main; 