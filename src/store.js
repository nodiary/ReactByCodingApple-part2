import { configureStore, createSlice } from '@reduxjs/toolkit'

let user = createSlice({
  name : 'user',
  initialState : 'kim',
  reducers : {
    changeName(state){
      return 'john' + state;
    }
  }
})

export let { changeName } = user.actions

let stock = createSlice({
  name : 'stock',
  initialState : [10, 11, 12]
})

let userCartList = createSlice({
  name : 'userCartList',
  initialState : 
    [
      {id : 0, name : 'White and Black', count : 2},
      {id : 2, name : 'Grey Yordan', count : 1}
    ] ,
  reducers : {
    addCount(state, action){
      const { payload: id } = action;
      return state.map(item =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      );
    } ,
    
    subsCount(state, action){
      const { payload: id } = action;
      return state.map(item =>
        item.id === id ? { ...item, count: Math.max(item.count - 1, 0) } : item
      );
    }
  }
})

export let { addCount, subsCount } = userCartList.actions

export default configureStore({
  reducer: { 
    user : user.reducer,
    stock : stock.reducer,
    userCartList : userCartList.reducer

  }
}) 