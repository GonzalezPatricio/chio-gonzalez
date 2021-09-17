import React from 'react';
import Contador from '../itemCount/ItemCount';
import '../../App.css';

const ItemDetail = ({product}) => {
    return (
        <> 
           <div className='detalle'> 
                <img src={product.pictureUrl} alt="fotoItem" />
                <h2>{product.title}</h2>
                <h2>{product.description}</h2>
                <h4>{product.fullDescription}</h4>
                <div className="price">$ {product.price}.-</div>
                    <Contador initial={0} stock={5} onAdd={()=> console.log('Se agrego al carrito!')}/>
            </div>
        </>
    )
}

export default ItemDetail



