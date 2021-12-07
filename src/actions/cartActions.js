import { ADD_TO_CART, REMOVE_FROM_CART, SAVE_FOR_LATER, REMOVE_FROM_SAVED,CHANGE_PRODUCT_QUANTITY,SET_SHOW} from "./types"


export const addToCart = (item) => {
    return {
        type: ADD_TO_CART,
        product:item
    }
}

export const removeFromCart = (item) => {
    return{
        type: REMOVE_FROM_CART,
        product:item
    }
}

export const saveForLater = (item) => {
    return{
        type:SAVE_FOR_LATER,
        product:item
    }
}

export const removeFromSaved = (item) => {
    return{
        type:REMOVE_FROM_SAVED,
        product:item
    }
}
export const changeQuantity = (item, quantityOfDress) => {
    return {
        type: CHANGE_PRODUCT_QUANTITY,
        product: item,
        quantity: quantityOfDress
    }
}
export const setShow = (show) => {
    return{
        type: SET_SHOW,
        show:show
    }
}

