import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
function Cart() {

    // let states = useSelector((states) => { return states })
    // let user = useSelector((states) => states.user)
    // let stock = useSelector((states )=> states.stock)
    let userCartList = useSelector((states) => states.userCartList)
  return (
    <>
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
          {
            userCartList.map((item)=>{
                return (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.count}</td>
                        <td>안녕</td>
                    </tr>
                )   
            })
          }
          
        </tbody>
      </Table>
    </>
  );
}

export default Cart;
