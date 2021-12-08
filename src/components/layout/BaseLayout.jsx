
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaHome } from "react-icons/fa";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import OffCanvasCart from '../OffCanvasCart';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';



const BaseLayout = (props) => {
  const numOfItems = useSelector(state => state.cart.numOfItems)

  return (
    <>


    <Navbar className="mb-5 bg-kombu text-silk" fixed="top"  variant="dark">
    <Container>

    {/* <Link className="link mx-3" to="/home"><h2>Nicks Handmade Boots</h2></Link>  */}
    
    <Nav className=" align-items-center">
      <Link className="link mx-3" to="/">< FaHome /></Link>
      <Link className="link mx-3" to="/products">Products</Link>
      </Nav>
      <Nav className=" justify-content-end align-items-center">
      <Link className="link mx-3" to="#"><OffCanvasCart/></Link>
      
      {numOfItems.length === 0 ? `${numOfItems} Items in Cart`: `${numOfItems} Items in Cart` }
      
    </Nav>
    </Container>
  </Navbar>
      {props.children}

  <footer className="btn-kombu p-2 d-flex justify-content-center align-items-center fixed-bottom">
Developed by&nbsp;<a className="link" href="https://amhatch.com">Andrew Hatch</a> &nbsp;
<a className="link" href="https://github.com/AMHatch/ReactSoloProject" target="_blank" rel="noreferrer"><GitHubIcon/></a>&nbsp;
<a className="link" href="https://www.linkedin.com/in/amhatch/" target="_blank" rel="noreferrer"><LinkedInIcon/> </a>
  </footer>
    </>
  )
}

export default BaseLayout
