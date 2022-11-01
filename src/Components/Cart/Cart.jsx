import React from 'react'
import { cartContext } from "../../CartContext/CartContextComponent"
import {useContext}from "react";
import {Link} from "react-router-dom";

function Cart() {
  
const {cart,totalCount,totalToPay,deleteFromCart} = useContext(cartContext);
  return (
  <>
  {cart.map((item)=>(
   
   
   <div key={item.id}>
    {item.name + " " + item.count }<span style={{cursor: "pointer"}} onClick={()=>deleteFromCart(item.id)}>🗑️</span>
   </div>

   
  ))}
  
  <div>Tienes en el carro: {totalCount} a pagar: {totalToPay}</div>
  
  <Link to="/checkout">Terminar Compra</Link>
  
  </>
  )
}

export default Cart