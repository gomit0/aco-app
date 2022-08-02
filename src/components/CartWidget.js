import React from 'react'
import { ShoppingCartIcon } from '@heroicons/react/outline'
import './CartWidget.css'
import { useNavigate } from "react-router-dom";

const CartWidget=()=>{
    const navigate = useNavigate();
   return<a className="nav-link" onClick={() => navigate("/carrito")} href="/#">
    <ShoppingCartIcon />
    </a>
} 

export default CartWidget;