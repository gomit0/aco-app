import { useState, useEffect } from "react"
import ItemList from "./ItemList"

const ItemListContainer=({greeting})=>{
    const [items, setItems] = useState([]) 

    useEffect(()=>{
        fetch('./data/products.json')
            .then(response=> response.json())
            .then(json =>{console.log(json)
            setItems(json)})
    
    }, [])

    return(
    <div className="container">
        <blockquote className="blockquote text-center">
            <h3 className="mb-0">{greeting}</h3>
            {<ItemList items={items} />}
        </blockquote>
    </div>)
}

export default ItemListContainer