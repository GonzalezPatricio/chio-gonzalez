import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";


export default function Contador({ stock, initial, onAdd = () => {} }){
    const [contador, setContador] = useState(initial);
    const [addCarrito, setAddCarrito] = useState(true)
    
    const agregar = ()=>{
        if (contador < stock)setContador(contador + 1);
    };

    const quitar = ()=>{
        if (contador > 0) setContador(contador - 1);
    };

    const addToCart = ()=>{
        onAdd(contador)
        setAddCarrito(false)         
    }
   

    return (

    <div className="countBtn">
        <Button style={{width: 30, height: 30, margin: 5}} variant="primary" onClick={() => agregar()} className="arriba">
            +
        </Button>
        <span style={{ fontSize: 30, color: "red", margin: 7}}>{contador}</span>
        <Button style={{width: 30, height: 30, margin: 5}} variant="danger" onClick={() => quitar()} className="abajo">
            -
        </Button>
        <br />
       { addCarrito ? 
            <Button variant="success" style={{width: 130}} 
        onClick={addToCart} className="reset">
            Agregar al carrito
        </Button>
        :
        <div>
            <Link to="/cart" >
                    <Button variant="success"  >Terminar Compra</Button>            
            </Link>
    
            <Link to="/" >
                    <Button variant="success" >Seguir Comprando</Button>      
            </Link>

        </div>
        }

    </div>
    )
}
