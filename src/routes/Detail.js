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

    let [count, setCount] = useState(0);
    let [boxSwitch, setBoxSwitch] = useState(true);
    let [inputValue, setInputValue] = useState('');
    // useEffect - mount, update시 코드 실행
    // mount 될 때만 작동시키려면 [] 추가
    // state가 업데이트 될 때만 작동하려면 []안에 state 추가
    useEffect(()=>{
        let a = setTimeout(()=>{ setBoxSwitch(false) }, 2000);
        
        // useEffect 동작 전 실행. 
        return () => {
            // 기존 코드(타이머 or 서버 데이터 요청) 제거
            clearTimeout(a)
        }
    }, [])
    /*
        1. 재렌더링마다 코드 실행
        useEffect(()=>{  })

        2. mount시 1회 코드 실행
        useEffect(()=>{  }, [])

        3. unmount시 1회 코드 실행
        useEffect(()=>{ 
            return ()=>{
                =====HERE!!!===== 
            }
        }, [])

        4. useEffect 실행 전에 뭔가 실행하려면 언제나 return ()=>{}
    */
     
    useEffect(()=>{
        if(isNaN(inputValue)){
            alert("DON'T DO THAT!")
            setInputValue('')
        }
    },[inputValue])
    
    const {id} = useParams();
    const item = props.shoes.find((item) => item.id == id);

    return(
        <div className="container">
            {
                boxSwitch == true ? 
                <EventBox></EventBox> : null
            }
            
            {count}
            <button onClick={()=>{ setCount(count+1) }}>버튼</button>
            <div className="row">
                <div className="col-md-6">
                    <img src={"https://codingapple1.github.io/shop/shoes"+(item.id+1)+".jpg"} width="100%" />
                </div>
                
                <input 
                    type="text"
                    value={inputValue}
                    onChange={(e)=>{setInputValue(e.target.value)}} />
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