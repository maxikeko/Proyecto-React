import "./NavBar.css";
import "./CartWidget";
import CartWidget from "./CartWidget";
function NavBar(){

    return(
        <nav className="Nav">
            <div className="LogoTitulo">
                <img className="Logo" src="https://maxikeko.github.io/Proyecto-Javascript-Bertoli-Maximiliano/img/logo.png" alt="" />
                <h1>
                    Venta de PC
                </h1>
            </div>
          


            <div className="menu">
                <li >
                    <a href="#">Inicio</a>

                </li>
                <li>
                    <a href="#">Productos</a>

                </li>
                <li>
                    <a href="#">Nosotros</a>

                </li>
                <li>
                    <a href="#">Contacto</a>

                </li>
            
            </div>

            <div className="CardWidget">
                <CartWidget/>
            </div>





        </nav>
       
       
    );
        
   
}

export default NavBar;