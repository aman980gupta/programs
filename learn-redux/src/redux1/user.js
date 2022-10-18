import {createSlice} from "@reduxjs/toolkit"
const initialState = {name:"",age:0,email:""}

export const userSlice = createSlice({
    name:"user",
    initialState:{value:initialState},
    reducers:{
        login: (state,action)=>{
            state.value = action.payload
        },
        logOut: (state,action)=>{
            state.value = initialState
        }
    }
})
export const {login,logOut} = userSlice.actions

export default userSlice.reducer;