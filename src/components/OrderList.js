/* 
const OrederList=()=>{
    if(orderId){
        return(
        <div className="container">
            <h2>Buscar orden <input type='text' placeholder="ID" /></h2>
        </div>)
    }else
    {return(
        <div className='container'>
            <table className="table">
            <thead>
                <tr>
                    <th>Nombre Producto</th>
                    <th>Imagen</th>
                    <th>Cantidad</th>
                </tr>
            </thead>
            <tbody>
                {orderId.map((orderId) => 
                <tr key={orderId.id}>
                    <th><h4> {orderId?.nombre} </h4></th>
                    <th><img src={orderId?.imagen} alt="..." className="img-cart"/></th>
                    <th><h4>{orderId?.cantidad}</h4></th>
                </tr>
                )}
                </tbody>
            </table>
           </div>
    )}
}
export default OrederList */