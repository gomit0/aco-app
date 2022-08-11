import React, { useContext, useEffect } from 'react'
import { ShoppingCartIcon } from '@heroicons/react/outline'
import './CartWidget.css'
import { Link } from "react-router-dom";
import { CartContext } from '../context/CartContext';

const CartWidget=()=>{
    
    const {cart} = useContext(CartContext)
    const showQuantity= cart.length 
    useEffect(()=>{
        console.log("CartWidget")
        console.log(cart)
    },[cart])
    return  (
        <span className='nav-carrito'> 
            <Link className="nav-link icono-carrito" to="/cart" >
                <ShoppingCartIcon />
            </Link>
          {showQuantity > 0 ? <p className='qty-display'>{showQuantity}</p>: ''} 

            
        </span>
       
    )
} 

export default CartWidget;