import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../context/CartContext"
import Cart from "./Cart"
/* import { addDoc, collection, getFirestore } from "firebase/firestore" */
import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"
import { addDoc, collection, getFirestore } from "firebase/firestore"

const MySwal = withReactContent(Swal);

const CartContainer=()=>{
    let USER_BUY = {}
    const {total, cart, clearCart}  = useContext(CartContext)
    const current = new Date()
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`
  
    const HandleUserData=()=> {
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
            .then(clearCart())
            .then(({id})=>Swal.fire(`Esta es la ID de tu compra:  ${id}`))
            .catch((error)=>console.error(error))
            }
        const formValues =  MySwal.fire({
            title: 'Ingrea tus Datos para la Compra',
            html:
            `<input class="swal2-input" id="buyerName" type="text" placeholder="Ingresa tu nombre completo" /><br /><input class="swal2-input" id="buyerAddress" type="text" placeholder="Ingresa tu nombre direccion" /><br />
            <input class="swal2-input" id="buyerPhone" type="text" placeholder="Ingresa tu telefono" /><br />
            <input class="swal2-input" id="buyerEmail" type="email" placeholder="Ingresa tu Email" /><br />
            <input class="swal2-input" id="buyerEmail2" type="email" placeholder="Confirma tu Email" />`,
            showCancelButton: true,
            cancelButtonColor: 'grey',
            confirmButtonText: 'Confirmar',
            allowOutsideClick: false,
            focusConfirm:false,
            }).then((values)=>{
                if(values.value){
                    let buyName = document.getElementById('buyerName').value
                    let buyAddress = document.getElementById('buyerAddress').value
                    let buyPhone =parseInt(document.getElementById('buyerPhone').value)
                    let buyEmail = document.getElementById('buyerEmail').value
                    USER_BUY={
                        Nombre: `${buyName}` ,
                        Direccion: `${buyAddress}` ,
                        Telefono: `${buyPhone}` ,
                        Email:`${buyEmail}`
                    }
                    return(
                        sendOrder(),
                        Swal.fire(`${USER_BUY.Nombre}
                        Gracias por comprar con nosotros.`)
                   )
                }
            })

            return USER_BUY 
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
            <button className="btn btn-success" onClick={HandleUserData}>Terminar Compra</button>
        </div>)
    }


}
export default CartContainer