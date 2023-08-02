import './header.css'
import './Nav.css'
import {NavLink} from 'react-router-dom';
import { useState } from 'react';


const Newnav = () =>{
const [menuOpen, setMenuOpen] = useState(false)
  return(
    
    <nav>
      <div className = 'navMenu' onClick = {() => {
        setMenuOpen(!menuOpen)
      }} >
      <span></span>
      <span></span>
      <span></span>
      </div>
        <ul className = {menuOpen ? "open" : ""}>
          <li><NavLink>Home</NavLink></li>
          <li><NavLink>About Us</NavLink></li>
          <li><NavLink>Reviews</NavLink></li>
          <li><NavLink>Contact Us</NavLink></li>      
        </ul>
      
    </nav>
  
  )
}

export default Newnav;