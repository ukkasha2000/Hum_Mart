import React from 'react';
import style from './Navbar.module.css';
import Header from '../Header/Header';
import { Outlet, NavLink } from 'react-router-dom';
// const style1 ={
//     active:{color:"red"}
// }
const Navbar = () => {
    return (
        <>
            <Header/>
            {/* <div className={style.navbarMainDiv}> */}
                <nav className={`${style.navbarMainDiv} navbar navbar-expand-lg navbar-light`}>
                    <div className="container">
                        
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className={`${style.navbarUL} navbar-nav`}>
                                <li className={`${style.navbarListItem} nav-item`}>
                                    <NavLink to='/' className={style.navbarListItemLink} >Home</NavLink>
                                </li>
                                <li className={`${style.navbarListItem} nav-item`}>
                                    <NavLink to='mobiles' className={style.navbarListItemLink}>Mobiles & Tablets</NavLink>
                                </li>
                                <li className={`${style.navbarListItem} nav-item`}>
                                    <NavLink to='electronics' className={style.navbarListItemLink}>Electronic Appliances</NavLink>
                                </li>
                                <li className={`${style.navbarListItem} nav-item`}>
                                    <NavLink to='groceryitems' className={style.navbarListItemLink}>Grocery Items</NavLink>
                                </li>
                                <li className={`${style.navbarListItem} nav-item`}>
                                    <NavLink to='farmfreshitems' className={style.navbarListItemLink}>Farm Fresh Fruits & Vegetables</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className={style.smallScreenMargin}></div>
            <Outlet />
        </>
    )
}

export default Navbar;