
import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { formatCurrency } from './utils'
import { removeFromCart,saveForLater, } from '../actions/cartActions'
import Fade from 'react-reveal/Fade'
import SavedItems from './SavedItems'
import { Link } from 'react-router-dom'

const CartItems = () => {
  const cartItems = useSelector(state => state.cart.cartItems)
  const numOfItems = useSelector(state => state.cart.numOfItems)
  const totalCost = useSelector(state => state.cart.totalCost)
  const numOfItemsSaved = useSelector(state => state.cart.numOfItemsSaved)
  const dispatch = useDispatch()
  

  const saveLater = (item) => {
    dispatch(removeFromCart(item))
    dispatch(saveForLater(item))
    
  }

  return (
    <><div className="container mx-2">
    <h1>Shopping Cart</h1>
    <div>
      {
        cartItems.length !== 0
        ?
        <div>
          You have {numOfItems} items in your cart. 
          
          
        </div>
        :
        <div>Your cart is empty</div>
        }


    </div>
      <Fade top cascade>
        <div className="row cart-items">
          {cartItems.map(item =>{
            return <div key={item.id} className="col-12">
              <hr />
            <div className="d-flex">
              <div>
                <img src={item.image} alt="" />
              </div>
              <div> &nbsp;&nbsp;{item.title}  {item.quantity !== 0 ? `x ${item.quantity}` : '' }</div>
            </div>
            <div>{formatCurrency(item.price)}

            
            </div>
            <div>
            <button className="btn text-danger mx-2" onClick={()=>dispatch(removeFromCart(item))}> <h5>Remove</h5> </button> 

            <button className="btn" onClick={ ()=>saveLater(item)}> <h5>Save for later</h5> </button>

            
                
            </div>
            </div>
            
          })}
        </div>
      </Fade>
      <hr />
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-6 text-center">Total: {formatCurrency(totalCost)}</div>
        <div className="col-6 text-center"> { numOfItems !== 0 ? <Link to='/checkout'><button className="btn btn-kombu link"><h3>Checkout</h3></button></Link> : ''}  </div>
      </div>
      
      
      <div>
        {numOfItemsSaved !== 0 ? <SavedItems/> : <hr/>}
      </div>
      </div>
    </>
  )
}

export default CartItems
