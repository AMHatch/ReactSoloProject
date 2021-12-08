
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
<form onSubmit={handleSubmit}>
    <CardElement />
    <button className="btn btn-kombu" disabled={!stripe}><h3>Submit</h3></button>
</form>
)
};
export default CheckoutForm