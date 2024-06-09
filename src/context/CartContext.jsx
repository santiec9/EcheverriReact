import { createContext, useState } from "react";

const CartContext = createContext()

const CartProvider = ({children}) =>{
    const [cart, setCart] = useState([])

    const addProductCart = (newProduct) =>{
        const condicion = estaEnElCarrito(newProduct.id)
        if(condicion){
            const productosModificados = cart.map((productoCarrito)=>{
                if(productoCarrito.id === newProduct.id){
                    return { ...productoCarrito, quantity: productoCarrito.quantity + newProduct.quantity}
                }else{
                    return productoCarrito
                }
            })
            setCart(productosModificados)
        }else{
            setCart([ ...cart, newProduct])
        }
        
    }
    const totalQuantity = () =>{
        const totalQuantityProduct = cart.reduce((total, product)=> total + product.quantity, 0)
        return totalQuantityProduct
    }
    const precioTotal = () =>{
        const totalCompra = cart.reduce((total, productoCarrito)=> total + (productoCarrito.price * productoCarrito.quantity), 0)
        return totalCompra
    }
    const borrarTodo = () =>{
        setCart([])
    }
    const estaEnElCarrito = (idProducto) =>{
        const condicion = cart.some((productoCarrito) => productoCarrito.id === idProducto);
        return condicion
    }

    const borrarProductoPorId = (idProducto) =>{
        const productosFiltrados = cart.filter((productoCarrito)=> productoCarrito.id !==idProducto)
        setCart(productosFiltrados)
    }


    return(
        <CartContext.Provider value={{cart, addProductCart, totalQuantity, borrarTodo, borrarProductoPorId, precioTotal}}>
            {children}
        </CartContext.Provider>
    )
}
export {CartProvider, CartContext }