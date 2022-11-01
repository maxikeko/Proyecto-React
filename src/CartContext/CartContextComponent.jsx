import React from "react";
import { createContext, useState,useEffect } from "react";
export const cartContext = createContext();


function CartContextComponent({ children }) {
  const [cart, setCart] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [totalToPay, setTotalToPay] = useState(0);

  function addToCart(item, count) {
    let foundInCart = false;

    let cartAux = [...cart];

    for (let i = 0; i < cartAux.length; i++) {
      if (cartAux[i].id === item.id) {
        cartAux[i].count = cartAux[i].count + count;
        foundInCart = true;
      }
    }

    if (!foundInCart) {
      cartAux.push({ ...item, count });
    }

    setCart(cartAux);
  }


  function deleteFromCart(id){
    setCart(cart.filter(item=> item.id !==id))
  }

  function deleteAllFromCart(){
    setCart([]);
  }


  useEffect(() => {
    //contador de widget
    setTotalCount(cart.reduce((acc,item )=> acc + item.count ,0))
    //total a pagar
    setTotalToPay(cart.reduce((acc,item )=> acc + item.count *item.price,0))
  }, [cart]);


  useEffect(() => {
    console.log(totalToPay);
  }, [totalToPay]);
  return (
    <cartContext.Provider value={{ cart, addToCart,totalCount,totalToPay,deleteFromCart,deleteAllFromCart }}>
      {children}
    </cartContext.Provider>
  );
}

export default CartContextComponent;
