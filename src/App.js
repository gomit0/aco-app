import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailsConteiner from './components/ItemDetailContainer';
import NavBar from './components/NavBar';
import CartProvider from './context/CartContext';
import Cart from './components/Cart';


function App() {

  return (

    <BrowserRouter> 
      <CartProvider>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<ItemListContainer />} />
        <Route exact path='/item/:id' element={<ItemDetailsConteiner />} />
        <Route path='/categoria/:categoria' element={<ItemListContainer/>}/> 
        <Route exact path='/nosotros' element={<h1>Nosotros</h1>}/>
        <Route exact path='/cart' element={<Cart/>}/>
      </Routes>
      </CartProvider>
    </BrowserRouter>

  );
}

export default App;