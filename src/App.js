import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Mobiles from './components/Mobiles/Mobiles';
import Electronics from './components/Electronics/Electronics';
import GroceryItems from './components/GroceryItems/GroceryItems';
import FarmFreshItems from './components/FarmFreshItems/FarmFreshItems';
import PlaceOrder from './components/PlaceOrder/PlaceOrder'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainFooter from './components/Footer/MainFooter';
import PastOrders from './components/Past Orders/PastOrders';

function App() {
  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Navbar />}>
              <Route index element={<Home />} />
              <Route path='mobiles' element={<Mobiles />} />
              <Route path='electronics' element={<Electronics />} />
              <Route path='groceryitems' element={<GroceryItems />} />
              <Route path='farmfreshitems' element={<FarmFreshItems />} />
              <Route path='pastorders' element={<PastOrders />} />
            </Route>
            <Route path='placeOrder' element={<PlaceOrder />} />
          </Routes>
        </BrowserRouter>
      <MainFooter />
    </>
  );
}

export default App;
