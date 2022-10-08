import React from 'react'
import FlexWrapper from '../FlexWrapper/FlexWrapper'
import "./ItemDetail.css";
import Button from '../Button/Button';
function ItemDetail(props) {
  return (
    <div>
        <FlexWrapper>

        <div className='mainDetail'>
        <h2>{props.title}</h2>
        <img className='tamañoImagen' src={props.img} alt="" />  
        <p>{props.detail}</p>
        <h3>$ {props.price}</h3>  
        <Button>{`Comprar`}</Button>
        </div>    
            
        </FlexWrapper>        
    </div>
  )
}

export default ItemDetail