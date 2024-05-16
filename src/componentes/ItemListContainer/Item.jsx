import "./item.css"
import { Link } from "react-router-dom"
const Item = ({product}) =>{
    return(
        <div className="item-card"> 
            <img src={product.image}/>
            <p>{product.name}</p>
            <p>Precio:{product.price}</p>
            <Link to={"/detalles/" +product.id}>Ver detalles</Link>
        </div>
    )
}
export default Item