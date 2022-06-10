import { createContext,useState } from "react";



export const AppContext = createContext();

function AppContextProvider  ({children}){
    const [state,setState]= useState("light")

    const toggleTheme = ()=>{
        state === "light" ? setState("dark"):setState("light")
    }
    return(
        <AppContext.Provider value={[state,toggleTheme]} >
        
            <h1>Context</h1>
            {children}
        
        </AppContext.Provider>
    )
}

export default AppContextProvider;



 