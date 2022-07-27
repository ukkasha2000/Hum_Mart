import { CLEAR_CART, DELETE_ORDER_FAIL, DELETE_ORDER_START, DELETE_ORDER_SUCCESS, GET_PAST_ORDERS_FAIL, GET_PAST_ORDERS_START, GET_PAST_ORDERS_SUCCESS, PLACE_ORDER_FAIL, PLACE_ORDER_START, PLACE_ORDER_SUCCESS } from '../types';
import axios from 'axios';
import { notification } from 'antd';
import { FcCandleSticks } from "react-icons/fc";
import { TiDelete } from "react-icons/ti";

export const placeOrder = (input, onSuccess) => {
    return async (dispatch) => {
        if (input.totalAmount > 0) {
            dispatch({ type: PLACE_ORDER_START, });
            await axios.post('http://localhost:8888/orders', { input })
                .then(function (response) {
                    dispatch({ type: PLACE_ORDER_SUCCESS, });
                    notification.open({
                        message: 'Congratulations!!! Your Order Has Been Placed Successfully',
                        icon: <FcCandleSticks style={{ color: "red" }} />,
                    });
                    dispatch({ type: CLEAR_CART, })
                    onSuccess(true);
                })
                .catch(function (error) {
                    dispatch({ type: PLACE_ORDER_FAIL });
                    notification.open({
                        message: error.message,
                        icon: <TiDelete style={{ color: "red" }} />,
                    });
                });
        }
        else {
            notification.open({
                message: 'There are No Items In Cart',
                icon: <TiDelete style={{ color: "red" }} />,
            });
        }
    };
};



export const getPastOrders = () => {
    return async (dispatch) => {
        dispatch({ type: GET_PAST_ORDERS_START, })
        try {
            const resp = await axios.get('http://localhost:8888/orders');
            dispatch({
                type: GET_PAST_ORDERS_SUCCESS,
                payload: resp.data,
            });
        }
        catch (error) {
            dispatch({ type: GET_PAST_ORDERS_FAIL });
            notification.open({
                message: error.message,
                icon: <TiDelete style={{ color: "red" }} />,
            });
        }
    };
}


export const deleteOrder = (id, orderTime, timeNow) => {
    // const time = new Date().getTime();


    return async (dispatch) => {
        if (timeNow < (orderTime + 3600000)) {
            dispatch({ type: DELETE_ORDER_START, })
            axios.delete(`http://localhost:8888/orders/${id}`)
                .then((resp) => {
                    notification.open({
                        message: 'Order Cancelled',
                        icon: <TiDelete style={{ color: "red" }} />,
                    });
                    dispatch({
                        type: DELETE_ORDER_SUCCESS,
                        payload: id
                    })
                })
                .catch((error) => {
                    dispatch({ type: DELETE_ORDER_FAIL });
                    notification.open({
                        message: error.message,
                        icon: <TiDelete style={{ color: "red" }} />,
                    });
                });
        }
        else {
            notification.open({
                message: 'Sorry!!! Your Order Cannot Be Cancelled',
                icon: <TiDelete style={{ color: "red" }} />,
            });
        }

    }

}
