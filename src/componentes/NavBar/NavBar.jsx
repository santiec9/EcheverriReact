import { Link } from "react-router-dom"
import CartWidget from "./CartWidget"
import "./navbar.css"

const NavBar = () =>{
  
  return(
    <div className="nav-bar">
      <div>
        <Link to="/"><img style={{width:"100px"}}src="data:image/png;base64,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" alt="Apple"  /></Link>
        
      </div>
      <ul>
        <Link to="/categoria/iphone">Iphone</Link>
        <Link to="/categoria/ipad">Ipad</Link>
        <Link to="/categoria/macbook">MacBook</Link>
      </ul>
      <CartWidget /> 
    </div>
  )
}


export default NavBar