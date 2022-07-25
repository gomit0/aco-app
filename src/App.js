import ItemCount from "./components/ItemCount";
import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/NavBar";




function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer greeting='Venta de Herramientas'/>
      <ItemCount quantity='10' />
    </>

)}
export default App