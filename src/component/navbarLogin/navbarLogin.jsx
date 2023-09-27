import React, { useEffect, useState } from "react";
import "./navbarLogin.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faMagnifyingGlass,
  faShoppingCart,
  faSliders,
  faBell,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

function NavbarLogin() {
  const navigate = useNavigate();
  // const [img,setimg] = useState("")
  const image = localStorage.getItem("image");

  //    const userId = localStorage.getItem("userId")

  //    useEffect(() => {
  //     if(role === "seller") {
  //     axios
  //       .get(`${url}/seller/${userId}`)
  //       .then((res) => {
  //         setimg(res.data.data.image)
  //         console.log(res.data.data.image);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });}

  //       else {
  //         axios
  //       .get(`${url}/customer/${userId}`)
  //       .then((res) => {
  //         setimg(res.data.data.image)
  //         console.log(res.data.data.image);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //       }
  //   }, [userId]);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/home");
  };
  return (
    <div className="navbar">
      <div className="row align-items-center w-100">
        <div id="header" className="row align-items-center">
          <div className="container">
            <div className="row justify-content-around align-items-center">
              <Link className="logo col-auto me-4" to={"/"}>
                <img
                  src={require("../../asset/img/blanja.png")}
                  alt="logo-blanja"
                  height={40}
                />
              </Link>
              <div className="main-nav col ms-4">
                <div className="row align-items-center d-flex">
                  <div className="col search">
                    <input
                      type="text"
                      className="form-control decoration-none"
                      placeholder="Search Product"
                    />
                    <FontAwesomeIcon
                      id="ic-search"
                      className="ic"
                      icon={faMagnifyingGlass}
                      size="lg"
                    />
                  </div>
                  <div className="col-auto filters">
                    <FontAwesomeIcon
                      id="ic-filters"
                      className="ic"
                      icon={faSliders}
                      size="lg"
                    />
                  </div>
                </div>
              </div>
              <div className="action col-auto">
                <div className="row align-items-center d-flex">
                  <div className="col-auto">
                    <FontAwesomeIcon
                      id="ic-shopping-cart"
                      className="ic"
                      icon={faShoppingCart}
                      size="lg"
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                  <div className="col-auto">
                    <FontAwesomeIcon
                      id="ic-bell"
                      className="ic"
                      icon={faBell}
                      size="lg"
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                  <div className="col-auto me-3">
                    <FontAwesomeIcon
                      id="ic-envelope"
                      className="ic"
                      icon={faEnvelope}
                      size="lg"
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                  <div className="col-auto">
                    <img src={image} className="iconProfile" alt="" />
                  </div>

                  <div className="col-auto btn-login">
                    <Link to="/login">
                      <button
                        type="button"
                        className="btn btn-primary border-2 rounded-pill"
                        onClick={handleLogout}
                      >
                        Log Out
                      </button>
                    </Link>
                  </div>
                  <div className="col-auto d-flex justify-content-between align-items-center menu">
                    <button
                      className="btn"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseExample"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                    >
                      <FontAwesomeIcon
                        icon={faBars}
                        size="lg"
                        style={{ color: "white", cursor: "pointer" }}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavbarLogin;
