import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../page/home/home";
import NotFound from "../page/notFound/notFound";
import Login from "../page/login/login";
import Register from "../page/register/register";
import DetailProduct from "../page/detailProduct/DetailProduct";
import SidebarProfile from "../component/SidebarProfile";
import ProductList from "../page/productList/productList";
import Checkout from "../page/checkout/Checkout";
import MyBag from "../page/myBag/MyBag";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="category" element={<ProductList />} />
          <Route path="detailProduct" element={<DetailProduct />} />
          <Route path="checkout" element={ <Checkout />} />
          <Route path="myBag" element={ <MyBag />} />
          <Route path="*" element={<NotFound />} />
          <Route path="SidebarProfile" element={<SidebarProfile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
