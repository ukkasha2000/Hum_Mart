import React from 'react';
import style from './CategoryPageMainImg.module.css'

const CategoryPageMainImg = ({source}) => {
  return (
    <>
        <div className='container'>
            <img src={source} className={`${style.CategoryMainImage} mt-4`} />
        </div>
    </>
  )
}

export default CategoryPageMainImg;