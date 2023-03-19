import React from 'react'
import image from '../Images/2.png'
export default function Footer() {
  return (
    <div className='footer'> 
        <div className='cont'>
            <div className='cont-left'>
                <img className='footer-img' src={image}/>
            </div>
            <div className='cont-right'>
                Some random text information about plants
            </div>    
        </div> 
    </div>
  )
}
