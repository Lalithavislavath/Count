import { useState } from "react";
 
function Count(){
    const [count,setCount]=useState(0)
   const handlecount=()=>{
    setCount(count+1)
   }
    return(
        <div>
        <p>{count}</p>
       <button onClick={handlecount}>Increment</button>
        </div>
    )
}
export default Count;