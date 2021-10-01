import React, { useEffect, useState } from "react";
import "../itemListContainer/itemListContainer.css";
import { ItemList } from "../itemList/ItemList";
import { useParams } from "react-router";
import { getItem } from "../../utils/GetItem";
import { Spinner } from "react-bootstrap";
// import { getFirestore } from "../../services/getFireBase";


const ItemListContainer = ({greeting, pHome}) => {
    
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)

    const { idCategoria } = useParams()

    useEffect(() =>{
        // const dbQuery = getFirestore()

        // dbQuery.collection('items').get()
        // .then(data => console.log(data))
        // .cath(err => console.log(err))
        // .finally(()=> setLoading(false))

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


    return (
    <React.Fragment>
        <div className="divHome">
            <h1>{greeting}</h1>
            <br/>
            <p className="pHome"
            animate={{fontSize: 350, color: "#03284d", x: 20, y: 10}}>{pHome} </p>
        <div className="divHome">
            { loading ? <h2> Cargando.... 
                <br />
                <br />
                <Spinner animation="border" role="status" variant="info" ><span className="visually-hidden">Cargando...!!!</span>
                </Spinner></h2> :  <ItemList items={items}/> }
        </div>

        </div>
    </React.Fragment>
    )
}

export default ItemListContainer