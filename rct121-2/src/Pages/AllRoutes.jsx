import { RegisterPageOne } from "./RegisterPageOne"
import { RegisterPageTwo } from "./RegisterPageTwo"
import { Dashboard } from "./Dashboard"
import {Routes,Route} from "react-router-dom"
export const AllRoutes =()=>{
    return(
        <div>
            <Routes>
                <Route path="/" element={<RegisterPageOne/>} ></Route>
                <Route path="/register/two" element={<RegisterPageTwo/>} ></Route>
                <Route path="/dashboard" element={<Dashboard/>} ></Route>
            </Routes>
        </div>
    )
}