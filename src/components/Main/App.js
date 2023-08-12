
import './App.css';
import PageFooter from "./Footer"
import Header from './PageHeader';
import Newnav from "./Nav"
import { Route, Routes } from 'react-router-dom';
import { About } from '../pages/About';
import { Contact } from '../pages/Contact';
import { Review } from '../pages/Review';
import { Home } from '../pages/Home';
import ProductDetails  from '../pages/ProductDetails';







function App() { 
  return (
    
      <div>      
        <Header />
        <Newnav />
        <Routes>
          <Route path='/about' element = {<About />} />
          <Route path='/contact' element = {<Contact />} />
          <Route path='/review' element = {<Review />} />
          <Route path='/' element = {<Home />} />
          <Route path='/details/:id' element = {<ProductDetails />} />
        </Routes>     
        <PageFooter />     
      </div>
  
  )
}

export default App;
