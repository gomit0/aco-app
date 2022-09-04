import { collection, getDocs, getFirestore } from "firebase/firestore"
import {  useEffect,  useState } from "react";


const OrderContainer=()=>{
    
    const [order, setOrder] = useState([]) 
    const [search, setSearch] = useState('')
   
    useEffect(() => {
        const db = getFirestore();
        const queryCollection = collection(db, 'orders')
        getDocs(queryCollection)
            .then(res => setOrder(res.docs.map(item => ({id: item.id, ...item.data()}))))
    }, [])
    const queryId = (e)=>{
        setSearch(e.target.value)
        handleFilter(e.target.value)
        console.log(search)
    }
    const handleFilter = (searchId) => {
        const resultadosBusqueda = order.filter((e) => {
            if (e.id.toString().toLowerCase().includes(searchId.toLowerCase())) {
                return (e)
            } else {
                return('')
            }
        })
        setOrder(resultadosBusqueda)
        console.log(order)
    }
    

    return(
    <div className="container">
           <h2> Buscar orden <input type='text' placeholder="ID" value={search} onChange={queryId}/></h2>

            <table className="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>total</th>
                    <th>fecha</th>
                </tr>
            </thead>
            <tbody>
                {order.map((order) => 
                <tr key={order.id}>
                    <th>{order.id}</th>
                    <th><h4> {order.buyer.Nombre} </h4></th>
                    <th><h4> {order.total}</h4></th>
                    <th><h4>{order.fecha}</h4></th>
                </tr>
                )}
                </tbody>
            </table>

    </div>)
}
export default OrderContainer