import NavBar from "./componentes/NavBar/NavBar"
import Footer from "./componentes/Footer/Footer"
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { CartProvider } from "./context/CartContext"
import CartPage from "./componentes/Cart/CartPage"
import Checkout from "./componentes/Checkout/Checkout"
import './App.css'
function App(){
  return (
    <BrowserRouter>
    <CartProvider>
      <NavBar />
      
        <Routes>
          <Route path = "/" element={<ItemListContainer saludar="Bienvenidos al mejor ecommerce" />} />
          <Route path = "/categoria/:idCategory" element={ <ItemListContainer saludar = "Bienvenido" />} />
          <Route path = "/detalles/:idProduct" element={ <ItemDetailContainer />} />
          <Route path="/cart" element={<CartPage/>} />
          <Route path="/checkout" element={<Checkout/>} />
        </Routes>
    </CartProvider>      
      
    </BrowserRouter>
  )
}
export default App
