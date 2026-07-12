//Prop Drilling - it is the situation where we parent want to pass the data/props to its childs-childs-childs, then it has to pass through first child to second child to the last/the third child which want to access that data/prop
//to avoid this we use context hook
//step 1: import createContext
import { createContext, useState } from "react";
import Child1 from "./7_child1";
//step 2: create context 
const newcontext=createContext();

function UseContext(){
    const [name,changename]=useState("Prajwal");
    return (
        <>
{/* step 3: add provider  */}
            <newcontext.Provider value={name}>
                <div>
                    <Child1/>
                </div>
            </newcontext.Provider>
        </>
    )
}
export default UseContext;
{/* step 4: export it  */}
export {newcontext};