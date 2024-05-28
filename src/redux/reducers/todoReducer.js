import { ADD_TODO, TOGGLE_TODO } from "../actions/todoActions";

const initial_state = {
  todos : [
    {text: "task 1", completed: false},
    {text: "task 2", completed: true}
  ]
}

export function todoReducer (state = initial_state, action){
  switch(action.type){
    case ADD_TODO:
      return {
        ...state,
        todos:[
          ...state.todos,
          {
            text: action.text,
            completed: false
          }
      ]}
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((t, i)=>{
          if(i==action.index)
            t.completed = !t.completed;
          return t;
        })
      }
    default: 
      return state;
  }
}
