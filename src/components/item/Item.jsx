import React from "react";
import "../../App";
import Contador from "../itemCount/ItemCount";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function Item({item}) {
    return (
        <div className="container1">
            <div className="card">
                <div className="pictureUrl"><img src={item.pictureUrl} alt="fotoItem" /></div>
                <div className="title"><h1>{item.title}</h1></div>
                <div className="description"><p>Description: "{item.description}"</p></div>
                <div className="id">
                    <Link to = {`/item/${item.id}`}>
                       <Button variant="secondary" style={{margin: 5}}>
                           Detalle del Producto
                       </Button>
                    </Link>
                </div>
                <div className="price">$ {item.price}.-</div>
                < Contador initial={0} stock={7} onAdd={()=> console.log('Se agrego al carrito!')}/>
                <Link to = {`/categoria/${item.categoria}`} >
                <div className="categoria"><span>{item.categoria}</span></div>
                </Link>
            </div>
        </div>
    );
}

export default Item