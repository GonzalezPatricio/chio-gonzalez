import {createContext, useContext ,useState} from "react";


export const cartContext = createContext();

export const useCartContext = ()=> {
    return useContext(cartContext)
}

export const CartContext =({children})=> {
    const [cartList, setCarlist] = useState([])

    function agregoItem(prodNuevo){
        setCarlist ([...cartList, prodNuevo])
    }
    
    return(
        <cartContext.Provider value={{cartList, agregoItem}}>
           {children}
        </cartContext.Provider>

    )
}