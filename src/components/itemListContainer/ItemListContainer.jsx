import React from "react";
import "../itemListContainer/itemListContainer.css";
import { ItemList } from "../itemList/ItemList";



const ItemListContainer = ({greeting, pHome}) => {
    return (
        <div className="divHome">
            <h1 className="title">{greeting}</h1>
            <br/>
            <p className="pHome">{pHome}</p>
           <div>
                <ItemList />
           </div>

        </div>
    )
}

export default ItemListContainer