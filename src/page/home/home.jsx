/* eslint-disable jsx-a11y/heading-has-content */
import React, { useEffect, useState } from "react";

import Navbar from "../../component/navbar/navbar";
import NavbarLogin from "../../component/navbarLogin/navbarLogin";

function Home() {
  const login = localStorage.getItem("token");
  return (
    <>
    {!login ? <Navbar /> : <NavbarLogin />}
    <div className="d-flex">
      <h1>HOMEPAGE</h1>
      </div>
    </>
  );
}

export default Home;
