import React from 'react'
import Home from '../pages/Home/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cart from '../pages/Cart/Cart';
import Product_detail from '../components/Detail/Product_detail';
import Login from '../pages/User/Login';
import Header from './Header';
import Footer from './Footer';
import Register from '../pages/User/Register';
import Product_ByCat from '../components/Product/ProductByCategory';
import AllProduct from '../components/Product/AllProduct';
import Search from '../pages/Search/Search';
import Payment from '../pages/Payment/Payment';
import Contact from '../pages/Contact/Contact';


function Main() {
  return (
    
    <Router>

        <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/gio-hang" element={<Cart/>} />
          <Route path="/chi-tiet-san-pham/:id" element={<Product_detail/>} />
          <Route path="/danh-muc/:slug" element={<Product_ByCat/>} />
          <Route path="/dang-nhap" element={<Login/>} />
          <Route path="/dang-ky" element={<Register/>} />
          <Route path="/tat-ca-san-pham" element={<AllProduct/>} />
          <Route path="/tim-kiem/:searchValue" element={<Search/>} />
          <Route path="/thanh-toan" element={<Payment/>} />
          <Route path="/lien-he" element={<Contact/>} />
        </Routes>
        <Footer/>
    </Router>
    
  )
}

export default Main