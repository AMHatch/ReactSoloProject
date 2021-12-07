import { ADD_TO_CART, REMOVE_FROM_CART, REMOVE_FROM_SAVED, SAVE_FOR_LATER, SET_SHOW} from "../actions/types"

const cartReducer = (state,action) => {
    if(state === undefined){
        state = {
            cartItems:[],
            numOfItems: 0,
            totalCost: parseFloat(0.00),

            savedForLater: [],
            numOfItemsSaved: 0,
            totalCostSaved: parseFloat(0.00),
            right:false
        }

    }
    switch(action.type){
        case ADD_TO_CART:
            //add new item to cart items, update num of items, update cost
            let newCartItems = [...state.cartItems]; 
            let isFound = false; 

            newCartItems.forEach(product =>{
                if(product.id === action.product.id){
                    product.quantity++;
                    isFound = true;
                }
            })

            if(!isFound){
                newCartItems.push({...action.product,})
            }

            return{
                ...state,
                cartItems: [...state.cartItems, action.product],
                numOfItems: state.numOfItems + 1,
                totalCost: state.totalCost + parseFloat(action.product.price)
            }

        case REMOVE_FROM_CART:
            return{
                ...state,
                cartItems:  state.cartItems.filter(item=>{
                    return  item.id !== action.product.id
                }),
                numOfItems: state.numOfItems - 1,
                totalCost: state.totalCost - parseFloat(action.product.price)
            }


        case SAVE_FOR_LATER:
            return{
                ...state,
                savedForLater:[...state.savedForLater, action.product],
                numOfItemsSaved: state.numOfItemsSaved + 1,
                totalCostSaved: state.totalCostSaved + parseFloat(action.product.price)
            }
        case REMOVE_FROM_SAVED:
            return{
                ...state,
                savedForLater:  state.savedForLater.filter(item=>{
                    return  item.id !== action.product.id
                }),
                numOfItemsSaved: state.numOfItemsSaved - 1,
                totalCostSaved: state.totalCostSaved - parseFloat(action.product.price)
            }
            case SET_SHOW:
                return{
                    ...state,
                    right: !state.right
                }
            
        default:
            return state
    }
}
export default cartReducer
