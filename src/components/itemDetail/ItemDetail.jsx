import React from 'react';
import Contador from '../itemCount/ItemCount';
import '../../App.css';
// import { useCartContext } from '../../context/CartContext';



const ItemDetail = ({product}) => {

    // const { agregoItem } = useCartContext()

    const onAdd=(cant)=>{
        console.log(cant)
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
            </div>
        </>
    )
}

export default ItemDetail



