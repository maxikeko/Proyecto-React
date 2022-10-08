import "./item.css";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
export default function Item(props) {
  return (
    <>
      <div className="card">
        <div className="card-img">
          <img src={props.img} alt=""></img>
        </div>
        <div className="card-detail">
          <h2>{props.title}</h2>
          
          <h4>$ {props.price}</h4>
        </div>

        <Link to={`/producto/${props.id}`}>
          <Button>Comprar</Button>
        </Link>
      </div>
    </>
  );
}
