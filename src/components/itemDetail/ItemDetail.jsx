import React from 'react';
import Contador from '../itemCount/ItemCount';
import '../../App.css';
import { Button, Card } from "react-bootstrap";
import { useCartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';



const ItemDetail = ({product}) => {

 const { agregoItem, limpiarCarrito, cartList } = useCartContext();

    const onAdd=(cant)=>{
        agregoItem(product, cant)
    }

    return (
        <React.Fragment> 
            
        <Link to='/'>
            <Button variant="primary" className="btnVolver">Volver</Button>
        </Link>
        <div className="container1">
            <Card className='detalle'>
                <Card.Img src={product.pictureUrl}/>
                    <Card.Body>
                        <Card.Title className="title"><h2>{product.title}</h2></Card.Title>
                        <Card.Title className="title"> <h4>{product.description}</h4> </Card.Title>
                        <Card.Text className="description">{product.fullDescription}</Card.Text>
                        <Card.Text><h3 className="price">$ {product.price}.-</h3></Card.Text>
                 
                    <Contador initial={1} stock={5} onAdd={onAdd}/>
                  
                        <Button variant="danger" onClick={limpiarCarrito}> Vaciar Carrito</Button>
                                    {cartList.map(element=>{
                                return(
                            <div key={element.prod.title}>
                            {element.prod.title}
                            </div>
                            )
                        })}
                    </Card.Body>
            </Card>
        </div>

        </React.Fragment>
    )
}

export default ItemDetail



