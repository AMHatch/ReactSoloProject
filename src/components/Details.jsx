import React from 'react'
import { formatCurrency } from './utils';




function Details({product}) {
    
    return (
        <>
                <div className="mt-3"> Price:{formatCurrency(product.price)}</div>

        </>
    )
}

export default Details
