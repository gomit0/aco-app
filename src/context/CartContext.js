import { createContext, useState } from "react";

export const CartContext = createContext({})

const CartProvider = ({children}) =>{
    const [cart, setCart] = useState([])

    const searchItem = (item) => cart.findIndex((e) => e.id === item.id)

    const addToCart = (item, quantity) => {
        const newItem = {...item, cantidad: quantity}
        
        searchItem(item)
        const isInCart = cart.find((e) => e.id === item.id)
        console.log({isInCart})

        return isInCart ? setCart([...cart.filter(x=>x.id!==item.id),{...isInCart , cantidad : isInCart.cantidad + quantity}]) : setCart([...cart,newItem])

    }

    const removeItem = (item) => {
        cart.splice(searchItem(item), 1 )
        return setCart([...cart])
    }

    const clearCart = () => setCart([]) 

    return(
        <CartContext.Provider value={{addToCart, clearCart, cart , removeItem }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider