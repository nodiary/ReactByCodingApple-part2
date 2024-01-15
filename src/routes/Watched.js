import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

function Watched() {

  let states = useSelector((states) => states);
  let dispatch = useDispatch();
  let watchedList = JSON.parse(localStorage.getItem('watchedList'))
  let [watchedListState, setWatchedListState] = useState(watchedList)
  
  // useEffect(()=>{
  //   return ()=>{
  //     console.log('로컬스토리지에 변경된 list 적용!!!')
  //     console.log(watchedListState)
  //     localStorage.setItem('watchedList',JSON.stringify(watchedListState))
  //     console.log('로컬스토리지에 적용 이후!!!')
  //     console.log(JSON.parse(localStorage.getItem('watchedList')))
  //   }
  // },[watchedListState])
  return (
    <>
      <h6>{states.user.name} ({states.user.age}세)의 최근 본 목록</h6>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>삭제</th>
          </tr>
        </thead>
        <tbody>
          {Array.from(watchedListState.values()).map((item, i) => 
              <tr key={i}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>
                    <button onClick={()=>
                      deleteWatchedItem( watchedListState, setWatchedListState, item.id )}
                    >삭제</button>
                </td>
              </tr>
          )}
        </tbody>
      </Table>
    </>
  );
}
function deleteWatchedItem(watchedListState, setWatchedListState, id){

  let copy = [...watchedListState]
  let targetIndex = copy.findIndex(item=> item.id === id)
  copy.splice(targetIndex,1)
  setWatchedListState(copy)
  setTimeout(() => {
    console.log('로컬스토리지에 변경된 리스트 적용!!!');
    localStorage.setItem('watchedList', JSON.stringify(copy))
  }, 0);
}
export default Watched;
