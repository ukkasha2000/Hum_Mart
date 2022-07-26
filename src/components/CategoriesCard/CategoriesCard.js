import React from 'react';
import style from './CategoriesCard.module.css'
import { Card, Button } from 'antd';
import { CgChevronDoubleRight } from 'react-icons/cg';

const CategoriesCard = ({ imgsrc, productName, linkTo}) => {
    return (
        <>
            <Card hoverable>
                <div className="row">
                    <div className="col-6">
                        <img src={imgsrc} className={style.CategoriesCardImage} />
                    </div>
                    <div className="offset-1 col-4">
                    <h5 className={style.CategoriesCardTitle}>{productName}</h5>
                    <span className={style.CategoriesCardButtonSpan}><Button href={linkTo} className={style.productButton}>Browse <CgChevronDoubleRight /></Button></span>
                    </div>
                </div>
            </Card>
        </>
    )
}

export default CategoriesCard;