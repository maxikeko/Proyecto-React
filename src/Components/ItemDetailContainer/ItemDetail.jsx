import React from 'react'
import FlexWrapper from '../FlexWrapper/FlexWrapper'
import "./ItemDetail.css";
import Button from '../Button/Button';
import ItemCount from '../ItemCount/ItemCount';
function ItemDetail({product}) {
 


  return (
    <div>
      <FlexWrapper>
        <div className="mainDetail">
          <div className="card-img">
            <img src={product.img} alt={product.name}></img>
          </div>
          <div className="detail-items">
            <h2>{product.name}</h2>

            
            <p>Detalle: {product.detail}</p>
            <p>Stock: {product.stock}</p>

            <h4>$ {product.price}</h4>
          </div>

          <ItemCount product={product}/>

          


        </div>
      </FlexWrapper>
    </div>
  );
}

export default ItemDetail