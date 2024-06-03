import {createSlice} from '@reduxjs/toolkit'
import { todoActions } from './todoReducer';

const initialState={
    message:""
}

const notificationSlice = createSlice({
    name:'notification',
    initialState,
    reducers:{
        reset:(state)=>{
            state.message="";
        }
    },

    // //HADRCODING
    // extraReducers:{
    //     "todo/add":(state, action)=>{
    //         console.log("todo/add in notificationReducer");
    //       state.message="Todo is created";  
    //     }
    // }

    // //USING BUILDER
    // extraReducers:(builder)=>{
    //     builder.addCase(actions.add, (state, action)=>{
    //         state.message="Todo is created";
    //     })
    // }

    //USING MAP
    extraReducers: {
        //map objects : [key]:val
        [todoActions.add]:(state, action)=>{
            state.message = "Todo is created";
        }
    }


});

export const resetNotification = notificationSlice.actions.reset;
export const notificationReducer = notificationSlice.reducer;
export const notificationSelector = (state)=>state.notificationReducer.message;
