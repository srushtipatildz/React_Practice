// function printHello(){
//     console.log("Hellooooo")
// }

// function Click(){
//     return(
//         <div>
//             <button onClick={printHello}>Click Me!</button>
//         </div>
//     )
// }
// export default Click;
function printHello(){
 console.log("Hellooooooo")
}

function Hover(){
    return(
        <div>
            <button onMouseOver={printHello}>Hover On Me</button>
        </div>
    )
}
export default Hover;