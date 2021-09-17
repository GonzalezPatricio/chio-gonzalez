import React, { useEffect, useState } from "react";
import "../itemListContainer/itemListContainer.css";
import { ItemList } from "../itemList/ItemList";
import { useParams } from "react-router";
import { getItem } from "../../utils/GetItem";
import { Spinner } from "react-bootstrap";



const ItemListContainer = ({greeting, pHome}) => {
    
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)

    const { idCategoria } = useParams()

    useEffect(() =>{
        if(idCategoria) {
            getItem
            .then(info =>{
                setItems(info.filter(item=> item.categoria===idCategoria))
            })
            .catch(error => console.log(error))
            .finally(()=> setLoading(false))
        } else {
            getItem
            .then(info =>{
                setItems(info)
            })
            .catch(error => console.log(error))
            .finally(()=> setLoading(false))
        }
    },[idCategoria])
    console.log(idCategoria);


    return (
        <div className="divHome">
            <h1>{greeting}</h1>
            <br/>
            <p className="pHome">{pHome}</p>
        <div className="divHome">
            { loading ? <h2> Cargando.... 
                <br />
                <br />
                <Spinner animation="border" role="status" variant="info" ><span className="visually-hidden">Cargando...!!!</span>
                </Spinner></h2> :  <ItemList items={items}/> }
        </div>

        </div>
    )
}

export default ItemListContainer