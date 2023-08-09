
import './App.css';
import Footer from "./Footer"
import Header from './PageHeader';
import Newnav from "./Nav"
import { Route, Routes } from 'react-router-dom';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Review } from './pages/Review';
import { Home } from './pages/Home';



function App() { 
  return (
    <main>
      <div>      
        <Header />
        <Newnav />
        <Routes>
          <Route path='/about' element = {<About />} />
          <Route path='/contact' element = {<Contact />} />
          <Route path='/review' element = {<Review />} />
          <Route path='/' element = {<Home />} />
        </Routes>     
        <Footer />     
      </div>
    </main>
  )
}

export default App;
