import redux from 'redux'
import { todoReducer } from '../reducers/todoReducer'

const todoStore = redux.createStore(todoReducer);
export default todoStore;