
import {Link} from 'react-scroll'
import './NavBar.css'

const NavBar = () => {
  return (
    
    <nav >
        
        <h1 className='logo'>Ishaq</h1>
        <div className='menu'>
            <Link to="Hero" className="menu-item">Home</Link>
            <Link to="AboutMe" className="menu-item">About Me</Link>
            <Link to="Projects" className="menu-item">Projects</Link>
            <Link to="Contactme" className="menu-item">Contact</Link>
        </div>
    </nav>
    
  )
}

export default NavBar