import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getItemUno } from "../../utils/GetItem";
import ItemDetail from "../itemDetail/ItemDetail"; 


const ItemDetailContainer = () =>{
    const [product, setProduct] = useState({})
    const { idProducto } = useParams()
    
    useEffect(() => {
      if (idProducto) {
          getItemUno
        .then(info =>{
            setProduct(info.filter(item=> item.id===idProducto)) 
        })
        .catch(err => console.log(err))
      } else {
          getItemUno
          .then(info=> {
              setProduct(info)
          })
          .catch(error => console.log(error))
      }
    },[idProducto])

    console.log(idProducto)

    return(
        <>
          <ItemDetail product={product} />
        </>
    )
    
}

export default ItemDetailContainer