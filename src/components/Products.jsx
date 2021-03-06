import React,{useState,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { loadProducts } from '../actions/productActions'
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade'
import { addToCart, saveForLater } from '../actions/cartActions'
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
import Dropdown from 'react-bootstrap/Dropdown';
import { VscMenu } from "react-icons/vsc";
import { FaSortAmountDown} from "react-icons/fa"
import { FaSortAmountDownAlt} from "react-icons/fa"
import { FaSortAlphaDown} from "react-icons/fa"




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

  useEffect(() => {
    setProductType(workProducts)
  }, [products])

  const sort = (method) => {

    let sortProductType = [...productType]

    let sortedArr = sortProductType.sort(method)

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
        <div className="col mt-5 d-none d-lg-block">
          
        <img width="100%" src="https://media.nicksboots.com/wysiwyg/BuyWithConfidence.jpg" alt=""/>
        </div>
      </div>
      <div className="row "> 
      <div className="col-12 d-flex d-none d-lg-block mt-5 text-center">
      
        
        <button className="btn btn-kombu mx-3 link px-5" onClick={()=>setProductType(heritageProducts)}><h2> Heritage Boots</h2></button>
        <button className="btn btn-kombu mx-3 link px-5" onClick={()=>setProductType(workProducts)}><h2>Work Boots</h2></button>
        <button className="btn btn-kombu mx-3 link px-5" onClick={()=>setProductType(limitedProducts)}><h2> Limited Release Boots</h2></button>
        <button className="btn btn-kombu mx-3 link px-5" onClick={()=>setProductType(fireProducts)}><h2>Fire Boots</h2></button>
        <button className="btn btn-kombu mx-3 link px-5 " onClick={()=>setProductType(products)}><h2>All Boots</h2></button>
        <br /><br />

    
    <div className="col-10 mt-5 d-flex justify-content-end">

    <Dropdown className='mr-5 drop-down-class'>
      <Dropdown.Toggle variant="link" bsPrefix="p-0">
      <button className='btn btn-kombu mx-5'><h3 className='text-silk '> Sort &nbsp; <VscMenu/> </h3></button>
      </Dropdown.Toggle>
      <Dropdown.Menu>
      <Dropdown.Item onClick={()=>sort(compareName)} ><h2>Name <FaSortAlphaDown/></h2></Dropdown.Item>
        <Dropdown.Item onClick={()=>sort(comparePriceLow)} ><h2>Price <FaSortAmountDownAlt/> </h2></Dropdown.Item>
        <Dropdown.Item onClick={()=>sort(comparePriceHigh)} ><h2>Price <FaSortAmountDown/> </h2></Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </div>
      </div>


      <div className="col-9 d-lg-none mt-5">
      <img width="100%" src="https://media.nicksboots.com/wysiwyg/BuyWithConfidence.jpg" alt=""/>

      </div>

      <div className="col-2 d-lg-none mt-5 text-center">

      <Dropdown className='mr-5 drop-down-class'>
      <Dropdown.Toggle variant="link" bsPrefix="p-0">
      <button className='btn btn-kombu mx-5'><h1 className='text-white '> <VscMenu/> </h1></button>
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item className='text-kombu' onClick={()=>setProductType(heritageProducts)} ><h2>Heritage</h2></Dropdown.Item>
        <Dropdown.Item onClick={()=>setProductType(workProducts)} > <h2>Work</h2></Dropdown.Item>
        <Dropdown.Item onClick={()=>setProductType(limitedProducts)} ><h2>Limited</h2></Dropdown.Item>
        <Dropdown.Item onClick={()=>setProductType(fireProducts)} ><h2>Fire</h2></Dropdown.Item>
        <Dropdown.Item onClick={()=>setProductType(products)} ><h2>All</h2></Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item onClick={()=>sort(compareName)} ><h2>Name <FaSortAlphaDown/>  </h2></Dropdown.Item>
        <Dropdown.Item onClick={()=>sort(comparePriceLow)} ><h2>Price <FaSortAmountDownAlt/></h2></Dropdown.Item>
        <Dropdown.Item onClick={()=>sort(comparePriceHigh)} ><h2>Price <FaSortAmountDown/></h2></Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>
    
      
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
