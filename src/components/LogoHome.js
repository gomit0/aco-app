import { Link } from "react-router-dom"
import './LogoHome.css'

const LogoHome = () =>{
    const logo = 'https://firebasestorage.googleapis.com/v0/b/aco-app-ecommerce.appspot.com/o/pagina%2FACO-Logo.svg.png?alt=media&token=bfb59b83-dce7-43cd-8fc2-b4ba19488d24'
    return  (
        <span className='nav-carrito'> 
            <Link className="nav-link icono-home" to="/" >
                <img src={logo} alt="" className="icon-home-logo"/>
            </Link>
            
        </span>
    )
}
export default LogoHome