import CartWidget from "./CartWidget"
import './NavBar.css'
import { useNavigate } from "react-router-dom";

export default function Navbar(){
  const navigate = useNavigate();

    return <nav className="navbar">
    <a className="navbar-brand mb-0 h1" onClick={() => navigate("/")} href="/#">ACO Herramientas</a>
    <a className="nav-link" onClick={() => navigate("/contacto")} href="/#">Contacto</a>
    <a className="nav-link" onClick={() => navigate("/nosotros")} href="/#">Nosotros</a>
    <CartWidget/>
  </nav>
}