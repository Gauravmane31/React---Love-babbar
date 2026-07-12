import { useContext } from "react";
import { newcontext } from "./7_useContextHook";
{/* step 5: import*/}

function  Child3(){
{/* step 6: take the content of it in variable*/}
    const user=useContext(newcontext);
    return(
        <div>
{/* step 7: access it*/}
            Hello Jii, Good morning {user}!!
        </div>
    )
}
export default Child3;