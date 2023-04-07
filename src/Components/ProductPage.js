import React, { useState } from 'react'
import Data from './Data'
import Product from './Product';
import GrassOutlinedIcon from '@mui/icons-material/GrassOutlined';
import { useParams } from 'react-router-dom';
export default function ProductPage({toggle}) {
    const {id} = useParams();
    const[maxPrice,setMaxPrice] = useState(1000);
    const vars={
        color:'rgb(20,46,56)',
        fontSize:'2.5rem'
      }
      const products=Data.map(item=>{
        return(
            <Product key={item.id} item={item}/>
        )
      })
  return (
    <>
        {/* <div className='product-nav'>
            <div className='logo' onClick={toggle}>
                <GrassOutlinedIcon style={vars}/>
                <h3 className='logo-text' onClick={toggle}>ShrubIt</h3>
            </div>
            <h5 className='product-nav-text' onClick={toggle}>Back to Home</h5>
        </div> */}
        <div className='product-cont'>
            <div className='product-sidebar'>
                <div className='filterItem'>
                    <h2>Product Categories</h2>
                    <div className='inputItem'>
                     <input type='checkbox' id='1' value={1}/>
                     <label form='1'>Outdoor Plants</label>
                    </div>
                    <div className='inputItem'>
                     <input type='checkbox' id='2' value={2}/>
                     <label form='1'>Indoor Plants</label>
                    </div>
                    <div className='inputItem'>
                     <input type='checkbox' id='3' value={3}/>
                     <label form='3'>Pots</label>
                    </div>
                    <div className='inputItem'>
                     <input type='checkbox' id='4' value={4}/>
                     <label form='4'>Accessories</label>
                    </div>
                </div>
                <div className='filterItem'>
                    <h2>Price Range</h2>
                    <div className='inputItem'>
                        <span>0</span><input type='range' min={0} max={6000} onChange={(event)=>{setMaxPrice(event.target.value)}}/><span>{maxPrice}</span>
                    </div>
                </div>
            </div>
            <div className='product-main'>
                <div className='products-list'>
                    {products}
                </div>
            </div>
        </div>
    </>
  )
}
