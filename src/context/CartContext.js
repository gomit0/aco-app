import { createContext, useState } from "react";

export const CartContext = createContext({})

const CartProvider = ({children}) =>{
    const [cart, setCart] = useState([])

    const getIndexItem = (item) => cart.findIndex((e) => e.id === item.id)

/*     const addToCart = (item, quantity) => {
        const newItem = {...item, cantidad: quantity}
        
        getIndexItem(item)
        const isInCart = cart.find((e) => e.id === item.id)
        return isInCart ? setCart([...cart.filter(x=>x.id!==item.id),{...isInCart , cantidad : isInCart.cantidad + quantity}]) : setCart([...cart,newItem])

    } */


    const addToCart =(item , quantity)=>{
        let actualCart = cart;
        const itemIndex = getIndexItem(item); //cart.findIndex(cartItem => cartItem.id === item.id);
        return itemIndex > -1 ?(actualCart[itemIndex].cantidad += quantity , setCart(actualCart)) : setCart([...cart,{...item ,cantidad: quantity}])
    }

    const removeItem = (item) => {
        cart.splice(getIndexItem(item), 1 )
        return setCart([...cart])
    }

    const clearCart = () => setCart([]) 

    let showQuantity= 0
    cart.forEach(product => {
       return showQuantity += product.cantidad
    });
  

    let total = 0

    cart.forEach(product => {
      return  total += product.cantidad * product.precio
    });


    return(
        <CartContext.Provider value={{addToCart, clearCart, cart , removeItem , showQuantity, total}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider