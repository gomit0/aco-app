import Item from "./Item"

const ItemList=({items})=>{ 
  

    return<div className="row row-cols-1 row-cols-md-2 g-4">
        
            {items.map((item)=> (
                <Item key={item.id} item={item} />
            ))}
        </div>
    
}

export default ItemList