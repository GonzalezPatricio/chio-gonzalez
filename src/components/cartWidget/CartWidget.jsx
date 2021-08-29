import React from "react";
import imgCart from "../../assets/carroMin.png";
import "../navbar/navbar.css";

const CartWidget = () => {
    return (
        <img className="cartW" src= {imgCart} alt="Carrito de Compras" />
        )
}

export default CartWidget