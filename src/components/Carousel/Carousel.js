import React from 'react';
import style from './Carousel.module.css';
import Carousel1 from '../../Assets/Images/carouselimg1.jpeg';
import Carousel2 from '../../Assets/Images/carouselimg2.jpeg';
import Carousel3 from '../../Assets/Images/carouselimg3.jpeg';
import { Carousel } from 'antd';

const CarouselSlider = () => {
    return (
        <>
            <Carousel autoplay>
                <div>
                    <img src={ Carousel1 } alt="Img1" className={style.carouselImage} />
                </div>
                <div>
                    <img src={ Carousel2 } alt="Img2" className={style.carouselImage} />
                </div>
                <div>
                    <img src={ Carousel3 } alt="Img3" className={style.carouselImage} />
                </div>
            </Carousel>
        </>
    )
}

export default CarouselSlider;