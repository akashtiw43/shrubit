import React from 'react'
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import GrassOutlinedIcon from '@mui/icons-material/GrassOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import AddShoppingCartSharpIcon from '@mui/icons-material/AddShoppingCartSharp';
import MenuOpenOutlinedIcon from '@mui/icons-material/MenuOpenOutlined';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
export default function Navbar(props) {

const vars={
  color:'rgb(20,46,56)',
  fontSize:'2.5rem'
}
const navIcon={
  color:'white',
  fontSize:'1.7rem',
  cursor:'pointer'
}
const {amount} = useSelector((store)=>store.cart)
 return (
  <React.Fragment>
    <div className='nav-cont'>
      <nav>
          <div className='logo'>
            <GrassOutlinedIcon style={vars}/>
            <h3 className='logo-text'><Link to="/" className='no-decoration'>ShrubIt</Link></h3>
          </div>
          <div className='links'>
            <li> About us</li>
            <li><Link to="/products"className='no-decoration'>Our Products</Link></li>
            <li>Contact us</li>
          </div>
      </nav>
      
      <div className='navigate'>
      
        <SearchOutlinedIcon style={navIcon}/>
        <Link to='/login' className='no-decoration'><PersonOutlineOutlinedIcon style={navIcon}/></Link>
        <div className='cart-logo'>
          <Link to="/cart" className='no-decoration'><LocalMallOutlinedIcon style={navIcon}/></Link>
          { amount>0 && <div className='nav-cart-cont'>
                        <p className='nav-cart-amount'>{amount}</p>
                      </div>
            }
        </div>
      </div>
    </div>
  </React.Fragment>
  )
}
