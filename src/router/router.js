import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../page/home/home";
import NotFound from "../page/notFound/notFound";
import Login from "../page/login/login";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          {/* <Route path="register" element={<Register />} /> */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
