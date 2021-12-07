
import React from 'react'
import CheckoutForm from './CheckoutForm'
import { useSelector,useDispatch } from 'react-redux'
import { formatCurrency } from './utils'
import { removeFromCart,saveForLater,removeFromSaved,addToCart } from '../actions/cartActions'
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';


const stripePromise = loadStripe('pk_test_51K3omzIlS9A4QcRKhDfveFyAFB5SUTTTh0T4BGV6EsTsuNWYCByztyI6kKIO7ldjgSPdsrdm8ZxFGtUHcGQdN3XN00rKU5yTgT');


function Payment() {
    const dispatch = useDispatch()
    const cartItems = useSelector(state => state.cart.cartItems)
    const numOfItems = useSelector(state => state.cart.numOfItems)
    const totalCost = useSelector(state => state.cart.totalCost)
    const savedForLater = useSelector(state => state.cart.savedForLater)

    const options = {
        // passing the client secret obtained from the server
        clientSecret: '{{CLIENT_SECRET}}',
      };

    const saveLater = (item) => {
        dispatch(removeFromCart(item))
        dispatch(saveForLater(item))
        
        }
        const handleAdd = (item) => {
            dispatch(removeFromSaved(item))
            dispatch(addToCart(item))
        }
    return (
        <>
            <div className="container">
            <div className="row">
                <div className="col-6 offset-3">
                    <h1>Checkout</h1> <br />
                    <hr />
                    {cartItems.map(item =>{
                        return <div key={item.id} className="row align-items-center">

                            <div className="col-12 ">
                                
                                    <div className="col-12 justify-content-around">
                                    {item.color} {item.title} {formatCurrency(item.price)}
                                    
                                    
                                    </div>
                                
                                <div >
                                    <button className="btn mx-2 text-danger" onClick={()=>dispatch(removeFromCart(item))}> <h5>Remove</h5></button>
                                    <button className="btn" onClick={ ()=>saveLater(item)}> <h5>Save for later</h5></button>
                                    <hr />
                                </div>
                            </div>
                            </div>
                        
                        })}
                        <div className="row mt-5">
                        <hr />
                        <Elements stripe={stripePromise} options={options}>
                            <CheckoutForm />
                        </Elements>



                            <div className="col-6">
                                <h2>{numOfItems} Items</h2>
                            </div>
                            <div className="col-6 text-end"> 
                                Subtotal: {formatCurrency(totalCost)} <br />
                                Tax:  {formatCurrency(totalCost * .0825)} <br />
                                Total: {formatCurrency(totalCost * 1.0825)} <br />
                                <button className="btn btn-kombu"><h3>Place Order</h3></button>
                            </div>
                        </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Payment
