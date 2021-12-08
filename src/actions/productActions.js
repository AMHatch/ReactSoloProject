import products from '../assets/data';
import { LOAD_PRODUCTS, LOAD_FIRE_PRODUCTS, LOAD_HERITAGE_PRODUCTS, LOAD_WORK_PRODUCTS } from './types';

export const loadProducts = () => {
    return{
        type: LOAD_PRODUCTS,
        products:products
    }
    
}
export const loadWorkProducts = () => {
    return{
        type: LOAD_WORK_PRODUCTS,
        products:products
    }
    
}
export const loadHeritageProducts = () => {
    return{
        type: LOAD_HERITAGE_PRODUCTS,
        products:products
    }
    
}
export const loadFireProducts = () => {
    return{
        type: LOAD_FIRE_PRODUCTS,
        products:products
    }
    
}
