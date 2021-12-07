import React from 'react'
import { formatCurrency } from './utils';




function Details({product, setShowDetails,showDetails}) {
    
    return (
        <>
{/*         
                <div style={{fontSize: '12px'}}>{product.description}</div>
                <hr /> */}

                
                <div className="mt-3"> Price:{formatCurrency(product.price)}</div>

        </>
    )
}

export default Details
