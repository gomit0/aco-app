import CartWidget from "./CartWidget"
import './NavBar.css'
import { Link } from "react-router-dom";

export default function Navbar(){
  

    return <nav className="navbar navbar-expand-lg navbar-light">

      <ul className="navbar-nav w-100">
        <li className="nav-item">
          <Link className="navbar-brand mb-0 h1" to="/">INICIO</Link>
        </li>
        <li className="nav-item dropdown" >
          <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Productos
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><Link className="dropdown-item" to="/">Todos</Link></li>
            <li><Link className="dropdown-item" to="/categoria/cableado">Cableados</Link></li>
            <li><Link className="dropdown-item" to="/categoria/inalambrico">Inalambricos</Link></li>
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Ordenes" >Ordenes</Link>
        </li>
        <li className="nav-item">
          <CartWidget/>
        </li>
      </ul>

  </nav>
}