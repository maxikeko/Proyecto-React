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
          <Link to="/">Productos</Link>
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
      </div>

      <div className="CardWidget">
        <CartWidget />
      </div>
    </nav>
  );
}

export default NavBar;
