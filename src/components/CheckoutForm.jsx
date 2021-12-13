
import {useStripe, useElements, CardElement} from '@stripe/react-stripe-js';





const CheckoutForm = () => {
const stripe = useStripe();
const elements = useElements();

const handleSubmit = async (event) => {
event.preventDefault();

if (!stripe || !elements) {

    return;
}

const result = await stripe.confirmPayment({
    
    elements,
    confirmParams: {
    return_url: "localhost:3000",
    },
});

if (result.error) {
    
    console.log(result.error.message);
} else {
    
}
};

return (
<div>
     {/* <form action=""> </form> */}

<h2>*PlaceHolder for Stripe Payment Platform*</h2>
<h2>Stripe Requires a back-end. If time allows, I may integrate a Node.js backend to teach myself Stripe.   </h2>



<form onSubmit={handleSubmit}>
    <CardElement />
    <button className="btn btn-kombu" disabled={!stripe}><h3>Submit</h3></button>
</form>
</div>
)
};
export default CheckoutForm