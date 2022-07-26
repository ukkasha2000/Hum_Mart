import React, { useEffect, useState } from 'react';
import axios from 'axios';
import style from './Mobiles.module.css';
import ProductCard from '../ProductCard/ProductCard';
import CategoryPageMainImg from '../CategoryPageMainImg/CategoryPageMainImg';
import phoneAndTabletCover from '../../Assets/Images/phoneAndTabletCover.png'

const Mobiles = () => {
  const products = require('../../Data/Data.json').products[0];
  // const [mobileData, setMobileData] = useState();
  // useEffect(() => {
  //   async function getData() {
  //     const resp = await axios.get('https://dummyjson.com/products');
  //     setMobileData(resp.data.products);
  //     console.log(resp.data.products);
  //   }
  //   getData();
  // }, []);
  return (
    <>
      <CategoryPageMainImg source={phoneAndTabletCover}/>
      <section className={`${style.mobilePhoneSection} mt-5`}>
        <div className="container">
          <h3 className={style.mobilePhoneHeading}>Mobile Phone</h3>
          <div className="row">
            {
              // mobileData && mobileData.filter(val => val.category === "smartphones").map((val, ind) => {
                products.mobilePhones.map((val) => {
                return (
                  <div className="col-xl-3 col-md-4 col-sm-4 col-6 mb-4" key={val.id}>
                    {/* <ProductCard imgsrc={val.images[0]} productName={val.title} productPrice={val.price} /> */}
                    <ProductCard data={val} />
                  </div>
                )
              })
            }
          </div>
        </div>
      </section>
    </>
  )
}

export default Mobiles