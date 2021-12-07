import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {useParams, useNavigate } from 'react-router-dom'
import { formatCurrency } from './utils'
import { removeFromCart,saveForLater,removeFromSaved,addToCart } from '../actions/cartActions'
import SavedItemsFooter from './SavedItemsFooter'

function ProductDetails() {
    const {ProductID} = useParams()

    const dispatch = useDispatch()
    const cartItems = useSelector(state => state.cart.cartItems)
    const numOfItems = useSelector(state => state.cart.numOfItems)
    const totalCost = useSelector(state => state.cart.totalCost)
    const savedForLater = useSelector(state => state.cart.savedForLater)
    const products = useSelector(state => state.products.products)

    console.log("productID",ProductID);

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
            <h1></h1>



            <SavedItemsFooter/>
        </>
    )
}

export default ProductDetails
