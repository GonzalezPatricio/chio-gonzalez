import React from 'react';
import Item from '../item/Item';
import "../../App";
import { useState } from 'react';
import img1 from "../../assets/m_monitor-49-lg.jpg";
import img2 from "../../assets/m_monitor-27-benq.png";
import img3 from "../../assets/m_monitor-27-gigabyte-aorus.png";
import img4 from "../../assets/m_monitor-34-samsung.png"

export const ItemList = () => {
    const items = [
        {
            id: 1,
            title: "Monitor LG",
            description: "Monitor gamer re fachero grande LG",
            fullDescription: "Tamaño de 49 pulgadas, con panel IPS de relación de aspecto 32:9, la resolución es de 5120 x 1440 con pantalla curva, cuanta con HDMI, salida de auriculares, USB-C, DisplayPort.",
            price: 145200,
            pictureUrl: img1
        },
        {
            id: 2,
            title: "Monitor BENQ",
            description: "Monitor gamer re fachero grande BENQ",
            fullDescription: "Movimientos rápidos gracias a la pantalla con 140hz de refresco, el tiempo de respusta es de 1ms (GTG), cuenta con conectividad de DisplayPort, HDMI, DVI-DL y conector para auriculares",
            price: 135200,
            pictureUrl: img2
        },
        {
            id: 3,
            title: "Monitor GiGABYTE",
            description: "Monitor gamer super fachero grande Gigabyte",
            fullDescription: "El monitor AORUS GAMING cuenta con los sistemas LED más avanzados del mercado actual. Gracias a la aplicación de RGB Fusion, podrá crear un ambiente de juego exclusivo. Cuenta con 2 HDMI, 1 DisplayPort y conector para auriculares",
            price: 105100,
            pictureUrl: img3
        },
        {
            id: 4,
            title: "Monitor Samsung",
            description: "Monitor gamer re fachero menos grande Samsung",
            fullDescription: "Experimenta imágenes nítidas con una resolución de 3440x1440 de este monitor, que ofrece 2.4 veces la cobertura de una pantalla Full HD. Cuanta con HDMI, salida de auriculares.",
            price: 85200,
            pictureUrl: img4
        }
    ]
    const itemList = () => {
        return new Promise((res, rej)=>{
            setTimeout(()=>{
                res(items.map(item => <Item key={item.id} item={item}/>));
            }, 2000);
        });
    } 
    
    const [itemState, setItemState] = useState()

    itemList().then((res)=> setItemState(res));

        return (
        <React.Fragment>
            <div className="container">{itemState}</div>
        </React.Fragment>
    );
}
