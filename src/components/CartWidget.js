import React from 'react'
import { ShoppingCartIcon } from '@heroicons/react/outline'
import './CartWidget.css'

const CartWidget=()=>{
   return<a className="nav-link" href='#'>
    <ShoppingCartIcon />
    </a>
} 

export default CartWidget;