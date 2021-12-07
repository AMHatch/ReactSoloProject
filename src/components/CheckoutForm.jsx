import React from 'react'

import {PaymentElement} from '@stripe/react-stripe-js';

function CheckoutForm() {
    return (
        <div>
    <form>
      <PaymentElement />
      <button>Submit</button>
    </form>
        </div>
    )
}

export default CheckoutForm
