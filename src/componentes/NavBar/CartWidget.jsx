import { IoCart } from "react-icons/io5";
import "./cartwidget.css"


const CartWidget =()=>{
    return(
        <div className="cart-widget">
            <IoCart size={30} />
            <p>2</p>

        </div>
    )
}
export default CartWidget