import React, { useState, useEffect } from 'react';
import style from './SearchHeader.module.css';
import CartDrawer from '../CartDrawer/CartDrawer';
import logo from '../../Assets/Images/humMartLogo.png';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { FcTodoList } from 'react-icons/fc';
import { Input } from 'antd';
import { useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';

const SearchHeader = () => {
    const { cart }  = useSelector((state) => state.shopReducer);
    const navigate = useNavigate();
    const goToPastOrders = () => {
        navigate('pastorders');
    }
    // let itemCount = 0;
    const [totalItemsInCart,setTotalItemsInCart] = useState(0);
    useEffect(()=>{
        let itemCount = 0;
        cart.map((y)=>{
            itemCount += y.qtyInCart;
        })
        setTotalItemsInCart(itemCount);
    },[cart]);

    

    const { Search } = Input;
    const [visible,setVisible] = useState(false);
    const showDrawer = () => {
        setVisible(true);
      };
      
    return (
        <>
            <div className={style.mainSearchDiv}>
                <div className='container'>
                    <div className={`${style.secondHeaderRow} row`}>
                        <div className={`${style.humMartLogoDiv} col-lg-3 col-6`}>
                        <NavLink to='/'><img src={logo} alt="Hum Mart Logo" className={style.humMartLogo} /></NavLink>
                        </div>
                        <div className={`${style.searchDiv} col-lg-7 col-md-12`}>
                            <Search placeholder="Search Products"
                                allowClear
                                enterButton="Search"
                                size="large"
                            />
                        </div>
                        <div className={`${style.cartDiv} offset-lg-0 col-lg-1 offset-md-4 col-md-2 offset-3 col-2`}>
                            <FcTodoList onClick={goToPastOrders} className={style.pastOrdersIcon} />
                            {/* <div className={style.pastOrdersText}>Past Orders</div> */}
                            <span>
                                <span className={style.numberOfItemsInCart}>{totalItemsInCart}</span>
                                {/* {cartCount} */}
                                <AiOutlineShoppingCart className={style.cartIcon} onClick={showDrawer}/>
                                <CartDrawer visibility={visible} setVisible={setVisible} />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SearchHeader;