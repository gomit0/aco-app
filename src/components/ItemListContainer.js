import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemList from "./ItemList"

const ItemListContainer=()=>{

    const [items, setItems] = useState([]) 
    const {categoria} = useParams()

    useEffect(() => {
        if (categoria) {
          const db = getFirestore()
      
          const itemsCollectionQuery = query(
            collection(db, 'items'),
            where('categoria', '==', categoria)
          )
    
          getDocs(itemsCollectionQuery)
            .then((snapshot) => {
              const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
              setItems(data)
            })
            .catch((error) => console.error(error))
        }else{
            const db = getFirestore()
            const itemsCollection = collection(db, "items")
              getDocs(itemsCollection).then((snapshot)=>{
                const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
                setItems(data)
              })
        }
    }, [categoria])

    return(
    <div className="container">
        <blockquote className="blockquote text-center">
            {<ItemList items={items} />}
        </blockquote>
    </div>)
}

export default ItemListContainer