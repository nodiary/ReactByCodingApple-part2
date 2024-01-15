import { configureStore, createSlice } from '@reduxjs/toolkit'
import user from './store/userSlice.js'


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
    addCart(state, action){
      console.log('addCart!!!')
      let newItemObj = 
          { 
            id : action.payload.id,
            name : action.payload.title,
            count : 1
          }
      
      let tid = state.find(item => item.id === action.payload.id)
      if (tid){
        console.log('이미있음')
        return state.map(item =>
          item.id === action.payload.id ? { ...item, count: item.count + 1 } : item
        );
      }else {
        console.log('새로넣기')
        console.log(state)
        return [...state, newItemObj]
      }
      
    },
    deleteCartItem(state, action){
      const targetId = action.payload
      // const targetIndex = state.findIndex((item) => item.id === targetId)
      return state.filter(item => item.id !== targetId)
    },
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

export let { addCount, subsCount, addCart, deleteCartItem } = userCartList.actions

export default configureStore({
  reducer: { 
    user : user.reducer,
    stock : stock.reducer,
    userCartList : userCartList.reducer

  }
}) 