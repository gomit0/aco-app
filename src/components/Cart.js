import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import './Cart.css'

const Cart = () =>{
    const { cart, removeItem, clearCart, total } = useContext(CartContext)


    if(cart.length===0){
        return(
        <div className="container">
            <h2>Tu Carrito Esta vacio. <Link to='/' >Volver al Inicio</Link></h2>
        </div>)
    }

    return(
        <div className='container'>
            <table className="table">
            <thead>
                <tr>
                    <th>#ID</th>
                    <th>Nombre Producto</th>
                    <th>Imagen</th>
                    <th>Cantidad</th>
                    <th>Precio</th>
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
                    <th><h4>{(cart?.cantidad*cart?.precio)}</h4></th>
                    <th><button className="btn btn-danger" onClick={() => removeItem(cart)}>Borrar</button></th>

                </tr>
                )}
                </tbody>
            </table>
            <div className="btn-actions">
                <button className="btn btn-success">Terminar Compra</button>
                <h3>Total a pagar {total}</h3>
                <button className="btn btn-danger" onClick={() => clearCart()}>eliminar carrito</button>
           </div>
        </div>
    )

}
export default Cart
