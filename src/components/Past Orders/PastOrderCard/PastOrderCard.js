import React from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { deleteOrder } from '../../../redux/actions/orderActions';
import { notification } from 'antd';
import { TiDelete } from "react-icons/ti";

const PastOrderCard = ({data}) => {

    const dispatch = useDispatch();
    const handleDeleteOrder = (id) => {
        // dispatch(deleteOrder(id));
        console.log(`http://localhost:8888/orders/${id}`)
        axios.delete(`http://localhost:8888/orders/${id}`)
        .then(() => {
            notification.open({
                message: 'Order Cancelled',
                icon: <TiDelete style={{ color: "red" }} />,
            });
        });
    };
    return (
        <>
            <div className="container-fluid mb-4 p-3" style={{border:"1px solid"}}>
                <h4><u>Order # {data.id}</u> 
                    <span style={{float:"right"}}>
                        <button style={{fontSize:"16px",backgroundColor:"darkorange"}} onClick={()=>handleDeleteOrder(data.id)}>Cancel Order</button>
                    </span>
                </h4>
                <div className="row">
                    <div className="col-6">
                        <h5> Order Details:- </h5>
                        <p><b>Customer Name:</b> {data.input.name}</p>
                        <p><b>Customer Addresss:</b> {data.input.address}</p>
                        <p><b>Customer Phone:</b> {data.input.phone}</p>
                        <h6><u>Total : {data.input.totalAmount}</u></h6>
                    </div>
                    <div className="col-6">
                        <h5>Items:-</h5>
                        {data.input.items.map((curItem) => <p className='mb-1'>{curItem.productQuantity} x {curItem.productName}</p>)}
                        
                    </div>
                </div>

            </div>
        </>
    )
}

export default PastOrderCard;