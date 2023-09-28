import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../page/home/home";
import NotFound from "../page/notFound/notFound";
import Login from "../page/login/login";
import Register from "../page/register/register";
import DetailProduct from "../page/detailProduct/DetailProduct"
import SellingProduct from "../component/Dashboard/SellingProduct";
import ProductList from "../page/productList/productList";
import MyProduct from "../component/Dashboard/MyProduct";

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
          <Route path="*" element={<NotFound />} />
          <Route path="MyProducts" element={<MyProduct />} />
          <Route path="Se" element={<SellingProduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
