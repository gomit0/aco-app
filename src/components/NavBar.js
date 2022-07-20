import CartWidget from "./CartWidget"
import './NavBar.css'

export default function Navbar(){
    return <nav className="navbar">
    <a className="navbar-brand mb-0 h1" href='#'>ACO Herramientas</a>
    <a className="nav-link" href="#">Productos</a>
    <a className="nav-link" href='#'>Nosotros</a>
    <CartWidget />
  </nav>
}