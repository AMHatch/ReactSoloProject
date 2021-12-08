
import { LOAD_WORK_PRODUCTS, LOAD_PRODUCTS } from "../actions/types"



const productsReducer = (state,action) => {
    if(state === undefined){
        state = {
            products:[]
        }
    }
    switch(action.type){
        case LOAD_PRODUCTS:
            return{
                ...state,
                products: action.products
            }
        case LOAD_WORK_PRODUCTS:
            return{
                ...state,
                products: state.products.filter(product => product.type ==="work")
            }
            

        default:
            return state
    }
}
export default productsReducer