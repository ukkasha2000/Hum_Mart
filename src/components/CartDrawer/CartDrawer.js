import React, {useState,useEffect} from 'react';
import { Drawer } from 'antd';
import style from './CartDrawer.module.css';
import CartCard from '../CartCard/CartCard';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { notification } from 'antd';
import { TiDelete } from "react-icons/ti";


const CartDrawer = ({ visibility, setVisible}) => {
  const { cart } = useSelector((state) => state.shopReducer);
  const navigate =  useNavigate();
  const placeOrderFunc = () => {
    if(cart.length > 0){
      navigate('placeOrder');
    }
    else {
      notification.open({
        message: 'There are No Items In Cart',
        icon: <TiDelete style={{color:"red"}} />,
        placement:'topLeft'
    });
  }
  }

  const [totalPrice, setTotalPrice] =useState(0);
  useEffect(()=>{
    let total = 0;
    cart.map((val)=>{
      total += val.qtyInCart * val.productPrice;
    })
    setTotalPrice(total);
  },[cart]);
  // const [totalPrice, setTotalPrice] = useState(0);
  // useEffect(()=>{
  //   let price = 0;
  //   cart.forEach(item => {
  //     price += item.qty * item.totalPrice
  //   });
  //   setTotalPrice(price);
  // },[cart,totalPrice,setTotalPrice]);
  // const [visible, setVisible] = useState(visibility);

  const onClose = () => {
    setVisible(false);
  };
  return (
    <>
      <Drawer title="Basic Drawer" placement="right" onClose={onClose} visible={visibility}>
        {cart.map((item) => (
          <CartCard key={item.id} itemData={item}/>
        ))}
        <div>
          <h5 className='mt-3'>Sub Total: <span style={{float:'right'}}>Rs: {totalPrice.toString()}/- </span></h5>
          <button className={style.placeOrderButton}  onClick={() => placeOrderFunc()}>Continue To Checkout</button>
        </div>
      </Drawer>

    </>
  )
}

// const mapStateToProps = (state) => {
//   return {
//     cart : state.shop.cart
//   }
// }

export default CartDrawer;