import React from 'react';
import './App.css';
import { BrowserRouter ,Routes , Route , Outlet, NavLink} from 'react-router-dom';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import { GlobalStyle } from './Components/GlobalStyle';
import ProductPage from './Components/ProductPage';
import Products from './Components/Products';


const Layout =()=>{
  return(
    <div className='app'>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}


function App() {
  return (
    <BrowserRouter>
    <GlobalStyle/>
      <Routes>
        <Route path ='/' element={<Layout/>}>
        <Route path='/' element={<Home/>} />
        <Route path='/productpage/:id' element={<ProductPage/>} />
        <Route path='/products/:id' element={<Products/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
