import ItemDetail from "./ItemDetail"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { doc, getDoc, getFirestore } from "firebase/firestore"

const ItemDetailContainer=()=>{
    const [item, setItem] = useState()
    const {id} = useParams()
    
    useEffect(() => {
        const db = getFirestore()
    
        const itemRef = doc(db, 'items', id) 

        getDoc(itemRef)
          .then((snapshot) => {
            if (snapshot.exists()) {
              const data = {
                id: snapshot.id,
                ...snapshot.data()
              }
              setItem(data)
            }
          })
          .catch((error) => console.error(error))

      }, [id])

    return(
    <div className="container">
        <blockquote className="blockquote text-center">
            {<ItemDetail item={item} />}
        </blockquote>
    </div>)
}

export default ItemDetailContainer