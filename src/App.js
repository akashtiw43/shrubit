import { GlobalStyle } from './Components/GlobalStyle';


import React from "react"
import "./App.css";
import Cart from "./Components/Cart";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar"
import Products from "./Components/Products";
import Footer  from "./Components/Footer";
import ProductPage from "./Components/ProductPage";
import Login from "./Components/Login";
import { Routes,Route } from "react-router-dom";
import { useDispatch , useSelector } from "react-redux";
import {summation} from "./Components/Features/Cart/CartSlice"
function App() {
  const cartItems=useSelector((store)=> store.cart)
  // console.log("fwa"+cartItems)
  const dispatch=useDispatch()
  React.useEffect(()=>{
    dispatch(summation())
  },[cartItems])
    return (
    <div className="App">
      {/* { product?
        <>
          <ProductPage  toggle={toggleProduct}/>
        </>:
        <>
          <Navbar toggle={toggleProduct}/>
          <Main/>
          <PostMain/>
          <Banner title="Plants" data={plants}/>
          <Banner title="Gardening Accesories & Tools" data={acc}/>
          <Banner title="Services" data={serv}/>
          <Footer/>
       </>
      } */}
      <Navbar/>
      <Routes>
        <Route path="/"element={<Home/>}/>
        <Route path="/products"element={<ProductPage/>}/>
        <Route path="/product/:id" element={<Products/>}/>
        <Route path="/cart"element={<Cart/>}/>
        <Route path="/login"element={<Login/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}





export default App;
