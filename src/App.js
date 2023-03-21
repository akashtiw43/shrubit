
import React from "react"
import "./App.css";
import Navbar from "./Components/Navbar"
import Main from "./Components/Main"
import PostMain from "./Components/PostMain"
import Banner from "./Components/Banner"
import Footer  from "./Components/Footer";
import ProductPage from "./Components/ProductPage";
function App() {
  const [product,setProduct]=React.useState(true)
  const plants=[{src:"plant1.webp",name:"Cactus & Succulents"},{src:"plant2.webp",name:"Bonsai Plants"},
                {src:"plant3.webp",name:"Flowering Plants"},{src:"p4.webp",name:"Climbers & Creepers"}]

  const acc=[{src:"q1.webp",name:"Border Spades"},{src:"q2.webp",name:"Splitters"},
             {src:"q3.webp",name:"Shovel"},{src:"q4.webp",name:"Garden Weeders"}]
  
  const serv=[{src:"s1.webp",name:"Terrace Garden",info:"Our trained staff make each project with passion and bring to life a designed environment with creativity"}
             ,{src:"s2.jpg",name:"Row Houses",info:"Our trained staff make each project with passion and bring to life a designed environment with creativity"},
              {src:"s3.webp",name:"Maintenance Service",info:"Our trained staff make each project with passion and bring to life a designed environment with creativity"},
              {src:"s4.webp",name:"Rental Programs",info:"Our trained staff make each project with passion and bring to life a designed environment with creativity"}]
  function toggleProduct(){
      setProduct(prev=>!prev)
  }
    return (
    <div className="App">
      { product?
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
      }
    </div>
  );
}

export default App;
