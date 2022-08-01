import React from 'react'
import ItemCount from './ItemCount'
const ItemDetail = ({ item }) => {
    const onAdd = (cantidadItems) => {
        console.log(`Agregaste ${cantidadItems} de items al carrito`)
    }
    return (

            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6"><img className="card-img-top mb-5 mb-md-0" src={item.imagen} alt="..."/></div>
                    <div className="col-md-6">
                        <div className="small mb-1">{item.id}</div>
                        <h1 className="display-5 fw-bolder">{item.nombre}</h1>
                        <div className="fs-5 mb-5">
                            <h5>${item.precio}</h5>
                        </div>
                        <p className="lead">{item.descripcion}</p>
                        <ItemCount onAdd={onAdd}/>
                    </div>
                </div>


            
        </div>
    )
}
export default ItemDetail