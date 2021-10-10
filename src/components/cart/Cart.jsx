import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCartContext } from '../../context/CartContext';
import "../../App";


const Cart = () =>{
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
                        {cartList.map(resp => <div key={resp.id} >
                            <Card.Img variant="thumbnail" src={resp.prod.pictureUrl}/>
                            <Card.Title className='description'>{resp.prod.title}</Card.Title>
                            <Card.Text><h3 className="price">$ {resp.prod.price * resp.cant}.-</h3></Card.Text>
                            <Card.Text><h3 className='description'>Cantidad:{resp.cant}</h3></Card.Text>
                            <Button className='btnQuitar' variant="warning" onClick={()=> quitarDelCarrito(resp.prod.id)}> Quitar Producto</Button>
                </div> 
                        )}  
                    <div className='divBtnFin'>
                            <Button variant='danger' onClick={() => limpiarCarrito()} >Vaciar Carrito</Button>
                        <Link to='/finalizar-compra'>
                            <Button variant='success'>Realizar Pedido</Button>
                        </Link>
                    </div>
                </div>
            }
    </React.Fragment>
    )
}

export default Cart