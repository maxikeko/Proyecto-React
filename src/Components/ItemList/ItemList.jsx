import React from 'react'
import FlexWrapper from '../FlexWrapper/FlexWrapper';
import Item from '../Item/Item';
function ItemList({products}) {
  return (
    <div>
        <FlexWrapper>
          
          {/* Map*/}
        {products.map((product) => {
          
          return (
            <Item key={product.id} product={product} />
            )
            // <Item
            //   key={producto.id}
            //   id={producto.id}
            //   title={producto.title}
            //   img={producto.img}
            //   price={producto.price}
            //   detail={producto.category}
            // />
        })} 
      </FlexWrapper>
    </div>
  )
}

export default ItemList