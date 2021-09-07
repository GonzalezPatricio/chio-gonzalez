import React from "react";
import "../../App";
import Contador from "../itemCount/ItemCount";

function Item({item}) {
    return (
        <div className="container1">
            <div className="card">
                <div className="pictureUrl"><img src={item.pictureUrl} alt="" /></div>
                <div className="title"><h1>{item.title}</h1></div>
                <div className="description"><p>Description: "{item.description}"</p></div>
                <div className="price">$ {item.price}.-</div>
                < Contador initial={0} stock={7} onAdd={()=> console.log('Se agrego al carrito!')}/>
                <div className="id"><p>Id:{item.id}</p></div>
            </div>
        </div>
    );
}

export default Item