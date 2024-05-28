import * as redux from 'redux'
import { todoReducer } from './reducers/todoReducer'

export const todoStore = redux.createStore(todoReducer);