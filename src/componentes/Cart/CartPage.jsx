import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import "./CartPage.css"
const CartPage = () => {
  const {cart, borrarTodo, borrarProductoPorId, precioTotal} = useContext(CartContext)

  if(cart.length === 0){
    return(
      <div>
        <h2>El carrito esta vacio 😒</h2>
        <Link to="/">Ver Productos</Link>
      </div>
    )
  }
  
  return (
    <div>
      <h1>Carrito de Compra</h1>
      {
        cart.map((productoCarrito)=>{
          return(
            <div key={productoCarrito.id} className="cartContainer">
              <img src={productoCarrito.image} alt="" />
              <h3>{productoCarrito.name}</h3>
              <h3>Cantidad: {productoCarrito.quantity}</h3>
              <h3>Precio Unitario: {productoCarrito.price}</h3>
              <h3>Subtotal: {productoCarrito.price * productoCarrito.quantity} </h3>
              <button onClick={() => borrarProductoPorId(productoCarrito.id)}>Borrar producto</button>
          </div>
          )
        })
      }
      <h2>Total: $ {precioTotal()}</h2>
      <Link to="/checkout">Comprar</Link>
      <button onClick={borrarTodo}>Vaciar carrito</button>
    </div>
  )
}

export default CartPage