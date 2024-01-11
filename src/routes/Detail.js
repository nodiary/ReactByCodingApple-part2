import { useParams } from "react-router-dom";

function Detail(props) {
    const {id} = useParams();
    const item = props.shoes.find((item) => item.id == id);
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                <img src={"https://codingapple1.github.io/shop/shoes"+(item.id+1)+".jpg"} width="100%" />
                </div>
                <div className="col-md-6">
                <h4 className="pt-5">{item.title}</h4>
                <p>{item.content}</p>
                <p>{item.price}원</p>
                <button className="btn btn-danger">주문하기</button> 
                </div>
            </div>
        </div> 
    )
}
export default Detail;