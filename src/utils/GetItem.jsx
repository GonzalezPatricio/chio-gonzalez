import img1 from "../assets/m_monitor-49-lg.jpg";
import img2 from "../assets/m_monitor-27-benq.png";
import img3 from "../assets/m_monitor-27-gigabyte-aorus.png";
import img4 from "../assets/m_monitor-34-samsung.png";
import img5 from "../assets/m_tecladoRedragon.png";
import img6 from "../assets/m_HyperX.png";
import img7 from "../assets/m_logitech.png";
import img8 from "../assets/m_mouseLogitech.png";
import img9 from "../assets/m_logitechMaster.png"

const items = [
    {
        id: 1,
        title: "Monitor LG",
        description: "Monitor gamer re fachero grande LG",
        fullDescription: "Tamaño de 49 pulgadas, con panel IPS de relación de aspecto 32:9, la resolución es de 5120 x 1440 con pantalla curva, cuanta con HDMI, salida de auriculares, USB-C, DisplayPort.",
        price: 145200,
        pictureUrl: img1,
        categoria: "Monitores"
    },
    {
        id: 2,
        title: "Monitor BENQ",
        description: "Monitor gamer re fachero grande BENQ",
        fullDescription: "Movimientos rápidos gracias a la pantalla con 140hz de refresco, el tiempo de respusta es de 1ms (GTG), cuenta con conectividad de DisplayPort, HDMI, DVI-DL y conector para auriculares",
        price: 135200,
        pictureUrl: img2,
        categoria: "Monitores"
    },
    {
        id: 3,
        title: "Monitor GiGABYTE",
        description: "Monitor gamer super fachero grande Gigabyte",
        fullDescription: "El monitor AORUS GAMING cuenta con los sistemas LED más avanzados del mercado actual. Gracias a la aplicación de RGB Fusion, podrá crear un ambiente de juego exclusivo. Cuenta con 2 HDMI, 1 DisplayPort y conector para auriculares",
        price: 105100,
        pictureUrl: img3,
        categoria: "Monitores"
    },
    {
        id: 4,
        title: "Monitor Samsung",
        description: "Monitor gamer re fachero menos grande Samsung",
        fullDescription: "Experimenta imágenes nítidas con una resolución de 3440x1440 de este monitor, que ofrece 2.4 veces la cobertura de una pantalla Full HD. Cuanta con HDMI, salida de auriculares.",
        price: 85200,
        pictureUrl: img4,
        categoria: "Monitores"
    },
    {
        id: 5,
        title: "Teclado Redragon",
        description: "Redragon Kumara K552",
        fullDescription: "Teclado QWERTY con switches Outemu Blue, español color negro con luz RGB.",
        price: 6999,
        pictureUrl: img5,
        categoria: "Teclados"
    },
    {
        id: 6,
        title: "Teclado Gamer HyperX",
        description: "HyperX Alloy Origins",
        fullDescription: "Teclado QWERTY 60% con switches HyperX1 Red, en ingles color negro con luz RGB.",
        price: 11599,
        pictureUrl: img6,
        categoria: "Teclados"
    },
    {       
        id: 7,
        title: "Teclado Gamer Logitech",
        description: "Logitech Serie G, G915 TKL",
        fullDescription: "Teclado QWERTY 60% con switches GL Tactile, en ingles color negro con luz RGB.",
        price: 24099,
        pictureUrl: img7,
        categoria: "Teclados"
    },
    {       
        id: 8,
        title: "Mouse Gamer Logitech",
        description: "Logitech Serie G305",
        fullDescription: "Mouse inalambrico gamer Lightspeed con sensor HERO, con rendimiento de 12.000 dpi, respuesta de 1 ms",
        price: 3871,
        pictureUrl: img8,
        categoria: "Mouses"
    },
    {       
        id: 9,
        title: "Mouse Logitech",
        description: "Logitech Master Series MX Master 3",
        fullDescription: "Mouse inalambrico con sensor Optico Darkfield, con rendimiento de 4.000 dpi, respuesta de 1 ms",
        price: 10499,
        pictureUrl: img9,
        categoria: "Mouses"
    }
]


export const getItem = new Promise((res, rej)=> {
    let info = '200'
    if(info === '200'){
        setTimeout (()=> {
            res(items)
        }, 2000)
    }else{
        rej('404 Not Found')
    }
})

const item = {
    id: 1,
    title: "Monitor LG",
    description: "Monitor gamer re fachero grande LG",
    fullDescription: "Tamaño de 49 pulgadas, con panel IPS de relación de aspecto 32:9, la resolución es de 5120 x 1440 con pantalla curva, cuanta con HDMI, salida de auriculares, USB-C, DisplayPort.",
    price: 145200,
    pictureUrl: img1,
    categoria: "Monitores"
}

export const getItemUno = new Promise((res, rej)=> {
    let info = '200'
    if(info === '200'){
        setTimeout (()=> {
            res(item)
        }, 2000)
    }else{
        rej('404 Not Found')
    }
})