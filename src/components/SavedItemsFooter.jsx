import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {removeFromSaved,addToCart } from '../actions/cartActions'
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


function SavedItemsFooter() {
    const dispatch = useDispatch()

    const savedForLater = useSelector(state => state.cart.savedForLater)

        const handleAdd = (item) => {
            dispatch(removeFromSaved(item))
            dispatch(addToCart(item))
        }
    return (
        <>
        <div className="mt-5 mb-5">
            <div className="row  justify-content-center">
                <div className=" col-lg-12 mb-5">
                
                    <div className="display-4 text-center text-silk"> Saved Items</div>

                    <div className="row justify-content-center mt-5 mb-5">

                    {savedForLater.map(item=>{
                        return <div className="col-sm-12 col-lg-2 mb-5 d-flex justify-content-center text-center"> 
                        
                        <Card sx={{width:"250px"}} className=" " >
                        <Link className="link" to={"/productDetails/"+ item.id }>
                                <CardMedia 
                                    component="img"
                                    image={item.image}
                                    alt={item.title}
                                />
                                </Link>
                                <CardContent>
                                    <Typography variant="h5" >
                                    <div className="text-kombu text-center">
                                    {item.color} <br />
                                    {item.title} <br />
                                    ${item.price}
                                    </div>
                                    </Typography>
                                </CardContent>
                                <CardActions className="justify-content-center">
                                <button className="btn text-danger" onClick={()=>dispatch(removeFromSaved(item))}> <h5>Remove</h5></button> 

                                <button className="btn  " onClick={()=>handleAdd(item)}><h5>Add to Cart</h5></button>

                                </CardActions>
                            </Card>

                        
                        

                        </div>
                    })}
                    </div>
                


                </div>
            </div>
        </div>


    
        </>
    )
}

export default SavedItemsFooter
