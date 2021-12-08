import React, {useEffect, useState,} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {useParams, } from 'react-router-dom'

import { removeFromCart,saveForLater,addToCart } from '../actions/cartActions'
import SavedItemsFooter from './SavedItemsFooter'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';


function ProductDetails() {
    const {ProductID} = useParams()
    const [detailsArray, setdetailsArray] = useState([])

    const dispatch = useDispatch()
    const savedForLater = useSelector(state => state.cart.savedForLater)
    const products = useSelector(state => state.products.products)


    useEffect(() => {
        let array =  products.find((product) => {
            return product.id === ProductID
        })
        setdetailsArray(array)
    }, [ProductID])




    const anchor = "right"
    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }
        }

        const handleAddCart = (product) => {
            dispatch(addToCart(product))
            toggleDrawer(anchor, true)
            } 
    return (
        <> 
        
        <div className="container  mt-5 text-kombu">
            <div className="row " style={{height:"7vh"}}> </div>
            <div className="row">
                <div className="col-12 d-flex justify-content-center display-2">
                    <Card>
                        <CardContent className="text-kombu text-center" >
                        {detailsArray.color} {detailsArray.title} : {detailsArray.last}
                        </CardContent>
                    </Card>
                    
                </div>
            </div>
            <div className="row mt-5 mb-5  align-items-center">
                <div className=" col-12-sm col-lg-6 mt-5">
                    <Card>
                    <CardMedia
                    component="img"
                    width="500px"
                    image={detailsArray.image}
                    alt={detailsArray.title}
                    />
                    </Card>
                </div>

                <div className="col-12-sm col-lg-6 mt-4 " height="500px">
                    <div className="mb-5 ">
                    <Card>
                    <CardContent className="text-kombu">
                    <h2>{detailsArray.description}</h2>
                    </CardContent>
                    </Card>
                    </div>

                    <div className="mb-5">
                    <Card>
                    <CardContent className="text-kombu">
                    <h2>Boot: {detailsArray.title}</h2>
                    <h2>Color: {detailsArray.color}</h2>
                    <h2>Last: {detailsArray.last}</h2>
                    <h2>Leather: {detailsArray.leather}</h2>
                    <h2>Outsole: {detailsArray.outsole}</h2>
                    <h2>Boot Height: {detailsArray.height} </h2>
                    <h2>Price: $ {detailsArray.price}</h2>
                    <h2>Resole, Rebuild</h2>
                    <div className="mt-3 d-flex justify-content-center">
                        <button className="btn btn-kombu link" onClick={()=>handleAddCart(detailsArray)}> <h3>Add to Cart</h3> </button> &nbsp;
                        <button className="btn text-kombu link" onClick={()=>dispatch(saveForLater(detailsArray))}><h3>Save for later</h3></button>
                    </div>
                    </CardContent>
                    </Card>
                    </div>
                </div>
            </div>
        </div>
        
        
        


            {savedForLater.length !== 0 ? <SavedItemsFooter/> : ""}
            
        </>
    )
}

export default ProductDetails
