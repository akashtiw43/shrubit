import { createSlice } from "@reduxjs/toolkit";
const initialState={
    isOpen:false
}
const modalSlice=createSlice({
    name:'modal',
    initialState,
    reducers:{
        OpenModal:(state)=>{state.isOpen=true},
        CloseModal:(state)=>{state.isOpen=false}
    }
})
export const {OpenModal, CloseModal}=modalSlice.actions
export default modalSlice.reducer
