import "./ItemListContainer.css";
import {getProductos,getProductsByCategory} from "../mockAPI/mockAPI";
import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import {useParams} from "react-router-dom";

function ItemListContainer(props) {

  // utilizacion de useState 
  const [productList, setProductList] = useState([]);

  const {categoryID}= useParams();
  console.log(categoryID);
  // utilizacion de  useEffect y llamado resolve de la promesa
  useEffect(() => {
    if(categoryID=== undefined){
      getProductos().then((data) => setProductList(data));
    }
    else{
      getProductsByCategory(categoryID).then((data) => setProductList(data));
    }
  }, [categoryID]);

  return (
    
      <div className="tituloItems">
        <h3>{props.greeting}</h3>
        <ItemList productList={productList} />
      </div>
     
  );
}

export default ItemListContainer;
