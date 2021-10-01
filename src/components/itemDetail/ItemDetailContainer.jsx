import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getItem } from "../../utils/GetItem";
import ItemDetail from "../itemDetail/ItemDetail"; 
import { Spinner } from "react-bootstrap";


const ItemDetailContainer = () =>{
  const [product, setProduct] = useState([])
  const [loading, setLoading] = useState(true)
  const { idProducto } = useParams()

useEffect(() => {
        if(idProducto === undefined){
          getItem
            .then(respu => setProduct(respu))
            .finally(()=> setLoading(false))
        }else{
          getItem
            .then(respu =>{
                setProduct(respu.find(item => parseInt(idProducto) === item.id))
      })
            .finally(()=> setLoading(false))    
  }
}, [idProducto])

    return(
        <React.Fragment>
          { loading ? <h2> Cargando.... 
                <br />
                <br />
                <Spinner animation="border" role="status" variant="info" ><span className="visually-hidden">Cargando...!!!</span>
                </Spinner></h2> : <ItemDetail product={product} key={product.id}/>}
        </React.Fragment>
    )
    
}

export default ItemDetailContainer