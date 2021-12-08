import React,{useState} from 'react'
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import CartItems from './CartItems'
import { FaShoppingCart } from "react-icons/fa";
import { FaChevronCircleRight } from "react-icons/fa";


export default function OffCanvasCart() {


const anchor = "right"

const [state, setState] = useState({
        right: false,
        })


const toggleDrawer = (anchor, open) => (event) => {
if (
    event &&
    event.type === 'keydown' &&
    (event.key === 'Tab' || event.key === 'Shift')
) {
    return;
}

setState({ ...state, [anchor]: open });
};

const list = (anchor) => (
<Box
    sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
    role="presentation"
>
    <button className="btn text-kombu" onClick={toggleDrawer(anchor, false)}> <h2>< FaChevronCircleRight/></h2> </button>
    <List className="justify-content-center">

    <CartItems/>
    
    </List>
</Box>
);

return (
<div>
    
    <React.Fragment key={anchor}>

        <button className="btn btn-silk"  onClick={toggleDrawer(anchor, true)}> <FaShoppingCart/> </button>

        <SwipeableDrawer
        anchor={anchor}
        open={state[anchor]}
        onClose={toggleDrawer(anchor, false)}
        onOpen={toggleDrawer(anchor, true)}
        ModalProps={{
            keepMounted: true,
        }}
        >
        {list(anchor)}
        </SwipeableDrawer>
    </React.Fragment>
    
</div>
);
}