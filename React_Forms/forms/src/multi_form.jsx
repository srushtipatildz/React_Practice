// multiple input form
import { useState } from "react";
function Forms(){
    let[formData,setFormData]=useState({
        fullName:"",
        userName:""
    })
    function handleInputChange(event){
      feildName=event.target.name

      console.log(event.target.name)
      console.log(event.target.value)
    }
  return(
    <form action="">
        <br /><br />
        <label htmlFor="name">Enter Name</label>
        <input type="text" name="fullName" id="name" value={formData.fullName} onChange={handleInputChange} />
        <br /><br />
        <label htmlFor="pass">Enter Password</label>
        <input type="text" name="userName" id="pass" value={formData.userName} onChange={handleInputChange} />
    </form>)
}

export default Forms;