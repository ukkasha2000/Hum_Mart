import React from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { deleteOrder } from '../../../redux/actions/orderActions';

const PastOrderCard = ({data,arr,setArr}) => {

    const dispatch = useDispatch();
    let temp=[];
    const handleDeleteOrder = (id,orderTime) => {
        const timeNow = new Date().getTime();
        dispatch(deleteOrder(id,orderTime,timeNow));
    };
    return (
        <>
            <div className="container-fluid mb-4 p-3" style={{border:"1px solid",height:"90%"}}>
                <h4><u>Order # {data.id}</u> 
                    <span style={{float:"right"}}>
                        <button style={{fontSize:"16px",backgroundColor:"darkorange"}} onClick={()=>handleDeleteOrder(data.id,data.input.orderTime)}>Cancel Order</button>
                    </span>
                </h4>
                <div className="row">
                    <div className="col-6">
                        <h5> Order Details:- </h5>
                        <p><b>Customer Name:</b> {data.input.name}</p>
                        <p><b>Customer Addresss:</b> {data.input.address}</p>
                        <p><b>Customer Phone:</b> {data.input.phone}</p>
                        <h6><u>Total : Rs.{data.input.totalAmount}</u></h6>
                    </div>
                    <div className="col-6">
                        <h5>Items:-</h5>
                        {data.input.items.map((curItem,index) => <p className='mb-1' key={index}>{curItem.productQuantity} x {curItem.productName}</p>)}
                        
                    </div>
                </div>

            </div>
        </>
    )
}

export default PastOrderCard;