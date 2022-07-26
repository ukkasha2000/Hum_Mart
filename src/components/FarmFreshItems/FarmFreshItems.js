import React from 'react';
import style from './FarmFreshItems.module.css';
import ProductCard from '../ProductCard/ProductCard';
import CategoryPageMainImg from '../CategoryPageMainImg/CategoryPageMainImg';
import phoneAndTabletCover from '../../Assets/Images/fruitsandveg.jpg';

const FarmFreshItems = () => {
  const products = require('../../Data/Data.json').products[0];
  return (
    <>
      <CategoryPageMainImg source={phoneAndTabletCover}/>
      <section className={`${style.fruitsVegSection} mt-5`}>
        <div className="container">
          <h3 className={style.fruitsVegHeading}>Fruits & Grocery Items</h3>
          <div className="row">
            {products.fruitsAndVegetables.map((val) => {
              return (
                <div className="col-xl-3 col-md-4 col-sm-4 col-6 mb-4" key={val.id}>
                  <ProductCard data={val} />
                </div>
              )
            })}
          </div>
        </div>
      </section>

    </>
  )
}

export default FarmFreshItems