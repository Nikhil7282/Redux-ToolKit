import React from 'react'
import {ChevronUp,ChevronDown} from "../icons"
import { useDispatch } from 'react-redux'
import { decreaseItem, increaseItem, removeItem } from '../features/cart/cartSlice'



function CartItem({amount,price,img,title,id}) {
  // console.log(id);
  const dispatch=useDispatch()
  return (
    <article className='cart-item'>
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className='item-price'>${price}</h4>
        {/* remove button */}
        <button className='remove-btn'
        onClick={()=>dispatch(removeItem(id))}
        >remove</button>
      </div>
      <div>
        {/* increase amount */}
        <button className='amount-btn' onClick={()=>{
          dispatch(increaseItem(id))
        }}>
          <ChevronUp />
        </button>
        {/* amount */}
        <p className='amount'>{amount}</p>
        {/* decrease amount */}
        <button className='amount-btn' onClick={()=>{
          dispatch(decreaseItem(id))
        }}>
          <ChevronDown />
        </button>
      </div>
    </article>
  )
}

export default CartItem