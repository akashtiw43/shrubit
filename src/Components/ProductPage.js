import React from 'react'
import Data from './Data'
import Product from './Product';
import GrassOutlinedIcon from '@mui/icons-material/GrassOutlined';
export default function ProductPage({toggle}) {
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
        <div className='product-nav'>
            <div className='logo' onClick={toggle}>
                <GrassOutlinedIcon style={vars}/>
                <h3 className='logo-text' onClick={toggle}>ShrubIt</h3>
            </div>
            <h5 className='product-nav-text' onClick={toggle}>Back to Home</h5>
        </div>
        <div className='product-cont'>
            <div className='product-sidebar'>
                <div> Filter</div>
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
