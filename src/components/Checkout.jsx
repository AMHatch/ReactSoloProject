import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { formatCurrency } from './utils'
import { removeFromCart,saveForLater,removeFromSaved,addToCart } from '../actions/cartActions'
import SavedItemsFooter from './SavedItemsFooter'
import { Link } from 'react-router-dom'

function Checkout() {
    const dispatch = useDispatch()
    const cartItems = useSelector(state => state.cart.cartItems)
    const numOfItems = useSelector(state => state.cart.numOfItems)
    const totalCost = useSelector(state => state.cart.totalCost)
    const savedForLater = useSelector(state => state.cart.savedForLater)

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
                        return <div key={item.id} className="row text-center align-items-center mt-5 ">
                            <div className="col-md-12 col-lg-4 d-flex justify-content-center">
                                
                                    <img src={item.image} height="150px" alt="" />
                                
                            </div>

                            <div className="col-md-12 col-lg-8 ">
                                <hr />
                                
                                    <div className="col-12 justify-content-around">
                                    {item.color} {item.title} {formatCurrency(item.price)}
                                    
                                    
                                    </div>
                                
                                <div className="mt-3">
                                    <button className="btn mx-2 text-danger" onClick={()=>dispatch(removeFromCart(item))}> <h5>Remove</h5></button>
                                    <button className="btn" onClick={ ()=>saveLater(item)}> <h5>Save for later</h5></button>
                                    <hr />
                                </div>
                            </div>
                            </div>
                        
                        })}
                        <div className="row mt-5">
                        <hr />
                            <div className="col-6">
                                <h2>{numOfItems} Items</h2>
                            </div>
                            <div className="col-6 text-end"> 
                                Subtotal: {formatCurrency(totalCost)} <br />
                                Tax:  {formatCurrency(totalCost * .0825)} <br />
                                Total: {formatCurrency(totalCost * 1.0825)} <br />
                                <Link to="/payment"><button className="btn btn-kombu"><h3>Checkout</h3></button></Link>
                            </div>
                        </div>
                </div>
            </div>
            <div className="row">
            <div className="col-6 offset-3"><SavedItemsFooter/> </div>
            </div>

            

        </div>
        
        </>
    )
}

export default Checkout
