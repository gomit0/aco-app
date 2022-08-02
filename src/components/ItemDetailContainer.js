import ItemDetail from "./ItemDetail"
import {getItem} from "../api"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const ItemDetailContainer=()=>{
    const [item, setItem] = useState()
    const {id} = useParams()
    
   useEffect(() =>{
    getItem(id)
    .then((product)=>{
        setItem(product)
    })
    .catch((error)=> console.log(error))
   },[id])

    return(
    <div className="container">
        <blockquote className="blockquote text-center">
            {<ItemDetail item={item} />}
        </blockquote>
    </div>)
}

export default ItemDetailContainer