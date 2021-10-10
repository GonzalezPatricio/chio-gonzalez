import {React, useState} from 'react';
import { Link } from 'react-router-dom';
import {Form, Button} from 'react-bootstrap';
import { useCartContext } from '../../context/CartContext';
import '../../App.css';
import { getFirestore } from '../../services/getFireBase';

import firebase from 'firebase';
import 'firebase/firestore'


const Formulario = ()=> {
    const { cartList } = useCartContext()
 
    const [ formData, setFormData] = useState({
        nombre:'',
        apellido: '',
        correo:'',
        tel:''
    })
  
    function handleOnChange(e){
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    const handleOnSubmit = (e) =>{
        e.preventDefault()
        let orden = {}

        orden.date = firebase.firestore.Timestamp.fromDate( new Date());
        orden.buyer = formData 
        orden.prods = cartList.map(cartItem => {
            const id = cartItem.prod.id;
            const title= cartItem.prod.title;
            const price = cartItem.prod.price * cartItem.cant;

            return {id, title, price}
        })

        const db = getFirestore()

        db.collection('ordenes').add(orden)
        .then(resp => alert(`Muchas gracias por tu compra, este es tu numero de orden: ${resp.id}`))
        .finally(()=> setFormData({        
        nombre:'',
        apellido: '',
        correo:'',
        tel:''}))
    }
    return (
        <>
         <Link to='/cart'>
            <Button variant="primary" className="btnVolver">Volver</Button>
        </Link>

        {cartList.map(resp => <div key={resp.id}>
        <div className="tableProd">
            <table class="table table-dark">
                <thead>
                    <tr className='trProd'>
                    <th scope="col">#idProducto</th>
                    <th scope="col">Producto</th>
                    <th scope="col">Imagen</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Precio Uni.</th>
                    <th scope="col">Precio Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='trProd'>
                    <td>{resp.prod.id}</td>
                    <td>{resp.prod.title}</td>
                    <td><img src={resp.prod.pictureUrl} alt="FotoProd" className='fotoCartFinal'/></td>
                    <td>{resp.cant}</td>
                    <td>${resp.prod.price}.-</td>
                    <td>$ {resp.prod.price * resp.cant}.-</td>
                    </tr>
                </tbody>
            </table>
        </div>
                </div>    )}

<div className='divForm'>
    <h1 className='title'>Formulario de Compra</h1>
    <Form onSubmit={handleOnSubmit}>
        <div class="form-row">
                <div class="col-4">
                    <label className='labelForm' for='inputApellido'>Apellido:</label>
                    <input required type="text" 
                    name='apellido' 
                    class="form-control" 
                    placeholder="Apellido"
                    value={formData.apellido}
                    onChange={handleOnChange}/>
                </div>
                <div class="col-4">
                    <label className='labelForm' for='inputNombre'>Nombre:</label>
                    <input required type="text" 
                    class="form-control" 
                    placeholder="Nombre"
                    name='nombre'
                    value={formData.nombre}
                    onChange={handleOnChange}/>
                </div>
            </div>
        <div class="form-row">
            <div class="form-group col-md-6">
                <label className='labelForm' for="inputEmail4">Correo Electronico:</label>
                <input required type="email" 
                class="form-control" 
                id="inputEmail4" 
                name="correo"
                placeholder="Correo Electronico"
                value={formData.correo}
                onChange={handleOnChange}/>
            </div>
        </div>
        <div class="col-4">
                    <label className='labelForm' for='inputTelefono'>Telefono:</label>
                    <input required type="number" 
                    name="tel"
                    class="form-control" 
                    placeholder="(Cod. Area) + Telefono"
                    value={formData.tel}
                    onChange={handleOnChange}/>
        </div>
        <button type="submit" class="btn btn-primary">Terminar Pedido</button>
    </Form>
</div>
</>   
   )
}

export default Formulario
