import { CLEAR_CART,DELETE_ORDER } from '../types';
import axios from 'axios';
import { notification } from 'antd';
import { FcCandleSticks } from "react-icons/fc";
import { TiDelete } from "react-icons/ti";
import { useNavigate } from 'react-router-dom';

export const placeOrder = (input,setInput,setResp) => {
    // const navigate = useNavigate();
    return async (dispatch) => {
        // console.log(input);
        if (input.totalAmount > 0) 
        {
            await axios.post('http://localhost:8888/orders', { input })
                .then(function (response) {
                    // console.log(response);
                    notification.open({
                        message: 'Congratulations!!! Your Order Has Been Placed Successfully',
                        icon: <FcCandleSticks style={{ color: "red" }} />,
                    });
                    setInput({ name: "", email: "", address: "", city: "", phone: "", postalcode: "", country: "", totalAmount: 0 });
                    dispatch({ type: CLEAR_CART, })
                    // console.log(input,);
                    // navigate('/');
                    setResp(()=>response);
                })
                .catch(function (error) {
                    // console.log(error);
                    alert(error);
                });
        }
        else {
            // console.log("ELSE PART");
            notification.open({
                message: 'There are No Items In Cart',
                icon: <TiDelete style={{ color: "red" }} />,
            });
        }
        // dispatch({ type: PLACE_ORDER, })
    };
};


export const deleteOrder = (id) => {
    return (dispatch) => {
        dispatch({ 
            type: DELETE_ORDER,
            payload: id })
    };
}