import { useState } from 'react';
import styled from 'styled-components';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import StarIcon from '@mui/icons-material/Star';
import { useParams } from 'react-router-dom';
import Data from './Data'
import { useSelector } from 'react-redux';


export default function Products(){
    const Wrapper = styled.section`
      .prod-container{
        padding:20px 50px;
        display:grid;
        height:75vh;
        grid-template-columns: 50% 45%;
      }
      .prod-left{
        display:grid;
        grid-template-columns:20% auto;
        grid-column-gap:1rem;
      }
      .left-images{
        display:flex;
        flex-direction:column;
        gap:1rem;
        padding:1rem 0;
        justify-content:center;
        align-items:center;
      }
      .left-images img{
        width:100%;
        height:30%;
        object-fit:cover;
        cursor:pointer;
      }
      .main-img{
        display:flex;
        justify-content:center;
        align-items:center;
      }
      .main-img img{
        width: 90%;
        height: 90%;
      }
      .prod-details{
        display:flex;
        flex-direction:column;
        // gap:1rem;
        padding-left:1rem;
      }
      h1{
        text-align:start;
        color:black;
        margin-bottom : 0;
        font-size:1.8rem;
        font-weight:400;
        letter-spacing:3px;
      }
      p{
        text-align:start;
        font-size:1rem;
        color:grey;
        margin-bottom:2rem;
      }
      .quantitydesc{
        display:flex;
        align-items:center;
        gap:0.5rem;
      }
      .prodquant{
        // text-align:center;
        font-size:1.2rem;
        font-weight:500;
        transform:translateY(-1px);
      }
      .additem , .subtractitem{
        border-radius:5px;
        font-size:1.2rem;
        color:gray;
      }
      .btn-cont{
        display:flex;
        gap:1rem;
      }
      .addtocart{
        display:flex;
        gap:0.5rem;
        justify-content:center;
        align-items:center;
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
      .wishlist{
        display:flex;
        gap:0.5rem;
        justify-content:center;
        align-items:center;
        color: rgb(48, 124, 71);
        font-weight: 400;
        font-size: 1.1rem;
        background-color: transparent;
        border: 2px solid rgb(48,124,71);
        margin-top: 35px;
        border-radius: 10px;
        margin-bottom: 20px;
        cursor:pointer;
        padding: 10px 22px;
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
    const {id}=useParams()
    const currItem=Data.find((item)=>item.id==id)
    
    // var quant=currItem.qty
    const images = {
    image1:require(`../Images/${currItem.coverImg}`),
    image2:require('../Images/plant2.webp')
    }
    const[selectImg , setSelectImg] = useState(images.image1);
    const[items,setItems] = useState(1);
    let cartItems=useSelector((store)=>store.cart)
    const addToCart=()=>{
        cartItems={...cartItems,currItem}
    }
    // const images = ["bonsai1.webp", "bonsai2.webp"];~
    return(
        <>  
            <Wrapper>
            <div className="prod-container">
                <div className='prod-left'>
                    <div className="left-images">
                        <img src={images.image1} alt="img1" onClick={()=>{setSelectImg(images.image1)}}/>
                        <img src={images.image2} alt="img2" onClick={()=>{setSelectImg(images.image2)}}/>
                    </div>
                    <div className="main-img">
                        <img src={selectImg} alt="product_image"/>
                    </div>
                </div>
                <div className="prod-details">
                   <h1>{currItem.title}</h1>
                   <h4 className='product-price' style={{marginTop:'5px',fontWeight:700,fontSize:'1.2rem',textAlign:'start'}}>${currItem.price}</h4>
                   <div className="product--stats">
                      <StarIcon className="product--star" style={{fontSize:'1.3rem'}}/>
                      <span  style={{fontSize:'1rem'}} >{currItem.stats.rating}</span>
                      <span style={{fontSize:'1rem',marginLeft:'6px',color:'gray'}}> ({currItem.stats.reviewCount})</span>
                  </div>
                   <p>The ultimate goal of growing a Bonsai is to create a miniaturized but realistic representation of nature in the form of a tree. Bonsai are not genetically dwarfed plants, in fact, any tree species can be used to grow one.</p>
                   <div className='quantitydesc'>
                   <RemoveCircleOutlineOutlinedIcon className='subtractitem' onClick={()=>{if(items!==1){setItems(items-1)}}}/>
                   <span className='prodquant'>{items}</span>
                   <AddCircleOutlineOutlinedIcon className='additem' onClick={()=>{setItems(items+1)}}/>
                   </div>
                   <div className='btn-cont'>
                      <button className='addtocart'onClick={()=>addToCart()}> <LocalMallOutlinedIcon className='bag'/>ADD TO CART</button>
                      <button className='wishlist'> <FavoriteBorderOutlinedIcon  style={{fontSize:'1.3rem'}}/> WISHLIST</button>
                   </div>
                </div>
           </div>
          </Wrapper>
        </>
    )
}