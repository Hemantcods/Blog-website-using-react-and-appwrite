import { createSlice } from "@reduxjs/toolkit";

const initialState={
    status:'false',
    UserData:null
}

const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        login:(state,action)=>{
            state.status='true';
            state.UserData=action.payload.UserData;
            // You can also store the token if needed
        },
        logout:(state)=>{
            state.status='false';
            state.UserData=null;
        }
    }
})

export 
export default authSlice.reducer;
