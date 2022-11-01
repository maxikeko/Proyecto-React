
import React, { useState, useEffect } from "react";
import {useParams} from "react-router-dom";
import {doc, getDoc,getFirestore} from "firebase/firestore";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer(props) {

  // utilizacion de useState 
  const [product , setProduct ] =useState({});
  const {id}= useParams();
  

  useEffect(() => {
    const db = getFirestore();
    const refDoc= doc(db,"products",id);
    getDoc(refDoc).then((item)=>{
      const aux ={
        ...item.data() , id: item.id
      }

     
      setProduct(aux);

  })
    

  }, [id]);

  
  

  return (
    <ItemDetail product={product}/>
  );
}

export default ItemDetailContainer;
