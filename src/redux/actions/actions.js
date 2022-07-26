import { ADD_TO_CART, REMOVE_ITEM_FROM_CART, INCREASE_QTY, DECREASE_QTY, CLEAR_CART } from '../types';

export const addToCart = (val) => {
    return (dispatch) => {
        dispatch({
            type: ADD_TO_CART,
            payload: { cartVal: val, },
        })
    };
};

export const increaseQuantity = (id) => {
    return (dispatch) => {
        dispatch({
            type: INCREASE_QTY,
            payload: id,
        })
    };
};

export const decreaseQuantity = (id) => {
    return (dispatch) => {
        dispatch({
            type: DECREASE_QTY,
            payload: id,
        })
    };
};

export const removeSingleItem = (id) => {
    return (dispatch) => {
        dispatch({
            type: REMOVE_ITEM_FROM_CART,
            payload: id,
        })
    };
};


export const clearCart = () => {
    return (dispatch) => {
        dispatch({ type: CLEAR_CART, })
    };
};