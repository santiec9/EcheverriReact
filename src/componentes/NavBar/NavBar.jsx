import CartWidget from "./CartWidget"
import "./navbar.css"

const NavBar = () =>{
  
  return(
    <div className="nav-bar">
      <div>
        <img style={{width:"100px"}}src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAaVBMVEX///8AAADq6urt7e38/PzIyMjDw8Pw8PDZ2dlGRkb29vZycnKZmZnh4eGwsLBNTU0NDQ2goKA4ODgrKyslJSXT09M9PT1eXl4yMjK3t7eMjIySkpJsbGyEhIRSUlKnp6ceHh58fHwXFxftjbnVAAAEl0lEQVR4nO2c65aqMAyFy/1+EQREEGXe/yEP6jiKZKSBNmWdNd/PubmnlDTZbcrYH398xinOlmoNI9w60AZ61TpesNtcu9GqVvLAj/fag62IikvtSaBazQ0r0V45qdYzYIbpSJO2U62IMb3S3rBVS2JR/q5Jc1VrKiaStFJXrMmdalL+8kUXQJTiee5ngCbNUCvqBGny1GqKIU2a2hzBATV1jlJRLSiqVqoJiFADB6WamAeKKpRqgsKm8qRzsgxfydVqivaQKMUlw3l7bx5jJaDpqFiTD2hqFGti9uZevIHj9saJseBdU6ha0TCl3qLUXn2twJgxLvS6SLWgK/rrwneIVcu58yIqDxWnvz8YD1Ft7NN/ummCX/aD0vOqxjLG3zZ9xxhwfPi31qNb8e7YB8EpPFtcGa4bh0FyK7nyJGjOluin6hR9tn+6FmleNu4nYaZht4e3EjDNvcYV92ytE5SWZMffYpETT0Lpg0GXCEV+Da3/3+/+KZr864ZVQVXyc8C6YvUEq+HM+4dqN4qT9nHquUx/Z13eHiXzH5GWu+g6v0y96MHsEyBYUQuGnJ+heaew6TnG6IdsaZ6sd4hPQbMsiygOMjUtc61gs0IkFTpoAemteFWbG6cruCcIl+DiOSM0Aa6zJBBhdCaKi6PiN7On5ZIcLojqAja/xNNhEgaiCYV69UD7RDyoZUanGSjc0tdsUBNk6YgHachwp1BrqHAJsUMSN5F5p0WhCeuEgr6zYLAZi/9FIAprE9UEmtBpMMFSnGLrGF9q/XInwQ5UJF8TKtm8QREQ0IYQQThP0O4GQZTCW/6Sa+Ir6H0tU34qhQ4ITP/odgnhgHb9XfmLTIk2pggigod++QhMDXQ8p1iO8aIIrJZNisLPKQJRJdq9I5hT+DhFIOqC9vUpfE702lek8390LeiTjBFBLYM+Be7wbq2sAf36UbhA6JkOHh0VDLrsg48fiqXEVg4kPhD2JAVFoEKfsaQoRtFDRWPCIlNik2Kmo4/q0VjDyFhF4U8NZKimh4hgSb6Cy4oJCvcbLSYtBvsBZIBZbai21QZV/GOlU2QvdxDOdU8mSiu5NyGJdvtu7HkTdppdrActZ8VF4Fq/sG+45jtJ+vJCGnKEd50iJx7BM9/J4uc3XK1adPHzDl/OR/v8vvgKCaL85RvOdmD994OdEuA11onyzxsZpybSqM5vDVGdVRriAX9lA/bISgFjV1EN1R6hiWxW4fZudySaElytbJDEqi0aMCVSE0myhz/+DbdbimRJW5v0ub6oM0TyA1zW1+ZKjetLb3aQmVhdFmoC2hvFsbwp0ZEWQtfcgCHrsDx+K/kVOTu4+co7VXoZolZfVyAhWq2/UkV8viCik9sVvAh2AjQxZgmN7Pi+IhhboLuOKF9mKOY2ki5ZmXRdUh7m5FcCL3lxP5keVVgX+vWhmE5kxcdPP9oKbVJ+b6h/kLX2e4+xqYcJPGCp8JsBoJyvi38JzRZUOHoSrnjR+/H/nxw/LRZ+XY2fYyLpkpDiufGdnK3Z6RHVzUPX5TT/48sx6l2zsxHnjfTCtqfNyn/8t/wDJthMRbiYiSMAAAAASUVORK5CYII=" alt="Apple"  />
      </div>
      <ul>
        <li>Iphone</li>
        <li>Ipad</li>
        <li>MacBook</li>
      </ul>
      <CartWidget /> 
    </div>
  )
}


export default NavBar