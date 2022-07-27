import React from "react";
import ItemCount from "./ItemCount";

const Item=({item})=>{
    return(
    <div className="card" style={{width: '18rem'}}>
        <img src={item.imagen} className="card-img-top" alt=""/>
        <div className="card-body">
            <h5 className="card-title">{item.descripcion}</h5>
            <p className="card-text">Precio ${item.precio} usd</p>
            <button className="btn btn-primary"> Ir al Producto</button>
        </div>
    </div>)
}

export default Item