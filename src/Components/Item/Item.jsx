import "./item.css";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
export default function Item({product}) {
  return (
    <>
      
      <div className="card">
      <Link to={`/producto/${product.id}`}>
        <div className="card-img">
          <img src={product.img} alt={product.name}></img>
        </div>
        <div className="card-detail">
          <h2>{product.name}</h2>
          
          <h4>$ {product.price}</h4>
        </div>
        
        
          <Button style={{cursor: "pointer"}}>Comprar</Button>
      </Link>
        
        
      </div>
    </>
  );
}
