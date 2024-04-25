import NavBar from "./componentes/NavBar/NavBar"
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer"
import './App.css'
function App(){
  return (
    <div>
      <NavBar />
      <ItemListContainer saludar="Bienvenidos al mejor ecommerce" />
    </div>
  )
}
export default App
