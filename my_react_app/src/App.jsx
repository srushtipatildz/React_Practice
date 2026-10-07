import Product from "./Product";
import Price from "./price";
import Click from "./demo";
import Hover from "./demo"
function App() {
    
    return(
       <div className="container">
        <Product title={"Logitech MX"} des={"800 DPI"} price={8999}> </Product>
        <Product title={"Apple Pencil"} des={"Touch Surface"} price={8999}></Product>
        <Product title={"Zebronics"} des={"I Pad"} price={8999}></Product>
        <Hover></Hover>
       </div>
       
    )
}

export default App;
