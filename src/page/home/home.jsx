import React from "react";
import Navbar from "../../component/Navbar/navbar";
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
