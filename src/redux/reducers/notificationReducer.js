import {createSlice} from '@reduxjs/toolkit'

const initialState={
    message:""
}

const notificationSlice = createSlice({
    name:'notification',
    initialState,
    reducers:{
    },
    extraReducers:{
        "todo/add":(state, action)=>{
            console.log("todo/add in notificationReducer");
          state.message="Todo is created";  
        }
    }
});

export const notificationReducer = notificationSlice.reducer;
export const notificationSelector = (state)=>state.notificationReducer.message;
