import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailsConteiner from './components/ItemDetailContainer';
import NavBar from './components/NavBar';
import CartProvider from './context/CartContext';
import CartContainer from './components/CartContainer';
import OrderContainer from './components/OrderContainer';


function App() {
  
/*   useEffect(()=>{
    const db =getFirestore()
    const itemCollection = collection(db, 'items')
    product.map((newItem)=>{
      addDoc(itemCollection, newItem)
      .then(({id})=>console.log({id}))
    })
  },[]) */

  return (

    <BrowserRouter basename='/'> 
      <CartProvider>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<ItemListContainer />} />
        <Route exact path='/item/:id' element={<ItemDetailsConteiner />} />
        <Route path='/categoria/:categoria' element={<ItemListContainer/>}/> 
        <Route exact path='/ordenes' element={<OrderContainer/>}/>
        <Route exact path='/cart' element={<CartContainer/>}/>
      </Routes>
      </CartProvider>
    </BrowserRouter>

  );
}

export default App;