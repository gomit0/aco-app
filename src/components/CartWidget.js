import React from 'react'
import { ShoppingCartIcon } from '@heroicons/react/outline'
import './CartWidget.css'
import { Link } from "react-router-dom";

const CartWidget=()=>{

   return  <Link className="nav-link icono-carrito" to="/carrito" >
    <ShoppingCartIcon />
    </Link>
} 

export default CartWidget;