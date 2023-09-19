import {createSlice} from "@reduxjs/toolkit"


const initialState={
    show:false
}

const modelSlice=createSlice({
    name:"model",
    initialState,
    reducers:{
        openModel:(state)=>{
            return {...state,show:true}
        },
        closeModel:(state)=>{
            return {...state,show:false}
        }
    }
})
export const {openModel,closeModel}=modelSlice.actions
export default modelSlice.reducer