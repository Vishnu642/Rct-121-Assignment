

import { createContext, useState } from "react"
import store from "./store"

export const ReduxContext = createContext();
function ReduxProvider({children}){
    
    return(
    <ReduxContext.Provider value={[store.getState.bind(store), store.dispatch.bind(store)]} >
        {children}
    </ReduxContext.Provider>
    )
} 

export default ReduxProvider;