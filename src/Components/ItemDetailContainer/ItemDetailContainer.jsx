
import {getUnProducto} from "../mockAPI/mockAPI";
import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import {useParams} from "react-router-dom";

function ItemDetailContainer(props) {
  const [unProducto, setUnProducto] = useState([]);
  
  const { id } = useParams();


  useEffect(() => {
    getUnProducto(id).then((data) => setUnProducto(data));
  }, [id]);

  return (
    <>
      <ItemDetail
              key={unProducto.id}
              title={unProducto.title}
              img={unProducto.img}
              price={unProducto.price}
              detail={unProducto.detail}
            />
    </>
  );
}

export default ItemDetailContainer;
