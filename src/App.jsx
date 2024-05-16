import NavBar from "./componentes/NavBar/NavBar"
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
function App(){
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path = "/" element={<ItemListContainer saludar="Bienvenidos al mejor ecommerce" />} />
        <Route path = "/categoria/:idCategory" element={ <ItemListContainer saludar = "Bienvenido" />} />
        <Route path = "/detalles/:idProduct" element={ <ItemDetailContainer />} />
      </Routes>
      
      
    </BrowserRouter>
  )
}
export default App
