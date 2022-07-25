import React, { useState } from "react";


const ItemCount=()=>{

    let [counter, setCounter] = useState(0)
    let [stock, setStock] = useState(10)


  const onAdd=()=>{
        stock>=1&&counter<stock?setCounter(counter+1)&& setStock(stock-1):alert('No puedes agregar mas items') 

  }


    const onSubstract=()=>{
        counter>0&&stock>0?setCounter(counter-1)&&setStock(stock+1):alert('NO PUEDES QUITAR MAS ITEM') 
    }

    const addToCart=()=>{
        setStock(stock-counter)
        setCounter(counter=0)
    }

   

    return(
        <div className="container">
            <div className="card-body">
            <h5 className="card-title">Taladro Inalambrico</h5>
            <div className="d-flex justify-content-between">
            <button className="btn btn-primary" onClick={onSubstract}>-</button>
            <h6> {counter} </h6>
            <button className="btn btn-primary" onClick={onAdd}>+</button>
            <button className="btn btn-primary" onClick={addToCart}>Agregar al Carrito</button>  
            </div>          
            </div>
        </div>
    )
}

export default ItemCount