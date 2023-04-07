import React, { useState } from 'react'
import GrassOutlinedIcon from '@mui/icons-material/GrassOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import AddShoppingCartSharpIcon from '@mui/icons-material/AddShoppingCartSharp';
import MenuOpenOutlinedIcon from '@mui/icons-material/MenuOpenOutlined';
import { NavLink } from 'react-router-dom';
export default function Navbar(props) {

const vars={
  color:'rgb(20,46,56)',
  fontSize:'2.5rem'
}
const navIcon={
  color:'white',
  fontSize:'1.5rem'
}
  return (
  <>
    <div className='nav-cont'>
      <nav>
          <div className='logo'>
          <GrassOutlinedIcon style={vars}/>
            <h3 className='logo-text'>ShrubIt</h3>
          </div>
          <div className='links'>
            <li><NavLink className ="head" to="/">Services</NavLink></li>
            <li><NavLink className ="head" to="/">About Us</NavLink></li>
            <li onClick={props.toggle}><NavLink  className ="head" to="/">Our product</NavLink>s</li>
            <li><NavLink  className ="head" to="/">Contact Us</NavLink></li>
            <li><AddShoppingCartSharpIcon/></li>
          </div>
      </nav>
      
      <div className='navigate'>
      
        <SearchOutlinedIcon style={navIcon}/>
        <PersonOutlineOutlinedIcon style={navIcon}/>
        <MenuOpenOutlinedIcon style={navIcon}/>
      </div>
    </div>
    
  </>
  )
}
