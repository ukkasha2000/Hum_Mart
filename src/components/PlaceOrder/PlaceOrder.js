import React, { useState, useEffect } from 'react';
import axios from 'axios';
import style from './PlaceOrder.module.css';
import logo from '../../Assets/Images/humMartLogo.png';
import { NavLink, useNavigate } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import { useSelector, useDispatch } from 'react-redux';
import CartCard from '../CartCard/CartCard';
import { TiDelete } from "react-icons/ti";
import { notification } from 'antd';
import { placeOrder } from '../../redux/actions/orderActions';

const PlaceOrder = () => {
    const navigate = useNavigate();
    const goBack = () => {
        navigate('/');
    }
    const { cart } = useSelector((state) => state.shopReducer);
    const dispatch = useDispatch();
    const date = new Date().getTime();
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalItems, setTotalItems] = useState([]);
    const [input, setInput] = useState({
        // id:date,
        name: "",
        email: "",
        address: "",
        city: "",
        phone: "",
        postalcode: "",
        country: "",
        totalAmount: totalPrice,
        items: totalItems
    });
    const [resp, setResp] = useState([]);

    useEffect(() => {
        let total = 0;
        let itemsInCart = [];
        cart.map((val) => {
            total += val.qtyInCart * val.productPrice;
            itemsInCart.push({ productName: val.productTitle, productQuantity: val.qtyInCart });
        })
        setTotalPrice(total);
        setTotalItems(itemsInCart);
    }, [cart]);
    // console.log(totalItems);
    useEffect(() => {
        setInput({ ...input, totalAmount: totalPrice, items: totalItems });
    }, [totalPrice, totalItems]);
    // console.log(input.totalAmount,totalPrice);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(placeOrder(input,setInput,setResp));
        // setResp(...resp);
        // console.log(resp,"XXX");
        // navigate('/');
    }
    // useEffect(()=>{
    // },[resp]);

    return (
        <>
            <marquee direction="right">Free Delivery All Over Karachi</marquee>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-6">
                        <NavLink to='/'><img src={logo} alt="Hum Mart Logo" className={style.humMartLogo} /></NavLink>
                    </div>
                    <div className="col-lg-9 col-6">

                        <button className={style.backButton} onClick={goBack}> <BsArrowLeft className={style.backButtonArrow} /> &nbsp; Go Back</button>

                    </div>
                </div>
                <div className={`row mt-4 ${style.placeOrderMainDiv}`}>
                    <div className={`col-lg-6 col-12 ${style.placeOrderFormDivLeft}`}>
                        <div className="container-fluid">
                            <h3>Enter Address Details</h3>

                            <form className="form-horizontal pt-4" role="form" onSubmit={handleSubmit}>
                                <div className="form-group row">
                                    <label className="col-sm-2 control-label" htmlFor="name">Name</label>
                                    <div className="col-sm-10">
                                        <input type="text" value={input.name} onChange={(e) => setInput({ ...input, name: e.target.value })} name="name" placeholder="Enter Full Name" className="form-control" pattern='[A-Za-z ]{1,}' required />
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label className="col-sm-2 control-label" htmlFor="email">Email</label>
                                    <div className="col-sm-10">
                                        <input type="email" value={input.email} onChange={(e) => setInput({ ...input, email: e.target.value })} name="email" placeholder="Enter Email Address" className="form-control" pattern='[A-Za-z0-9_.]{3,}[@][A-Za-z]{3,}[.][A-Za-z]{2,}' required />
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label className="col-sm-2 control-label" htmlFor="address">Address</label>
                                    <div className="col-sm-10">
                                        <input type="text" value={input.address} onChange={(e) => setInput({ ...input, address: e.target.value })} name="address" placeholder="Enter Complete Address" className="form-control" required />
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label className="col-sm-2 control-label" htmlFor="city">City</label>
                                    <div className="col-sm-10">
                                        <input type="text" value={input.city} onChange={(e) => setInput({ ...input, city: e.target.value })} name="city" placeholder="Enter City" className="form-control" pattern='[A-Za-z ]{1,}' required />
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label className="col-sm-2 control-label" htmlFor="phhone">Phone #</label>
                                    <div className="col-sm-10">
                                        <input type="tel" value={input.phone} onChange={(e) => setInput({ ...input, phone: e.target.value })} name="phone" maxLength='11' placeholder="Enter Phone Number" className="form-control" pattern='[0-9]{11}' required />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-sm-2 control-label" htmlFor="postalcode">Postalcode</label>
                                    <div className="col-sm-10">
                                        <input type="tel" value={input.postalcode} onChange={(e) => setInput({ ...input, postalcode: e.target.value })} name="postalcode" maxLength='5' placeholder="Enter Postal Code" className="form-control" pattern='[0-9]{5}' />
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label className="col-sm-2 control-label" htmlFor="country">Country</label>
                                    <div className="col-sm-10">
                                        <input type="text" value={input.country} onChange={(e) => setInput({ ...input, country: e.target.value })} name="country" placeholder="Enter Country" className="form-control" pattern='[A-Za-z ]{1,}' required />
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label className="col-sm-2 control-label" htmlFor="totalAmount">Total Amount</label>
                                    <div className="col-sm-4">
                                        <input type="number" value={totalPrice} className="form-control" disabled />
                                    </div>
                                </div>

                                <div className="form-group mt-4">
                                    <div className="col-sm-12 pr-0">
                                        <div className={style.placeOrderButtonDiv}>
                                            <button type="submit" className={`btn btn-default ${style.cancelOrderButton}`} onClick={goBack}>Cancel</button>
                                            <button type="submit" className={style.placeOrderButton}>Place Order</button>
                                        </div>
                                    </div>
                                </div>
                            </form>

                        </div>
                    </div>
                    <div className={`col-lg-6 col-12 ${style.placeOrderFormDivRight}`}>
                        <div>
                            {cart.map((item) => (
                                <CartCard key={item.id} itemData={item} />
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default PlaceOrder;