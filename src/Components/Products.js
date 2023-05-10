import { useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import StarIcon from '@mui/icons-material/Star';
import Data from './Data'
import { useDispatch } from 'react-redux';
import { addToCart } from './Features/Cart/CartSlice';
const images = {
    image1:require('../Images/bonsai1.webp'),
    image2:require('../Images/bonsai2.webp')
}


export default function Products(){
    const dispatch=useDispatch()
    const id=useParams().id
    console.log(id);
    const prod=Data.find((item)=>item.id==id)
    console.log(prod);
    var code=require(`../Images/${prod.coverImg}`)
    const[selectImg , setSelectImg] = useState(code);
    const[items,setItems] = useState(0);

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
        padding-left:2rem;
      }
      h1{
        color:black;
        margin-bottom : 0;
        font-size:1.8rem;
        font-weight:400;
        letter-spacing:3px;
      }
      p{
        font-size:1rem;
        color:grey;
        margin-bottom:2rem;
      }
      .quantitydesc{
        display:flex;
        gap:0.5rem;
      }
      .prodquant{
        // text-align:center;
        transform:translateY(-1px);
      }
      .additem , .subtractitem{
        border:1px solid grey;
        padding:3px;
        background-color:lightgrey;
        border-radius:5px;
        font-size:0.8rem;
      }
      .btn-cont{
        display:flex;
        gap:1rem;
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
                   <h1>{prod.title}</h1>
                   <h4 className='product-price' style={{marginTop:'5px',fontWeight:700,fontSize:'1.2rem'}}>{prod.price}</h4>
                   <div className="product--stats">
                      <StarIcon className="product--star" style={{fontSize:'1.3rem'}}/>
                      <span  style={{fontSize:'1rem'}} >{prod.stats.rating}</span>
                      <span style={{fontSize:'1rem',marginLeft:'6px',color:'gray'}}> ({prod.stats.reviewCount})</span>
                  </div>
                   <p>The ultimate goal of growing a Bonsai is to create a miniaturized but realistic representation of nature in the form of a tree. Bonsai are not genetically dwarfed plants, in fact, any tree species can be used to grow one.</p>
                   <div className='quantitydesc'>
                   {/* <GrAdd className='additem' onClick={()=>{setItems(items+1)}}/> */}
                   <span className='prodquant'>{items}</span>
                   {/* <BiMinus className='subtractitem' onClick={()=>{if(items!==0){setItems(items-1)}}}/> */}
                   </div>
                   <div className='btn-cont'>
                      <button className='addtocart' onClick={()=>dispatch(addToCart({
                        id:prod.id,
                        coverImg:prod.coverImg,
                        price:prod.price,
                        qty:prod.qty,
                        stats:{
                          rating:prod.stats.rating,
                          reviewCount:prod.stats.reviewCount
                        }
                      }))}> ADD TO CART</button>
                      <button className='wishlist'> <FavoriteBorderOutlinedIcon  style={{fontSize:'1.3rem'}}/> WISHLIST</button>
                   </div>
                </div>
           </div>
          </Wrapper>
        </>
    )
}