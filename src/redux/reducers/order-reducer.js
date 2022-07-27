import { GET_PAST_ORDERS_SUCCESS, GET_PAST_ORDERS_START, GET_PAST_ORDERS_FAIL, DELETE_ORDER_SUCCESS, DELETE_ORDER_FAIL, DELETE_ORDER_START, PLACE_ORDER_START, PLACE_ORDER_SUCCESS, PLACE_ORDER_FAIL } from '../types';

const INITIAL_STATE = {
    pastOrders: [],
    placeOrderLoading: false,
    pastOrdersLoading: false,
    deleteOrdersLoading: false,
};

const orderReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case PLACE_ORDER_START:
            return { ...state, placeOrderLoading: true }

        case PLACE_ORDER_SUCCESS:
            return { ...state, placeOrderLoading: false }

        case PLACE_ORDER_FAIL:
            return { ...state, placeOrderLoading: false }



        case GET_PAST_ORDERS_START:
            return { ...state, pastOrdersLoading: true }

        case GET_PAST_ORDERS_SUCCESS:
            return { ...state, pastOrdersLoading: false, pastOrders: action.payload }

        case GET_PAST_ORDERS_FAIL:
            return { ...state, pastOrdersLoading: false }



        case DELETE_ORDER_START:
            return { ...state, deleteOrdersLoading: true }

        case DELETE_ORDER_SUCCESS:
            return {
                ...state,
                deleteOrdersLoading: false,
                pastOrders: state.pastOrders.filter((curr) => {
                    return curr.id !== action.payload;
                })
            }

        case DELETE_ORDER_FAIL:
            return { ...state, deleteOrdersLoading: false }


        default: return state;
    }
}

export default orderReducer;