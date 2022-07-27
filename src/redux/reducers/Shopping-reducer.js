import { ADD_TO_CART, REMOVE_ITEM_FROM_CART, INCREASE_QTY, DECREASE_QTY, CLEAR_CART } from '../types';

const INITIAL_STATE = {
    cart: [],
    check: false,
};

const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            state.check = false;
            const copyArr = state.cart.map((currentItem) => {
                if (currentItem.id === action.payload.cartVal.id) {
                    state.check = true;
                    return { ...currentItem, qtyInCart: currentItem.qtyInCart + 1 };
                }
                return currentItem;
            })
            if (state.check !== true) {
                return { ...state, cart: [...copyArr, action.payload.cartVal] }
            }
            else {
                return { ...state, cart: [...copyArr] }
            }



        case INCREASE_QTY:
            const copyArr1 = state.cart.map((currentItem) => {
                if (currentItem.id === action.payload) {
                    return { ...currentItem, qtyInCart: currentItem.qtyInCart + 1 };
                }
                return currentItem;
            })
            return { ...state, cart: copyArr1 }



        case DECREASE_QTY:
            const copyArr2 = state.cart.map((currentItem) => {
                if (currentItem.id === action.payload) {
                    return { ...currentItem, qtyInCart: currentItem.qtyInCart - 1 }
                }
                return currentItem;
            }).filter((currItem) => {
                return currItem.qtyInCart !== 0
            });
            return { ...state, cart: copyArr2 }



        case REMOVE_ITEM_FROM_CART:
            return {
                ...state, cart: state.cart.filter((currentItem) => {
                    return currentItem.id !== action.payload;
                })
            }

        case CLEAR_CART:
            return { ...state, cart: [] };



        default: return state;
    }

}


export default shopReducer;