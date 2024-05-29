
import { createSlice } from "@reduxjs/toolkit";
import { ADD_TODO, TOGGLE_TODO } from "../actions/todoActions";

const initialState={
    todos:[
        {text:"Go to Gym at 6", completed: false},
        {text: "Study at 8", completed: true}
    ]
}

// export function todoReducer(state=initialState, action){

//     switch(action.type){
//         case ADD_TODO:
//             return {
//                 ...state,
//                 todos:[
//                     ...state.todos,
//                     {
//                         text:action.text,
//                         completed: false
//                     }
//                 ]
//             }
//         case TOGGLE_TODO:
//             return{
//                 ...state,
//                 todos: state.todos.map((todo, i)=>{
//                     if(i==action.index){
//                         todo.completed=!todo.completed
//                     }
//                     return todo;
//                 })
//             }
//         default:
//             return state;
//     }
// }


//creating Reducer using Redux-Toolkit
const todoSlice = createSlice({
    name: 'todo',
    initialState: initialState,
    reducers:{
        //add-todo action
        add:(state,action)=>{
            state.todos.push({
                text: action.payload,
                completed: false
            })
        },
        //toggle-todo action
        toggle:(state,action)=>{
            state.todos.map((todo,index)=>{
                if(index == action.payload)
                    todo.completed = !todo.completed
            return todo;
            })
        }
    }
});

export const todoReducer = todoSlice.reducer; 
export const todoActions = todoSlice.actions;