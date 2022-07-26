import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PastOrderCard from './PastOrderCard/PastOrderCard';

const PastOrders = () => {
    const [ordersData, setOrdersData] = useState([]);
    const [datas, setData] = useState([]);
    useEffect(() => {
        async function getData() {
            const resp = await axios.get('http://localhost:8888/orders');
            setOrdersData(resp.data);
            // const x= resp.data
            // console.log(typeof(x));
        }
        getData();
    }, []);

    useEffect(() => {
        // console.log(ordersData);
        setData(ordersData);
    }, [ordersData])
    // console.log(data);
    return (
        <>
            <div className="container mt-4 mb-5">
                <div className="row">
                    <div className="col-6">
                        {/* <PastOrderCard data={data[0]} />
                        {console.log(data.length, "LLL")} */}
                        {/* {console.log(typeof(datas))} */}
                        <h1 className='mb-4'>Past Orders:-</h1>
                        {
                            
                            datas.map((c) =>{
                                return (
                                    <div key={c.id}>
                                        <PastOrderCard data={c}/>
                                    </div>
                                )
                            } )
                        }

                    </div>
                </div>
            </div>
        </>
    )
}

export default PastOrders