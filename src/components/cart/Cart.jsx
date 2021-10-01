import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCartContext } from '../../context/CartContext';


const Cart = ({condition = true}) =>{
       
    const { cartList, limpiarCarrito, quitarDelCarrito } = useCartContext()
  


    return (
        <React.Fragment>
        {cartList.length === 0  ?   
                <div>
                    <br />
                    <h1>No hay productos agregue algunos</h1>
                    <br />
                    <Link to='/' >
                    <Button variant='success'> Ir a Comprar </Button>
                    </Link>
                </div>
            : 
                <div>
                <Link to='/'>
                    <Button variant="primary" className="btnVolver">Volver</Button>
                </Link>
                    {cartList.map(resp => <div key={resp.prod.id}>
                        <Card.Img variant="thumbnail" src={resp.prod.pictureUrl}/>
                        <Card.Title>{resp.prod.title}</Card.Title>
                        <Card.Text><h3 className="price">$ {resp.prod.price}.-</h3></Card.Text>
                        <Button variant="warning" onClick={()=> quitarDelCarrito(resp.prod.id)}> Quitar Producto</Button>
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