import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { formatCurrency } from './utils'
import {removeFromSaved,addToCart } from '../actions/cartActions'

function SavedItemsFooter() {
    const dispatch = useDispatch()

    const savedForLater = useSelector(state => state.cart.savedForLater)

        const handleAdd = (item) => {
            dispatch(removeFromSaved(item))
            dispatch(addToCart(item))
        }
    return (
        <>
        <div className="d-none d-lg-block">
            <div className="row  justify-content-center">
                <div className=" col-lg-12 ">
                    <hr />
                    <div className=""><h3>Saved Items</h3></div>
                    <div className="row justify-content-center mt-5">
                    {savedForLater.map(item=>{
                        return <div className="col-sm-6 col-lg-3 mx-5 text-center"> 
                        
                        <img src={item.image} height="150px" alt="" /> <br />
                        <div className="mt-3">{formatCurrency(item.price)}</div>
                        <div className="mt-3">{item.title}</div>

                        
                        

                        <div className="text-center">
                            <button className="btn text-danger" onClick={()=>dispatch(removeFromSaved(item))}> <h5>Remove</h5></button> 

                            <button className="btn  " onClick={()=>handleAdd(item)}><h5>Add to Cart</h5></button>

                        </div>
                        </div>
                    })}
                    </div>
                


                </div>
            </div>
        </div>

        <div class="col-12  d-lg-none d-xl-none">
            <div className="row">
            <div className="col-6 offset-3">
                    
                    <hr />
                    {savedForLater.map(item =>{
                        return <div key={item.id} className="row text-center align-items-center mt-5 ">
                            <div className="col-md-12 col-lg-4 d-flex justify-content-center">
                                
                                    <img src={item.image} height="150px" alt="" />
                                
                            </div>

                            <div className="col-md-12 col-lg-8 ">
                                <hr />
                                
                                    <div className="col-12 justify-content-around">
                                    {item.color} {item.title} {formatCurrency(item.price)}
                                    
                                    
                                    </div>
                                
                            
                        <div className="text-center">
                            <button className="btn " onClick={()=>dispatch(removeFromSaved(item))}>Remove</button>
                            <button className="btn  " onClick={()=>handleAdd(item)}>Add to Cart</button>

                        </div>
                        <hr />
                            </div>
                            </div>
                        
                        })}
                    
                </div>
            </div>


        </div>
        </>
    )
}

export default SavedItemsFooter
