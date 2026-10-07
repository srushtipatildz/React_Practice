import { useState } from "react";
import Ludo from "./Ludo";
function Counter(){
 let[count,setCount]= useState(0);
 function incCount(){
    setCount((currCount)=>{
      return currCount+1
    })
     setCount((currCount)=>{
      return  currCount+1
    })
    console.log(count)
 }
 return(
    <div>
        <h1>Count:{count}</h1>
        <button onClick={incCount}>Increase count </button>
    </div>
 )
}
function App(){
return(
   <Ludo></Ludo>
)
}
export {Counter,App};

