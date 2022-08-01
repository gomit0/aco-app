import './App.css';
import { Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailsConteiner from './components/ItemDetailContainer';
import NavBar from './components/NavBar';
function App() {
  return (

    <div className='App'>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<ItemListContainer />} />
        <Route exact path='/item/:id' element={<ItemDetailsConteiner />} />
      </Routes>
    </div>

  );
}

export default App;