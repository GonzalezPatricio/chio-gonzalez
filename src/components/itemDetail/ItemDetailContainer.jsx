import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getItemUno } from "../../utils/GetItem";
import ItemDetail from "../itemDetail/ItemDetail"; 


const ItemDetailContainer = () =>{
    const [product, setProduct] = useState({})
    const { idProducto } = useParams()
    
    useEffect(() => {
        getItemUno
        .then(resp => setProduct(resp))
        .catch(err => console.log(err))
    },[])

    console.log(idProducto)

    return(
        <>
          <ItemDetail product={product} />
        </>
    )
    
}

export default ItemDetailContainer