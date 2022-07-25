import React, { useState } from "react";
const Quantity=()=>{
    const[number, setNumber] = useState(0)
    const sum=()=>setNumber(number+1)
    const rest=()=>setNumber(number-1)
    const reset=()=>setNumber(0)
    const qtt= number<0?'ERROR':number

    return<div className="container">
        <button className="btn btn-outline-danger" onClick={rest}>-</button>
        <h4>Cantidad: {qtt}</h4>
        <button className="btn btn-outline-secondary" onClick={sum}>+</button>
        <button className="btn btn-outline-warning" onClick={reset}>RESET</button>        
    </div>
}

export default Quantity