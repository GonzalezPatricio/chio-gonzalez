import React from 'react';
import Contador from '../itemCount/ItemCount';
import '../../App.css';
import { Button } from "react-bootstrap";
import { useCartContext } from '../../context/CartContext';



const ItemDetail = ({product}) => {

 const { agregoItem, limpiarCarrito, quitarDelCarrito, cartList } = useCartContext();

    const onAdd=(cant)=>{
        agregoItem(product, cant)
    }

    return (
        <> 
           <div className='detalle' key={product.id}> 
                <img src={product.pictureUrl} alt="fotoItem" />
                <h2>{product.title}</h2>
                <h2>{product.description}</h2>
                <h4>{product.fullDescription}</h4>
                <div className="price">$ {product.price}.-</div>
                    <Contador initial={1} stock={5} onAdd={onAdd} />
                    <Button variant="danger" onClick={limpiarCarrito}> Vaciar Carrito</Button>
                    {cartList.map(element=>{
                        return(
                            <>
                            {element.prod.name}
                            <Button variant="warning" onClick={()=> quitarDelCarrito(element.prod.id)}> Quitar Producto</Button>
                            </>
                        )
                    })}
            </div>
        </>
    )
}

export default ItemDetail



