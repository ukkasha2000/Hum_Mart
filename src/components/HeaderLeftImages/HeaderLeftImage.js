import React from 'react';
import style from './HeaderLeftImage.module.css';

const HeaderLeftImage = ({source}) => {
  return (
    <>
        <div className="col-md-12 col-6">
            <img src={source} alt={source} className={style.HeaderLeftImage}/>
        </div>
    </>
  )
}

export default HeaderLeftImage