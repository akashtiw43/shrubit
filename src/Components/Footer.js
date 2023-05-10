import React from 'react'
import styled from 'styled-components'
import { FiYoutube } from 'react-icons/fi';
import { FaInstagramSquare } from 'react-icons/fa';
import { SiFacebook } from 'react-icons/si';

// export default function Footer() {
//   return (
//     <div className='footer'> © Copyrights 2023 - 2024.ShrubItt Plant Nursery.All Rights Reserved.
//     </div>
//   )
// }
export default function Footer() { 
  const Wrapper = styled.section`
    
    .footer-bottom{
      display:flex;
      justify-content:space-around;
      align-items:center;
    }
    .footer-pre{
      display:flex;
      justify-content:space-around;
      align-items:center;
      flex-wrap:wrap;
    }
    
    .social{
      fontSize:1.5rem;
      display: flex;
      justify-content: space-between;
    }
    h3{
      text-align:center;
      
    }
  `;
  return(
    <Wrapper>
      <footer>
        <div className='footer-pre'>
          <div className='footer-address'>
            <h3>CONTACT</h3>
            <p>Raghav Nagar Near Durga Mandir, Deoria</p>
            <h5>aadijms@gmail.com</h5>
          </div>
          <div className='footer-socials'>
           <h3>Follow Us On</h3>
           <div className='social'>
           <FiYoutube/>
           <FaInstagramSquare/>
           <SiFacebook/>
           </div>
          </div>
          <div className='footer-contact'>
            <h3>Call Us On</h3>
            <a href="tel:9455078825">+91 9455078825</a>
          </div>
        </div>
        <hr/>
        <div className='footer-bottom'>
        
          <div>
            <p>©{new Date().getFullYear()} ShrubItt Plant Nursery.All Rights Reserved. </p>
          </div>
          <div>
           <p>Privacy Policy</p>
           <p>Terms And Conditions</p>
        </div>
        </div>
        
      </footer>
    </Wrapper>
  )
}

