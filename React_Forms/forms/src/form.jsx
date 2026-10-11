// single input form
import { useState } from "react";
function Form(){
   let[fullName,setFullName]=useState("srushti")
  function nameChange(event) {
    console.log(event.target.value);
    setFullName(event.target.value)
}
return(
   <form action="">
      <label htmlFor="username">Full Name</label>
    <input  type="text" name="" id="username" placeholder="Enter Name" value={fullName} onChange={nameChange}/>
    <button>Submit</button>
   </form>
)
}
export default Form;