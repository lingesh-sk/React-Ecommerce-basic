
import {createSlice} from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name:'user',
    initialState:{value:{
        name: "",
        age:null,
        email:""
    }},
    reducers:{
        login: (state,action)=>{
            state.value = action.payload
        },
        logout: (state)=>{
            state.value = {value:{
                name: "",
                age:null,
                email:""
            }}
        }
    }

})

export default userSlice.reducer;
export const {login,logout }= userSlice.actions