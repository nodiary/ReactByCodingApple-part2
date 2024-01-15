import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeName, addCount, subsCount } from "./../store.js";
function Cart() {
  let user = useSelector((states) => states.user)
  let userCartList = useSelector((states) => states.userCartList);

  let dispatch = useDispatch();
  return (
    <>
      {user}의 장바구니
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
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
              </tr>
          )}
        </tbody>
      </Table>
    </>
  );
}

export default Cart;
