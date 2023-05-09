import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { OpenModal } from './Features/modal/modalSlice'
import CartItem from './CartItem'
import Modal from './Modal'
const Cart = () => {
    const dispatch=useDispatch()
    const {cartItems,total,amount}=useSelector((store)=>store.cart)
    const{isOpen} =useSelector((store)=>store.modal)
    if (amount < 1) {
        return (
          <section className='cart'>
            <header>
              <h2>your bag</h2>
              <h4 className='empty-cart'>is currently empty</h4>
            </header>
          </section>
        );
    }else{
        return (
            <div>
                { isOpen && <Modal/>}
                <section className='cart'>
                            <header>
                            <h2>your bag</h2>
                            </header>
                            <div className='cart-item-cont'>
                            {cartItems.map((item)=>{
                    
                    return( <CartItem item={item}/>     )
                })}    
                            </div>
                            <hr />
                            <footer>
                            <div className='cart-total'>
                                <h4>total <span>${total}</span> </h4>
                            </div>
                            <button className='btn clear-btn' onClick={()=>{dispatch(OpenModal())}}>
                                clear cart
                            </button>
                            </footer>
                      </section>
                    
                   
                </div>
            
          )
    }
  
}

export default Cart