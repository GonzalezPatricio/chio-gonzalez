import {createContext, useContext ,useState} from "react";


export const cartContext = createContext();

export const useCartContext = ()=> {
    return useContext(cartContext)
}


export const CartContextProvider =({children})=> {
    const [cartList, setCarlist] = useState([])

    const agregoItem = (prod, cant)=> {
        if(estaEnCarrito(prod.id)) {
            
            const updateCant = [...cartList];

                updateCant.map(element => {
                        if(element.prod.id === prod.id) {
                            element.cant = element.cant + cant
                        }
                    })
                    setCarlist(updateCant)
        } else {
            setCarlist([...cartList, {prod, cant}])
        }
    }

    const estaEnCarrito = (id) => cartList.find( element=> element.prod.id === id)
    const limpiarCarrito = () => setCarlist([])
    const quitarDelCarrito = (id) => {
    
        const cartListFilter = cartList.filter(element => element.prod.id !== id)
      
        setCarlist(cartListFilter)
    }
    console.log('carrito', cartList)

    return (
        <cartContext.Provider value={{cartList, agregoItem, limpiarCarrito, quitarDelCarrito}}>
           {children}
        </cartContext.Provider>

    )
}