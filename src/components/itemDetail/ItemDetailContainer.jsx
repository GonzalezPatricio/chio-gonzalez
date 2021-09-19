import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getItemUno } from "../../utils/GetItem";
import ItemDetail from "../itemDetail/ItemDetail"; 


const ItemDetailContainer = () =>{
    const [product, setProduct] = useState({})
    const { idProducto } = useParams()
  
      useEffect(() => {

        getItemUno
        .then(resp =>  setProduct(resp))
        .catch(err => console.log(err)) 

    },[idProducto])

    console.log(idProducto)

    return(
        <>
          <ItemDetail product={product} />
        </>
    )
    
}

export default ItemDetailContainer

//-------------------Intento forma de Jose------------------------------------
// const ItemDetailContainer = ({items=[]}) =>{
//   const  {idProducto} = useParams();
//   const product = items.find(product => product.id=== idProducto);
//     console.log(product);

//   return(
//       <>
//        { product && <ItemDetail product={product} />}
//       </>
//   )
// ME TOMA EL ID, ME LO MUESTRA EN LA RUTA PERO ME SALE LA PANTALLA EN BLANCO, NO RENDERIZA EL ITEM
//
//--------------------Intento forma del profe--------------------------------------
// const [product, setProduct] = useState({})
// const { idProducto } = useParams()

// useEffect(() => {
//   if (idProducto) {
//       getItemUno
//     .then(info =>{
//         setProduct(info.find(item=> item.id===idProducto)) 
//     })
//     .catch(err => console.log(err))
//   } else {
//       getItemUno
//       .then(info=> {
//           setProduct(info)
//       })
//       .catch(error => console.log(error))
//   }
// },[idProducto])
// }
//  ME TOMA EL ID, ME LO MUESTRA EN LA RUTA PERO AL RENDEREAR ME SALE EL EL ITEM + 
// EL ALT DE LA IMAGEN Y EL COUNT PERO NO ME MUESTRA LOS DATOS DE ESE ITEM.