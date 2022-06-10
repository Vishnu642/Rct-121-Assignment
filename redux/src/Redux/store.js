import { reducer } from "./reducer";
import {appActions,incrementCountActions} from "./action"
import {legacy_createStore} from "redux"

class Store{
    #reducer
    #state
    #listeners
    
    constructor(reducer,initState){
        this.#reducer = reducer;
        this.state = initState;
        this.#listeners = [] 

    }

    getState(){
        return this.#state
    }

    dispatch(action){
        const oldState = this.#state
        this.#state = this.#reducer(this.state,action);
        console.log(this.#state === oldState)
        if(oldState!==this.#state){
            this.#listeners.forEach((listener)=>listener());
        }
    }
    subscribe(listener){
        this.#listeners.push(listener);
    }

};

const initState = {count:0};
const store = legacy_createStore(reducer,initState);

store.subscribe(()=>{
    console.log(`store has updated`,store.getState());
});

store.dispatch(incrementCountActions(1))
store.dispatch(incrementCountActions(1))


export default store;