import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { formatCurrency } from './utils'
import { removeFromSaved,addToCart } from '../actions/cartActions'
import Fade from 'react-reveal/Fade'

function SavedItems() {
    const savedForLater = useSelector(state => state.cart.savedForLater)
    const numOfItemsSaved = useSelector(state => state.cart.numOfItemsSaved)
    const totalCostSaved = useSelector(state => state.cart.totalCostSaved)
    const dispatch = useDispatch()

    const handleAdd = (item) => {
        dispatch(removeFromSaved(item))
        dispatch(addToCart(item))
    }


    return (
        <>
        <hr />
        <h2>Saved Items</h2>
            <div>
                {
                savedForLater.length !== 0
                ?
                <div>
                    You have <em> {numOfItemsSaved}</em> items saved. 
                    <br />
                    Total Cost : {formatCurrency(totalCostSaved)}
                </div>
                :
                <div>You have no saved items</div>
                }
            </div>
            <Fade bottom cascade>
                <div className="row cart-items">
                    {savedForLater.map(item =>{
                        return <div className="col-12">
                            <hr />
                            <div className="d-flex">
                                <div>
                                    <img src={item.image} alt="" />
                                </div>
                                <div> &nbsp;&nbsp;{item.title}</div>
                                </div>
                                <div>{formatCurrency(item.price)} <br />
                                    <button className="btn text-danger" onClick={()=>dispatch(removeFromSaved(item))}>Remove</button>
                                    <button className="btn  " onClick={()=>handleAdd(item)}>Add to Cart</button>
                                </div>
                            </div>
                        })}
                    </div>
            </Fade>


        </>
    )
}

export default SavedItems
