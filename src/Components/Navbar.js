import React from 'react'
import GrassOutlinedIcon from '@mui/icons-material/GrassOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import MenuOpenOutlinedIcon from '@mui/icons-material/MenuOpenOutlined';
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
            <li>About us</li>
            <li onClick={props.toggle}>Our products</li>
            <li>Contact us</li>
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
