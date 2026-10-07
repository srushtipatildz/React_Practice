import "./Product.css"
import Price from "./price";
function Product({title,des,price}){
return(
    <div className="Product">
     <h1>{title}</h1>
     <p>{des}</p>
     <Price price={price}></Price>
    </div>
)

}
export default Product;