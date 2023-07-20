import { NavLink } from 'react-router-dom';
import './header.css'


const Header = () =>{
return(

    <div>
    <header className = "page_header"> 
      <ul>
      <li><h1>Jersey Review.com</h1></li>
      <div className = "regLog_format">
      <li><NavLink>Login</NavLink></li> |
      <li><NavLink>Register</NavLink></li>
      </div>
      </ul>

      
      
    
    </header>
   </div>
)}

 export default Header;