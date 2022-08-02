import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getProducts } from "../api"
import ItemList from "./ItemList"

const ItemListContainer=()=>{
    const [items, setItems] = useState([]) 
    const {category} = useParams()
    useEffect(()=>{
        getProducts
        .then((response) => {
            if (category) {
                setItems(response.find((product) => product.id === category)
                );
            } else {
                setItems(response)
            }
        })
        .catch ((error) => console.log("Error al cargar", error));
    },[category])

    return(
    <div className="container">
        <blockquote className="blockquote text-center">
            {<ItemList items={items} />}
        </blockquote>
    </div>)
}

export default ItemListContainer