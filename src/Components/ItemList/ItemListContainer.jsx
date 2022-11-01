import "./ItemListContainer.css";
import {getProductos,getProductsByCategory} from "../mockAPI/mockAPI";
import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import {useParams} from "react-router-dom";
import {collection, getDocs,getFirestore,query,where} from "firebase/firestore";

function ItemListContainer(props) {

  // utilizacion de useState 
  const [products , setProducts ] =useState([]);
  
  const {categoryID}= useParams();
  


  useEffect(() => {
    const db = getFirestore();
    let miCollection;
    // si estoy en home o inicio o sin categoria muestra toda la coleccion
    if(categoryID === undefined){
      

      miCollection =collection(db, "products");
      
    
    }else{ //sino muestro filtrado por category con query y where
     
      

      miCollection = query(collection(db, "products"),where("idCategory", "==",categoryID)) ;

    }
    getDocs(miCollection).then((data)=>{
      

      const auxProducts = data.docs.map(product =>({
        ...product.data() , id: product.id
      }))

      setProducts(auxProducts);

  })
    

  }, [categoryID]);

  
  

  return (
    
      <div className="tituloItems">
        <h3>{props.greeting}</h3>
        
        <ItemList products={products} />
      </div>
     
  );
}

export default ItemListContainer;
