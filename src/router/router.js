import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../page/home/home";
import NotFound from "../page/notFound/notFound";
import Login from "../page/login/login";
import Register from "../page/register/register";
import DetailProduct from "../page/detailProduct/DetailProduct";
import SellingProduct from "../component/Dashboard/SellingProduct";
import ProductList from "../page/productList/productList";
import Checkout from "../page/checkout/Checkout";
import MyBag from "../page/myBag/MyBag";
import MyProduct from "../component/Dashboard/MyProduct";
import StoreProfile from "../component/Dashboard/StoreProfil";
import Profile from "../page/Profile/index";

// import Profile from "../page/Profile/profile";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="myBag" element={<MyBag />} />
          <Route path="category/:category_id" element={<ProductList />} />
          <Route path="detailProduct/:product_id" element={<DetailProduct />} />
          <Route path="profile" element={<Profile />} />
          <Route path="storeProfil" element={<StoreProfile />} />
          <Route path="myProduct" element={<MyProduct />} />
          <Route path="sellingProduct" element={<SellingProduct />} />
          <Route path="storeProfile" element={<StoreProfile />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
