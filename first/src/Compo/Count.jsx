import { useState } from "react";
 
function Count(){
    const [count,setCount]=useState(0)
   const handlecount=()=>{
    setCount(count+1)
   }

   const handlecounter=()=>{
    setCount(count-1)
   }
   const handleClear=()=>{
    setCount(0) 
   }
    return(
        <div>
        <p>{count}</p>
       <button onClick={handlecount}>Increment</button>
       <button onClick={handlecounter}>decrement</button>
       <button onClick={handleClear}>Reset</button>
        </div>
    )
}
export default Count;