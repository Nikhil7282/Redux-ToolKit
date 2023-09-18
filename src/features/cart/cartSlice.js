import {createSlice} from "@reduxjs/toolkit"
import cartItems from "../../cartItems"


const initialState = {
  cartItems: cartItems,
  amount: 10,
  total: 0,
  isLoading: true,
};

const cartSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{
      clearCart:(state)=>{
        return {...state,cartItems:[]}
      },
      removeItem:(state,action)=>{
        // console.log(action);
        state.cartItems=state.cartItems.filter((item)=>item.id!==action.payload)
      },
      increaseItem:(state,action)=>{
        // console.log(action);
        const item=state.cartItems.find((item)=>item.id===action.payload)
        item.amount=item.amount+1
      },
      decreaseItem:(state,action)=>{
        const item=state.cartItems.find((item)=>item.id===action.payload)
        if(item.amount<=1){
          state.cartItems=state.cartItems.filter((item)=>item.id!==action.payload)
        }
        item.amount=item.amount-1
      },
      total:(state)=>{
        let amount=0;
        let total=0;
        state.cartItems.forEach((item)=>{
          amount +=item.amount
          total +=item.amount*item.price
        })
        state.amount=amount
        state.total=total
      }
    }
})

// console.log(cartSlice);

export const {clearCart,removeItem,increaseItem,decreaseItem,total}=cartSlice.actions
export default cartSlice.reducer