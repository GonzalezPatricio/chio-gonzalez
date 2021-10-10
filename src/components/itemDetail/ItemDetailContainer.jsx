import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ItemDetail from "../itemDetail/ItemDetail"; 
import { Spinner } from "react-bootstrap";
import { getFirestore } from "../../services/getFireBase";


const ItemDetailContainer = () =>{
  const [product, setProduct] = useState({})
  const [loading, setLoading] = useState(true)
  const { idProducto } = useParams()

    useEffect(() => {


        const dbQuery = getFirestore()

        dbQuery.collection('items').doc(idProducto).get()
        .then(resp => {
            setProduct({id: resp.id, ...resp.data()})
        })
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))                   
        
    }, [idProducto])


    return(
        <React.Fragment>
          { loading ? <h2> Cargando.... 
                <br />
                <br />
                <Spinner animation="border" role="status" variant="info" ><span className="visually-hidden">Cargando...!!!</span>
                </Spinner></h2> : <ItemDetail product={product}/>}
        </React.Fragment>
    )
    
}

export default ItemDetailContainer