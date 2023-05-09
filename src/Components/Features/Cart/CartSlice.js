import { createSlice } from "@reduxjs/toolkit";
import data from "../../Data"
const initialState={
    cartItems:data,
    amount:0,
    total:0,
    isLoading:true
}
const cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        clearCart:(state)=>{
            state.cartItems=[]
        },
        removeItem:(state,action)=>{
            const id=action.payload;
            state.cartItems=state.cartItems.filter((item)=>item.id!=id)
        },
        increase:(state,{payload})=>{
            const currItem=state.cartItems.find((item)=>item.id===payload)
            currItem.qty=currItem.qty+1
        },
        decrease:(state,{payload})=>{
            const currItem=state.cartItems.find((item)=>item.id===payload)
            currItem.qty= currItem.qty-1
        },
        summation:(state)=>{
            let amt=0
            let total=0
            state.cartItems.forEach((item)=> {
                amt+=item.qty
                total+=item.qty*item.price
            })
            state.amount=amt
            state.total=total
        }
        
    }
})

export const { clearCart , removeItem , increase , decrease , summation} = cartSlice.actions
export default cartSlice.reducer