import React, { useEffect } from 'react';
import axios from 'axios';
import PastOrderCard from './PastOrderCard/PastOrderCard';
import { useSelector, useDispatch } from 'react-redux';
import { getPastOrders } from '../../redux/actions/orderActions';

const PastOrders = () => {
    const dispatch =useDispatch();
    const { pastOrders } = useSelector((state) => state.orderReducer);
    useEffect(() => {
        dispatch(getPastOrders());
    }, []);
    return (
        <>
            <div className="container mt-4 mb-5">
                <div className="row">
                        <h1 className='mb-4'>Past Orders:-</h1>
                        {   pastOrders.length!==0 ?
                            pastOrders.map((c) =>{
                                return (
                                    <div className="col-lg-6 col-12" key={c.id}>
                                        <PastOrderCard data={c} />
                                    </div>
                                )
                            } )
                            :
                            <h2 style={{color:"red",height:"36vh"}}>There Are No Past Orders</h2>
                        }
                </div>
            </div>
        </>
    )
}

export default PastOrders;