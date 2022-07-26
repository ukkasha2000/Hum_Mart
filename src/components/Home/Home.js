import React from 'react';
import Carousel from '../Carousel/Carousel';
import style from './Home.module.css';
import ProductCard from '../ProductCard/ProductCard';
import CategoriesCard from '../CategoriesCard/CategoriesCard';
import HeaderLeftImage from '../HeaderLeftImages/HeaderLeftImage';
import HeaderLeftImage1 from '../../Assets/Images/headerLeftImg1.jpg';
import HeaderLeftImage2 from '../../Assets/Images/headerLeftImg2.jpg';
// import { connect, useSelector } from 'react-redux';

const Home = () => {
  // const [mobileData, setMobileData] = useState();
  // const { cart } = useSelector((state) => state.shopReducer);
  const Data = require('../../Data/Data.json');
  const products = Data.products[0];
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

      {/* Home Page Top Section  */}
      <section>
        <div className="container mt-5 p-0">
          <div className="row" style={{maxWidth:'100%'}}>
            <div className="col-md-3 col-12">
              <div className="container-fluid">
                <div className="row">
                  <HeaderLeftImage source={HeaderLeftImage1} />
                  <HeaderLeftImage source={HeaderLeftImage2} />
                </div>
              </div>
            </div>
            <div className="col-md-9">
              <Carousel />

            </div>
          </div>
        </div>
      </section>



      {/* About Us Section */}
      <section className={`${style.aboutUsSection} mt-5`}>
        <div className="container">
          <h1><b>About Us</b></h1>
          <h4>Online Supermarket, Delivery in Karachi, Pakistan</h4>
          <p>Ever wondered of entering a grocery store and getting an overview of products sections
            and get to grab the required product from there? The alternate is our search bar of HumMart
            where you can search from a wide range of categories including grocery and staples, home
            furnishing, breakfast and dairy, instant foods, biscuits and snacks, beverages, household needs,
            personal care, home and kitchen, baby products, fruits and vegetables, ice creams and a lot more.
            Now with online phones and accessories purchase and with easy and timely home delivery all over
            Pakistan. The online shopping of grocery is a blessing to get the required products over a few clicks.
            We at HumMart provides our customers with the best deals to get value addition on the purchase
            of products available online as a bundle offer. If you are in a mood to mingle with friends but
            you got a grocery list in your pocket, just visit HumMart and order the grocery to get it delivered
            right at your home while you get yourself entertained with friends. Want to cook your favorite
            dish, no need to worry for the items to prepare a mouthwatering dish. HumMart offers you sample
            products to get the ingredients for the dish. We will provide you the products through express
            delivery within 2 hours. You have the independence to opt out from numerous products as HumMart
            focuses to bring utmost facilities through its online grocery store and adding value in life of our
            valued customers. You need to stay at your home, visit hummart.com through your laptop, smartphone
            or even from phone application.
          </p>
        </div>
      </section>


      {/* Mobile Phones Section */}
      <section className={`${style.mobilePhoneSection} mt-5`}>
        <div className="container">
          <h3 className={style.mobilePhoneHeading}>Mobile Phone</h3>
          <div className="row">
            {
                products.mobilePhones.map((val) => {
                return (
                  <div className="col-xl-3 col-md-4 col-sm-4 col-6 mb-4" key={val.id}>
                    <ProductCard data={val} />
                  </div>
                )
              })
            }
          </div>
        </div>
      </section>

      {/* Electronic Appliances Section */}
      <section className={`${style.electronicAppliancesSection}`}>
        <div className="container">
          <h3 className={style.electronicAppliancesHeading}>Electronic Appliances</h3>
          <div className="row">
            {
              products.electronicDevices.map((val) => {
                return (
                  <div className="col-xl-3 col-md-4 col-sm-4 col-6 mb-4" key={val.id}>
                    <ProductCard data={val} />
                  </div>
                )
              })
            }
          </div>
        </div>
      </section>

      {/* Grocery Items Section */}
      <section className={`${style.grocerySection}`}>
        <div className="container">
          <h3 className={style.groceryHeading}>Grocery Items</h3>
          <div className="row">
            {products.groceryItems.map((val) => {
              return (
                <div className="col-xl-3 col-md-4 col-sm-4 col-6 mb-4" key={val.id}>
                  <ProductCard data={val} />
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Fruits and Vegetables Section */}
      <section className={`${style.fruitsVegSection}`}>
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


      {/* Categories Section */}
      <section className={`${style.categoriesSection}`}>
        <div className="container">
          <h3 className={style.categoriesHeading}>All Categories</h3>
          <div className="container-fluid">
            <div className={`${style.containerCardsRow} row`}>
              {Data.categories.map((val) => {
                return (
                  <div className="col-md-6 my-2" key={val.id}>
                    <CategoriesCard imgsrc={val.imgsrc} productName={val.productTitle} linkTo={val.linkTo}/>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

     
    </>
  )
}

export default Home;