import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getItem } from "../../utils/GetItem";
import ItemDetail from "../itemDetail/ItemDetail"; 


const ItemDetailContainer = () =>{
  const [product, setProduct] = useState([])
  const { idProducto } = useParams()

useEffect(() => {
        if(idProducto === undefined){
          getItem
            .then(respu => setProduct(respu))
        }else{
          getItem
            .then(respu =>{
                setProduct(respu.find(item => parseInt(idProducto) === item.id))
      })
  }
}, [idProducto])

    console.log(idProducto)

    return(
        <>
          <ItemDetail product={product} />
        </>
    )
    
}

export default ItemDetailContainer