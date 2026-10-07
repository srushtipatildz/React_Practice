import { useState } from "react";

function Ludo(){
    let [count,setCount]=useState({blue:0,red:0,yellow:0,green:0});
    function incBlue(){
        setCount((currCount)=>{
            return{
              ...currCount, blue: currCount.blue + 1
            }
        });
        console.log(count.blue)
    }
    function Red(){
        setCount((currCount)=>{
            return{
              ...currCount, red: currCount.red + 1
            }
        });
        console.log(count.red)
    }
return (
<div>
<p>Blue Moves:{count.blue}</p>
<button onClick={incBlue}>Blue</button>
<p>Red Moves:{count.red}</p>
<button onClick={Red} >Red</button>
<p>Yellow Moves</p>
<button>Yellow</button>
<p>Green Moves</p>
<button>Green</button>

</div>
)
}

export default Ludo;