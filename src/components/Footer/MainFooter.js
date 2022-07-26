import React from 'react';
import {Link} from 'react-router-dom';
import { Layout, Col, Row, List } from 'antd';
import { HomeOutlined  } from '@ant-design/icons';
import { GoInfo, GoHome, GoLocation } from 'react-icons/go';
import { BiCategory, BiPlay, BiEnvelope, BiPhoneCall  } from 'react-icons/bi';
import style from './Footer.module.css';
import PlayStore from '../../Assets/Images/googlePlay.png';
import AppStore from '../../Assets/Images/AppStore.png';

const MainFooter = () => {
    const { Footer } = Layout;
    const quickLinksData = [
        {listIcon: <GoHome /> ,listName: 'Home'},
        {listIcon: <GoInfo /> ,listName: 'About Us'},
        {listIcon: <BiCategory /> ,listName: 'Categories'},
    ];
    const faqsData = [
        {listIcon: <BiPlay /> ,listName: 'How To Order'},
        {listIcon: <BiPlay /> ,listName: 'Payment Procedure'},
        {listIcon: <BiPlay /> ,listName: 'Return Policy'},
    ];
    return (
        <>
            <Layout>
                <Footer className={style.footerSection}>
                    <div className="container">
                    <Row gutter={{ xs: 0, sm: 16, md: 24, lg: 32 }}>
                        <Col className="gutter-row mt-4" lg={{span:6}} sm={{span:15}} xs={{span:12}}>
                            <div className={`${style.footerColumnDiv1}`}>
                                <h2 className={style.footerColumnHeading}>Quick Links</h2>
                                <List className={style.footerColumnList}
                                    size="small"
                                    dataSource={quickLinksData}
                                    renderItem={(item) => 
                                    <List.Item className={style.footerColumnListItem}>
                                        <span className={style.footerColumnListItemIcon}>{item.listIcon}</span> &nbsp; 
                                     {item.listName}</List.Item>}
                                />
                            </div>
                        </Col>
                        <Col className="gutter-row mt-4" lg={{span:6}} sm={{span:9}} xs={{span:12}}>
                            <div className={style.footerColumnDiv2}>
                                <h2 className={style.footerColumnHeading}>FAQ's</h2>
                                <List className={style.footerColumnList}
                                    size="small"
                                    dataSource={faqsData}
                                    renderItem={(item) => 
                                    <List.Item className={style.footerColumnListItem}>
                                        <span className={style.footerColumnListItemIcon}>{item.listIcon}</span> &nbsp; 
                                        {item.listName}</List.Item>}
                                />
                            </div>
                        </Col>
                        <Col className="gutter-row mt-4" lg={{span:6}} sm={{span:15}} xs={{span:24}}>
                            <div className={style.footerColumnDiv}>
                                <h2 className={style.footerColumnHeading}>About Us</h2>
                                <List className={style.footerColumnList} size="small">
                                    <List.Item className={style.footerColumnListItem}>
                                    <span className={style.footerColumnListItemIcon}><GoLocation /></span> &nbsp; 
                                    Office # 28C, DHA phase 7, Karachi, Pakistan</List.Item>

                                    <List.Item className={style.footerColumnListItem}>
                                    <span className={style.footerColumnListItemIcon}><BiEnvelope /></span> &nbsp; 
                                    info@hummart.com</List.Item>

                                    <List.Item className={style.footerColumnListItem}>
                                    <span className={style.footerColumnListItemIcon}><BiPhoneCall /></span> &nbsp; 
                                    (+92) 021-111-023</List.Item>
                                </List>
                            </div>
                        </Col>
                        <Col className="gutter-row mt-4" lg={{span:6}} sm={{span:9}} xs={{span:16}}>
                            <div className={style.footerColumnDiv}>
                                <h2 className={style.footerColumnHeading}>Download App</h2>
                                <a href="https://play.google.com/store" target='blank'>
                                    <img src={PlayStore} alt="Play Store" className={style.footerAppDownloadButtons} />
                                </a>
                                <a href="https://www.apple.com/app-store/" target='blank'>
                                    <img src={AppStore} alt="App Store" className={`${style.footerAppDownloadButtons} mt-2`} />
                                </a>
                            </div>
                        </Col>
                    </Row></div>
                </Footer>
            </Layout>
        </>
    )
}

export default MainFooter;