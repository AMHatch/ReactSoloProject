
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaHome } from "react-icons/fa";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import OffCanvasCart from '../OffCanvasCart';



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
      
       {numOfItems} Items in Cart 
      
    </Nav>
    </Container>
  </Navbar>
      {props.children}
    </>
  )
}

export default BaseLayout
