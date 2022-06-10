
import {combineReducers,legacy_createStore} from "redux";
import { initState,todosReducer } from "./todos/reducer";


// const rootReducer = combineReducers({
//     todoReducer : todosReducer
// })

const store = legacy_createStore(todosReducer,initState);
// console.log(`state`,store.getstate())

export default store;
