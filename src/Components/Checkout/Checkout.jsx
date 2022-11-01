import { useContext, useState } from "react";
import { cartContext } from ".././../CartContext/CartContextComponent";
import { addDoc, collection, getFirestore } from "firebase/firestore";

function Checkout() {
  const { totalToPay, cart, deleteAllFromCart } = useContext(cartContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [orderId, setOrderId] = useState("");

  function verificarForm() {
    const order = {
      buyer: { name, tel, email },
      totalToPay,
      cart,
    };
    const db = getFirestore();
    const orders = collection(db, "orders");

    addDoc(orders, order).then(({ id }) => {
      setOrderId(id);
      deleteAllFromCart();
    });
  }

 
  return (
    <>
      {orderId ? (
        "Gracias por tu compra. Tu id de compra es: " + orderId
      ) : (
        <div>
          <h1>Terminar compra, Ingresar sus Datos:</h1>
          <p>Nombre:</p>
          <input
            type="text"
            placeholder="nombre"
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <p>Telefono:</p>
          <input
            type="tel"
            placeholder="telefono"
            onChange={(e) => setTel(e.target.value)}
          />
          <br />
          <p>Email:</p>
          <input
            type="email"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <button onClick={verificarForm}>Finalizar</button>
        </div>
      )}
    </>
  );
}

export default Checkout;
