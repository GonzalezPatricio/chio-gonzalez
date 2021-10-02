import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCartContext } from '../../context/CartContext';
import "../../App";


const Cart = ({condition = true}) =>{
       
    const { cartList, limpiarCarrito, quitarDelCarrito } = useCartContext()
  


    return (
    <React.Fragment>
        {cartList.length === 0  ?   
                <div>
                    <br />
                    <h1>El Carrito se encuentra vacio</h1>
                    <h2>Por favor agrega productos</h2>
                    <br />
                    <Link to='/' >
                    <Button variant='success'> Ir a Comprar </Button>
                    </Link>
                </div>
            : 
                <div className="divCarrito">
                <Link to='/'>
                    <Button variant="primary" className="btnVolver">Volver</Button>
                </Link>
                    {cartList.map(resp => <div key={resp.prod.id}>
                        <Card.Img variant="thumbnail" src={resp.prod.pictureUrl}/>
                        <Card.Title className='description'>{resp.prod.title}</Card.Title>
                        <Card.Text><h3 className="price">$ {resp.prod.price}.-</h3></Card.Text>
                        <Button className='btnQuitar' variant="warning" onClick={()=> quitarDelCarrito(resp.prod.id)}> Quitar Producto</Button>
                    </div>
                    )}
                    <br />
                    <Button variant='danger' onClick={() => limpiarCarrito()} >Vaciar Carrito</Button>
                </div>
            }
    </React.Fragment>
    )
}

export default Cart