import React from 'react';
import { Card } from 'antd';
import style from './CartCard.module.css';
import { increaseQuantity, decreaseQuantity, removeSingleItem} from '../../redux/actions/actions';
import { useSelector, useDispatch } from 'react-redux';
import { notification } from 'antd';
import { MdDeleteForever } from "react-icons/md";

const CartCard = ({ itemData }) => {
  const { cart } = useSelector((state) => state.shopReducer);
  
  const dispatch = useDispatch();

  const increaseFunc = (id) => {
    dispatch(increaseQuantity(id));
  }
  const decreaseFunc = (id) => {
    dispatch(decreaseQuantity(id));
  }
  const deleteFunc = (id) => {
    notification.open({
      message: 'Item Removed From Cart',
      icon: <MdDeleteForever style={{color:"red"}} />,
      placement:'topLeft'
  });
    dispatch(removeSingleItem(id));
  }
  
  let x =itemData.qtyInCart.toString();
  // x=x.toString();
  return (
    <>
        <Card>
          <div className="row" style={{position:'relative'}}>
          <button className={style.deleteCartButton} onClick={() => deleteFunc(itemData.id)}>x</button>
            <div className="col-5">
              <img src={itemData.imgsrc} className={style.CartCardImage} />
            </div>
            <div className="col-6">
              <p className={style.CartCardTitle}>{itemData.productTitle}</p>
              <p className={style.CartCardPrice}>Rs: {itemData.productPrice}</p>
              <div className={style.CartCardQuantityDiv}>
                 <button onClick={() => decreaseFunc(itemData.id)}>-</button>
                 <p className={style.CartCardQuantity}>{x}</p>
                 <button onClick={() => increaseFunc(itemData.id)}>+</button>
              </div>
            </div>
          </div>
        </Card>
    </>
  )
}

export default CartCard;