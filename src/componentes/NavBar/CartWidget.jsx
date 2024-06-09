import { IoCart } from "react-icons/io5";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./cartwidget.css"


const CartWidget =()=>{
    const {totalQuantity} = useContext(CartContext)
    let cantidad = totalQuantity()
    return(
        <Link to="/cart" className="cart-widget">
            <IoCart size={30} />
            <p>{cantidad >= 1 && cantidad}</p>
        </Link>
    )
}
export default CartWidget