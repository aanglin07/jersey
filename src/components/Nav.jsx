import './PageHeader.css'
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
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to= "/about">About Us</NavLink></li>
          <li><NavLink to="/review">Reviews</NavLink></li>
          <li><NavLink to="/contact">Contact Us</NavLink></li>      
        </ul>
      
    </nav>
  
  )
}

export default Newnav;