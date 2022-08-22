import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../context/CartContext"
import Cart from "./Cart"
import { addDoc, collection, getFirestore } from "firebase/firestore"

const USER_BUY={
    Nombre:'Comprador',
    Telefono: 88991133,
    EMail:'asd@asd.com'
}

const CartContainer=()=>{
    const {total, cart}  = useContext(CartContext)
    const current = new Date()
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`

    const sendOrder = ()=>{
    const newOrder ={
        buyer: USER_BUY,
        items: cart,
        fecha: date,
        total: total
    }
    const db=getFirestore()
    const orderCollectrion = collection(db, 'orders')

    addDoc(orderCollectrion, newOrder)
    .then(({id})=>alert(`Esta es la ID de tu compra:  ${id}`))
    .catch((error)=>console.error(error))
    }


    if(cart.length===0){
        return(
        <div className="container">
            <h2>Tu Carrito Esta vacio. <Link to='/' >Volver al Inicio</Link></h2>
        </div>)
    }else
    {return(
        <div className="container carrito">
            <h1>Carrito de Compras</h1>
            <Cart items={cart} />
            <button className="btn btn-success" onClick={sendOrder}>Terminar Compra</button>
        </div>)
    }


}
export default CartContainer