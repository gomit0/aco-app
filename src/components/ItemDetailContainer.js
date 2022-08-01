import { useState, useEffect } from "react"
import ItemDetail from "./ItemDetail"


const ItemDetailContainer=({item})=>{
    const [product, setProduct] = useState([]) 

    useEffect(()=>{
        fetch('./data/products.json')
            .then(response=> response.json())
            .then(json =>{console.log(json)
            setProduct(json)})
    
    }, [])

    return(
    <div className="container">
        <blockquote className="blockquote text-center">
            {<ItemDetail product={product} />}
        </blockquote>
    </div>)
}

export default ItemDetailContainer