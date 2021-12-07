
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
          You have <em>{numOfItems}</em> items in the cart. 
          <br />
          Total Cost : {formatCurrency(totalCost)}
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
              <div> &nbsp;&nbsp;{item.title} x {item.quantity}</div>
            </div>
            <div>{formatCurrency(item.price)}

            
            </div>
            <div>
            <button className="btn text-danger mx-2" onClick={()=>dispatch(removeFromCart(item))}>Remove</button> 

            <button className="btn" onClick={ ()=>saveLater(item)}> Save for later</button>

            
                
            </div>
            </div>
            
          })}
        </div>
      </Fade>
      
      <div className=" text-end"> { numOfItems !== 0 ? <Link to='/checkout'><button className="btn btn-kombu"><h3>Checkout</h3></button></Link> : ''}  </div>
      <div>
        {numOfItemsSaved !== 0 ? <SavedItems/> : <hr/>}
      </div>
      </div>
    </>
  )
}

export default CartItems
