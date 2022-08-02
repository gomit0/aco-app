import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailsConteiner from './components/ItemDetailContainer';
import NavBar from './components/NavBar';
function App() {
  return (

    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<ItemListContainer />} />
        <Route exact path='/item/:id' element={<ItemDetailsConteiner />} />
        <Route path='/categoria/:categoria' element={<ItemListContainer/>}/> 
      </Routes>
    </BrowserRouter>

  );
}

export default App;