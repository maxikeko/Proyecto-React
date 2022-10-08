import React from 'react'
import FlexWrapper from '../FlexWrapper/FlexWrapper';
import Item from '../Item/Item';
function ItemList(props) {
  return (
    <div>
        <FlexWrapper>
          {/* Map */}
        {props.productList.map((producto) => {
          return (
            <Item
              key={producto.id}
              id={producto.id}
              title={producto.title}
              img={producto.img}
              price={producto.price}
              detail={producto.category}
            />
          );
        })}
      </FlexWrapper>
    </div>
  )
}

export default ItemList