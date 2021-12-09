import React,{useState,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { loadProducts } from '../actions/productActions'
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade'
import { addToCart, saveForLater } from '../actions/cartActions'
import FilterDropDown from './FilterDropDown'
import Details from './Details'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';



//import products
const Products = () => {
  
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.products)
  const workProducts = products.filter(product=>product.type === 'work')
  const fireProducts = products.filter(product=>product.type === 'fire')
  const heritageProducts = products.filter(product=>product.type === 'casual')
  const limitedProducts = products.filter(product=>product.type === 'limited')
 
  

  const [productType, setProductType] = useState(workProducts)
  
  const [open, setOpen] = useState(false)




  const compareName = (a,b) => {
    if ( a.title < b.title ){
        return -1;
    }
    if ( a.title > b.title ){
        return 1;
    }
    return 0;
}

  const comparePriceLow = (a,b) => {
    if ( a.price < b.price ){
        return -1;
    }
    if ( a.price > b.price ){
        return 1;
    }
    return 0;
}


  const comparePriceHigh = (a,b) => {
    if ( a.price > b.price ){
        return -1;
    }
    if ( a.price < b.price ){
        return 1;
    }
    return 0;
}
const name = compareName
const high = comparePriceHigh
const low = comparePriceLow


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
  
    setProductType(products)
    
    
  }, [])


useEffect(() => {
  console.log("UI UPDATED");



  }, [productType])

  const sort = (method) => {
    
    let sortedArr = productType.sort(method)

    setProductType(sortedArr)

    console.log("productType",productType)
    }
  
  // productType.sort(high)
  


const handleAddCart = (product) => {
  dispatch(addToCart(product))
  toggleDrawer(anchor, true)
  setOpen(true);
}
const handleClose = (event, reason) => {
  if (reason === 'clickaway') {
    return;
  }

  setOpen(false);
};



const action = (
  <React.Fragment>
    <Button color="secondary" size="small" onClick={handleClose}>

    </Button>
    <IconButton
      size="small"
      aria-label="close"
      color="inherit"
      onClick={handleClose}
    >
      <CloseIcon fontSize="small" />
    </IconButton>
  </React.Fragment>
);

const message = (
  <h3 className="text-silk">Added to Cart</h3>
)


  return (
    <> 
    <div className="container mt-5">
      <div className="row mt-5">
        <div className="col mt-5">
          
        <img width="100%" src="https://media.nicksboots.com/wysiwyg/BuyWithConfidence.jpg" alt=""/>
        </div>
      </div>
      <div className="row "> 
      <div className="col d-flex d-none d-lg-block mt-5 text-center">
      
        
        <button className="btn btn-kombu mx-3 link px-5" onClick={()=>setProductType(heritageProducts)}><h2> Heritage Boots</h2></button>
        <button className="btn btn-kombu mx-3 link px-5" onClick={()=>setProductType(workProducts)}><h2>Work Boots</h2></button>
        <button className="btn btn-kombu mx-3 link px-5" onClick={()=>setProductType(limitedProducts)}><h2> Limited Release Boots</h2></button>
        <button className="btn btn-kombu mx-3 link px-5" onClick={()=>setProductType(fireProducts)}><h2>Fire Boots</h2></button>
        <button className="btn btn-kombu mx-3 link px-5 " onClick={()=>setProductType(products)}><h2>All Boots</h2></button>
        <br /><br />

        <button className="btn btn-silk mx-3 link px-5" onClick={()=>sort(name)}><h2> Name A-Z</h2></button>
        <button className="btn btn-silk mx-3 link px-5" onClick={()=>sort(low)}><h2> Price: Ascending </h2></button>
        <button className="btn btn-silk mx-3 link px-5" onClick={()=>sort(high)}><h2> Price: Descending </h2></button>
        
        
      </div>
      <div className="col d-lg-none mt-5 text-start">

        
        <button className="btn text-silk mx-3 link " onClick={()=>setProductType(workProducts)}><h2>Work Boots</h2></button> <br />
        <button className="btn text-silk mx-3 link " onClick={()=>setProductType(fireProducts)}><h2>Fire Boots</h2></button> <br />
        <button className="btn text-silk mx-3 link " onClick={()=>setProductType(heritageProducts)}><h2> Heritage Boots</h2></button> <br />
        <button className="btn text-silk mx-3 link " onClick={()=>setProductType(limitedProducts)}><h2> Limited Release Boots</h2></button> <br />
        <button className="btn text-silk mx-3 link  " onClick={()=>setProductType(products)}><h2>All Boots</h2></button> <br />
      
      
      </div>
      </div>
      <div className="row ">

        <div className="col-8 offset-2 ">
        <Fade bottom cascade>
        <div className="row mt-5">
        

          {productType.map(((product)=>{
            return <div className="col-sm-12 col-lg-4 mb-4 product" key={product.id} >
              
              <Card >
              <Link className="link" to={"/productDetails/"+ product.id }>
                  <CardMedia
                    component="img"
                    height=""
                    image={product.image}
                    alt={product.title}
                  />
                  </Link>
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
                    
                  <button className="btn btn-kombu" onClick={()=>handleAddCart(product)}>Add to Cart</button> 

                  <button className="btn text-kombu" onClick={()=>dispatch(saveForLater(product))}>Save for later</button>
                  </CardActions>
              </Card>
            
              
            </div>
          }))}
          
        </div>
        </Fade>
        
        
        <Snackbar 
          open={open}
          
          autoHideDuration={3000}
          onClose={handleClose}
          message={message}
          action={action}
          anchorOrigin={{vertical: 'top', horizontal: 'right'}}
          className="btn-kombu"/>
        </div>
        
      </div>
    </div>

    <div className="row mb-5 ">
      <div className="col-12 d-flex d-none d-lg-block  text-center mb-5">
      <img className="mb-5" src="/images/shop-nicks-handmade-boots-online.jpeg" width="50%" alt="boot" />
      </div>
      <div className="mt-5 mb-5"></div>
    

    </div>
    
    
    

    
    </>
  )
}

export default Products
