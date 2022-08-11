import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import './Cart.css'

const Cart = () =>{
    const { cart, removeItem, clearCart } = useContext(CartContext)
    return(
        <div className='container'>
            <table className="table">
            <thead>
                <tr>
                    <th>#ID</th>
                    <th>Nombre Producto</th>
                    <th>Imagen</th>
                    <th>Cantidad</th>
                    <th>Borrar?</th>
                </tr>
            </thead>
            <tbody>
                {cart.map((cart) => 
                <tr key={cart.id}>
                    <th><h4> { cart?.id } </h4></th>
                    <th><h4> {cart?.nombre} </h4></th>
                    <th><img src={cart?.imagen} alt="..." className="img-cart"/></th>
                    <th><h4>{cart?.cantidad}</h4></th>
                    <th><button className="btn btn-danger" onClick={() => removeItem(cart)}>Borrar</button></th>

                </tr>
                )}
                </tbody>
            </table>
            {cart.length === 0 ?<h2>Tu Carrito Esta vacio</h2>: <button className="btn btn-danger" onClick={() => clearCart()}>eliminar carrito</button>}
        </div>
    )

}
export default Cart
