import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addCount, subsCount, deleteCartItem } from "./../store.js";
import { changeName, changeAge } from "./../store/userSlice.js"
function Cart() {
  let user = useSelector((states) => states.user)
  let userCartList = useSelector((states) => states.userCartList);

  let dispatch = useDispatch();
  return (
    <>
      <h6>{user.name} ({user.age}세)의 장바구니</h6>
      <button onClick={()=>{
        dispatch(changeAge(1))
      }}>버톤</button>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
            <th>삭제</th>
          </tr>
        </thead>
        <tbody>
          {userCartList.map((item, i) => 
              <tr key={i}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.count}</td>   
                <td>
                    <button onClick={()=>{
                        dispatch(addCount(item.id))
                    }}>+</button>
                    <button onClick={()=>{
                        dispatch(subsCount(item.id))
                    }}>-</button>
                </td>
                <td>
                    <button onClick={()=>{
                        dispatch(deleteCartItem(item.id))
                    }}>삭제</button>
                </td>
              </tr>
          )}
        </tbody>
      </Table>
    </>
  );
}

export default Cart;
