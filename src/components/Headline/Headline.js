import React from 'react';
import style from './Headline.module.css';

const Headline = () => {
  return (
    <>
      <div className={style.headline_mainDiv}>
        <div className={style.headline_div}>
          <marquee direction="right">Free Delivery All Over Karachi</marquee>
        </div>
        <div className={`container-fluid ${style.contact_div}`}>
          <div className="row">
            <div className="col-12">
              <p className={style.customer_care_text}>Customer Care: &nbsp;&nbsp; +92 021 3657832&nbsp;</p>
            </div>
          </div>

        </div>
      </div>
    </>

  )
}

export default Headline;