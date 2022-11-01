import "./NavBar.css";
import "./CartWidget";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="Nav">
      <div className="LogoTitulo">
        <img
          className="Logo"
          src="https://maxikeko.github.io/Proyecto-Javascript-Bertoli-Maximiliano/img/logo.png"
          alt=""
        />
        <h1>Venta de PC</h1>
      </div>

      <div className="menu">
        <li>
          <Link to="/">Inicio</Link>
        </li>
        
        <li>
          <Link to="/category/Motherboard">Motherboard</Link>
        </li>
        <li>
          <Link to="/category/Procesador">Procesador</Link>
        </li>
        <li>
          <Link to="/category/Ram">Ram</Link>
        </li>

        
        <li>
          <Link to="/checkout">checkout</Link>
        </li>
      </div>

     <div>
    
        <CartWidget />
        <Link to="/Cart">Cart</Link>
     </div>
    
    </nav>
  );
}

export default NavBar;
