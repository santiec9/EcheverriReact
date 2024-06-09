import ItemCount from "../ItemCount/ItemCount"
import "./itemDetail.css"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
const ItemDetail = ({product})=>{
    
    const {addProductCart} = useContext(CartContext)

    const addProduct = (count) =>{
        const productCart ={ ...product, quantity: count}
        addProductCart(productCart)
    }
    
    return(
        <div className="item-detail">
            <img src={product.image} alt="" />
            <div>
                <p>{product.name}</p>
                <p>{product.descripcion}</p>
                <p>${product.price}</p>    
                <ItemCount stock={product.stock} addProduct={addProduct}/>          
            </div>
 
        </div>
    )
}
export default ItemDetail