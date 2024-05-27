//ACTION CONSTANTS
export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";

//ACTIONS FUNCTIONS
const addTodo = (text) =>({ text, type: ADD_TODO });
const toggleTodo = (index) => ({index, type: TOGGLE_TODO});
