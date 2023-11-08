import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import SidebarProfile from "../SidebarProfile/index";
import NavbarLogin from "../navbarLogin/navbarLogin";
import "../../asset/css/style.css";
import ModalAddress from "../ModalAddress/ModalAddress";

const MyOrder = () => {
  return (
    <>
      <section id="sidebar">
        <NavbarLogin />
        <div className="container-fluid p-0 d-flex align-items-start vh-100">
          <div className="sidebar vh-100 w-25 d-flex">
            <SidebarProfile />
          </div>
          <div className="main-content vh-100">
            <div className="container bg-white h-100">
              <div className="text-start px-3 py-3">
                <h4>Choose Another Address</h4>
                <p>Manage your Shipping Address</p>
              </div>
              <div className="container px-5">
            <div className="row mt-5 d-grid">
            <ModalAddress modalName ="Add Another Address"/>
            </div>
            <div className="row mt-3">
              <div className="card">
                <div className="card-body">
                  <h5>Andreas Jane</h5>
                  <p>
                    <span>Perumahan Sapphire Mediterania, </span>
                    <span>Wiradadi, Kec. Sokaraja, </span>
                    <span>Kabupaten Banyumas, Jawa Tengah </span>
                    <span>53181</span>
                  </p>
                  <Link>Change Address</Link>
                </div>
              </div>
            </div>
          </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MyOrder;
