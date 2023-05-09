import React from 'react'
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import { useDispatch } from 'react-redux';
import { removeItem , increase , decrease } from './Features/Cart/CartSlice';
const CartItem = ({item}) => {
    const dispatch=useDispatch()
  var code=require(`../Images/${item.coverImg}`)
  return (
    <article className='cart-item'>
            <img src={code} alt={item.title} />
            <div>
                <h4>{item.title}</h4>
                <h4 className='item-price'>${item.price}</h4>
                <button className='remove-btn' onClick={()=>{dispatch(removeItem(item.id))}}>remove</button>
            </div>
            <div className='amount-cont'>
                <button className='amount-btn' onClick={()=>{dispatch(increase(item.id))}}><KeyboardArrowUpOutlinedIcon/></button>
                 <p className='amount'>{item.qty}</p>
                 <button className='amount-btn' onClick={()=>{item.qty > 1 ? dispatch(decrease(item.id)) : dispatch(removeItem(item.id))}}><KeyboardArrowDownOutlinedIcon/></button>
             </div>
             <hr/>
     </article>
  )
}

export default CartItem