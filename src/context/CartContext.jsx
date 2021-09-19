import createContext from "react";


export const cartContext = createContext([]);

export const CartContext =({children})=> {
    
    
    return(
        <cartContext.Provider>
           {children}
        </cartContext.Provider>

    )
}