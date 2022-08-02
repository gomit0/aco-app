import React from "react";
import { useNavigate } from "react-router-dom";


const Item=({item})=>{
    const navigate = useNavigate();
    return(
    <div className="card" style={{width: '18rem'}}>
        <img src={item.imagen} className="card-img-top" alt=""/>
        <div className="card-body">
            <h5 className="card-title">{item.nombre}</h5>
            <p className="card-text">Precio ${item.precio} usd</p>
            <button className="btn btn-primary" onClick={() => navigate(`item/${item.id}`)}> Ir al Producto</button>
        </div>
    </div>)
}

export default Item