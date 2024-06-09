import { useState } from "react"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Timestamp, addDoc, collection, doc, setDoc } from "firebase/firestore"
import db from "../../db/db.js"

const Checkout = () => {
    const [datosForm, setDatosform] = useState({
        nombre: "",
        telefono: "",
        email: "",
    })
    const [idOrden,SetidOrden] = useState(null)
    const {cart, precioTotal, borrarTodo} = useContext(CartContext)
    const handleChangeInput = (event) =>{
        setDatosform({ ...datosForm, [event.target.name]: event.target.value})
    }
    const handleSubmitForm = (event) =>{
         event.preventDefault()
         const orden = {
            comprador: { ...datosForm},
            productos: [ ...cart],
            fecha: Timestamp.fromDate(new Date()),
            total: precioTotal(),
        }
        generateOrder(orden)
    }
    const generateOrder = (orden) =>{
        const ordenesRef = collection(db, "orders")
        addDoc(ordenesRef, orden)
            .then((respuesta)=> SetidOrden(respuesta.id))
            .finally(()=>{
                updateStock()
                borrarTodo()
            })
    }

    const updateStock = ()=>{
        cart.map((productoCarrito)=>{
            let quantity = productoCarrito.quantity
            delete productoCarrito.quantity
            
            const productoRef = doc(db, "productos", productoCarrito.id)
            setDoc(productoRef, { ...productoCarrito, stock: productoCarrito.stock - quantity})
            .then(()=> console.log("Stock update"))
        })
    }
  return (
    <div>
        {
            idOrden ? (
                <div>
                    <h2>Orgen generada con exito</h2>
                    <p>Guarde el id de su orden: {idOrden}</p>
                </div>
            ):(
                <form onSubmit={handleSubmitForm}>
                <label>Nombre:</label>
                <input type="text" name="nombre" value={datosForm.nombre} onChange={handleChangeInput}/>
    
                <label>Telefono:</label>
                <input type="text" name="telefono" value={datosForm.telefono} onChange={handleChangeInput}/>
    
                <label>Email:</label>
                <input type="text" name="email" value={datosForm.email} onChange={handleChangeInput}/>
    
                <button type="submit">Comprar</button>
    
            </form>
            )
        }

    </div>
  )
}

export default Checkout