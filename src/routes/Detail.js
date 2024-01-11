import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from 'styled-components';

// styled-components 라이브러리 사용.
// 스타일이 다른 js파일로 오염되지 않는다.
// 페이지 로딩 시간 단축.
// 오염방지하려면 컴포넌트.module.css로 파일명 변경 시 해당 js파일에만 종속되게 할 수있음

// let YellowBtn = styled.button`
//     background : ${props => props.bg};
//     color : ${props => props.bg == 'blue' ? 'white' : 'black'};
//     padding : 10px;
// `
// let Box = styled.div`
//     background : grey;
//     padding : 20px;
// `

// 기존 스타일 복사 가능

// let NewBtn = styled.button(YellowBtn)`

// `

function Detail(props) {
    // useEffect - mount, update시 코드 실행
    useEffect(()=>{
        setTimeout(()=>{}, 2000);
    })

    let [count, setCount] = useState(0);

    const {id} = useParams();
    const item = props.shoes.find((item) => item.id == id);

    return(
        <div className="container">
            {/* <EventBox></EventBox> */}
            <div className="alert alert-warning">
                2초이내 구매시 할인
            </div>
            {count}
            <button onClick={()=>{ setCount(count+1) }}>버튼</button>
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
function EventBox(){
    return (
        <div className="alert alert-warning">
            2초이내 구매시 할인
        </div>
    )
}
export default Detail;