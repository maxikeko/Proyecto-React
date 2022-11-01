import React from 'react'
import { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react'
import { cartContext } from '../../CartContext/CartContextComponent';
import {Link} from 'react-router-dom';

function ItemCount({product}) {
  const [count, setCount] = useState(1);
  const [removeButton, setRemoveButton] = useState(false);
  
  const { cart,addToCart} = useContext(cartContext);


  function sum(){
    if(count < product.stock){
        setCount(count+1);
    }
  }

  function res(){
    if(count>1){
        setCount(count-1)
    }
    else{
        setCount(1);
    }
  }
  function onAdd(){
    addToCart(product,count);
    setRemoveButton(true);
  }


  useEffect(() => {
    console.log(cart)
  }, [cart]);

    return (
      <>
        <div>
          <span style={{ cursor: "pointer" }} onClick={sum}>
            +
          </span>
          {count}
          <span style={{ cursor: "pointer" }} onClick={res}>
            -
          </span>
        </div>
        <div>
          {removeButton?
          <>
           Producto Agregado..
           
           <Link to="/">Seguir Comprando</Link>
           <Link to="/checkout">Terminar Compra</Link>
            
          </>
           
           :(<button onClick={onAdd}>Comprar</button>) }
        </div>
      </>
    );
}

export default ItemCount