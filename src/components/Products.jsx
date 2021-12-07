import React,{useState,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { loadProducts } from '../actions/productActions'


import Fade from 'react-reveal/Fade'
import { addToCart, saveForLater } from '../actions/cartActions'

import Details from './Details'
import FilterDropDown from './FilterDropDown'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';






//import products
const Products = () => {
  const [filterBy, setFilterBy] = useState(
    [
    {},
    {},

  ])
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.products)

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

  useEffect(() => {
    dispatch(loadProducts())
    
  }, [])

const handleAddCart = (product) => {
  dispatch(addToCart(product))
  toggleDrawer(anchor, true)
}

  return (
    <> 
    <div className="bg-silk"> 
    <div className="container mt-5">
      <div className="row justify-content-end mt-5"> 
      <div className="col-2 mt-5">
        <FilterDropDown filterBy={filterBy} setFilterBy={()=>setFilterBy}/>
      </div>
      </div>
      <div className="row mt-5">

        <div className="col-8 offset-2 mt-5">
          <Fade bottom cascade>
        < div className="row mt-5">
          {products.map(((product)=>{
            return <div className="col-sm-12 col-lg-4 mb-5 product" key={product.id} >
              
              <Card >
                  <CardMedia
                    component="img"
                    height=""
                    image={product.image}
                    alt={product.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h4" component="div" >
                      <div className="text-kombu text-center">
                    {product.title} : {product.color} <br /> {product.last}
                    </div>
                    </Typography>
                    <Typography variant="h5" >
                    <div className="text-kombu text-center">
                    <Details product={product}/>
                    </div>
                    </Typography>
                  </CardContent>
                  <CardActions className="justify-content-center">
                    
                  <button  className="btn btn-kombu" onClick={()=>handleAddCart(product)}>Add to Cart</button> 
                  <button className="btn text-kombu"  onClick={()=>dispatch(saveForLater(product))}>Save for later</button>
                  </CardActions>
              </Card>
              
            </div>
          }))}
        </div>
        </Fade>
        
        </div>
        
      </div>
    </div>
    </div>
    
    

    
    </>
  )
}

export default Products
