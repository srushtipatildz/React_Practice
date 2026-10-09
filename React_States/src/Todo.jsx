import { useState } from "react";

function Todo(){
    let [state,setState]=useState(["Sample Task"])
    return(
        <div>
            <h1>TO DO LIST</h1>
            <input type="text" name="" id="" />
            <button>Add Task</button>
            <ul>
               {
                state.map((todo)=>(
                    <li>{todo}</li>
                ))
               }
            </ul>
        </div>
    )
}

export default Todo;