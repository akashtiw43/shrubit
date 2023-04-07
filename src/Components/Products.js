import { useState } from 'react';
import styled from 'styled-components';
import { GrAdd } from "react-icons/gr";
import { BiMinus } from "react-icons/bi";
import { HiShoppingBag } from "react-icons/hi";
const images = {
    image1:require('../Images/bonsai1.webp'),
    image2:require('../Images/bonsai2.webp')
}


export default function Products(){
    const[selectImg , setSelectImg] = useState(images.image1);
    const[items,setItems] = useState(0);

    const Wrapper = styled.section`
      .prod-container{
        padding:20px 50px;
        display:flex;
        flex-direction:row;
        gap:5rem;
       
      }
      .leftimages{
        display:flex;
        flex-direction:column;
        gap:1rem;
        
      }
      .leftimages img{
        width:160px;
        height:160px;
        object-fit:cover;
        cursor:pointer;
      }
      .main-img{
        padding:0 30px 40px 10px;
      }
      .main-img img{
        width:550px;
        height:530px;
      }
      .prod-details{
        display:flex;
        flex-direction:column;
        gap:1rem;
      }
      h1{
        color:black;
        font-size:2rem;
      }
      p{
        font-size:1rem;
        color:grey;
      }
      .quantitydesc{
        display:flex;
        gap:1rem;
        
      }
      .prodquant{
        text-align:center;
      }
      .additem , .subtractitem{
        border:1px solid grey;
        padding:5px;
        background-color:lightgrey;
        border-radius:5px;
      }
      .addtocart{
        color: white;
        font-weight: 400;
        font-size: 1.1rem;
        background-color: rgb(48, 124, 71);
        border: none;
        margin-top: 35px;
        border-radius: 10px;
        margin-bottom: 20px;
        padding: 12px 22px;
      }
      .addtocart:hover{
        cursor: pointer;
        background: transparent;
        color: rgb(20,46,56);
        transition: .5s ease-in-out;
        border: 2px solid rgb(20,46,56);
      }
      .bag{
        margin-right:7px;
      }
      @media(max-width:781px){
        .leftimages{
            align-items:center;
        }
        .leftimages img{
            width:150px;
            heigh:150px;
        }
      }
    `;

    // const images = ["bonsai1.webp", "bonsai2.webp"];
    return(
        <>  
            <Wrapper>
            <div className="prod-container">
                    <div className="leftimages">
                        <img src={images.image1} alt="img1" onClick={()=>{setSelectImg(images.image1)}}/>
                        <img src={images.image2} alt="img2" onClick={()=>{setSelectImg(images.image2)}}/>
                    </div>
                <div className="main-img">
                    <img src={selectImg} alt="product_image"/>
                </div>
                <div className="prod-details">
                   <h1>Title</h1>
                   <span>$199</span>
                   <p>The ultimate goal of growing a Bonsai is to create a miniaturized but realistic representation of nature in the form of a tree. Bonsai are not genetically dwarfed plants, in fact, any tree species can be used to grow one.</p>
                   <div className='quantitydesc'>
                   <GrAdd className='additem' onClick={()=>{setItems(items+1)}}/>
                   <span className='prodquant'>{items}</span>
                   <BiMinus className='subtractitem' onClick={()=>{if(items!==0){setItems(items-1)}}}/>
                   </div>
                   <button className='addtocart'> <HiShoppingBag className='bag'/>ADD TO CART</button>
                </div>
            </div>
            </Wrapper>
        </>
    )
}