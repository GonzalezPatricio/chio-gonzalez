import React, { useState } from "react";
import { Button } from "react-bootstrap";

export default function Contador({ stock, initial, onAdd = () => {} }){
    const [contador, setContador] = useState(initial);
    const [addCarrito, setAddCarrito] = useState(false)
    
    const agregar = ()=>{
        if (contador < stock)setContador(contador + 1);
    };

    const quitar = ()=>{
        if (contador > 0) setContador(contador - 1);
    };

    const resetear = (event)=>{
        if (contador > 0) {
            setAddCarrito(true)
            onAdd(event)
        }
    };

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
       { !addCarrito && <Button variant="success" style={{width: 100}} 
        onClick={(resetear)} className="reset">
            Agregar
        </Button>}
    </div>
    );
}
