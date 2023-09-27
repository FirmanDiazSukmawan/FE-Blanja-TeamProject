/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
import "../Dashboard/selling.css"
import React from "react";
import NavbarLogin from "../../component/navbarLogin/navbarLogin";
import SidebarProfile from "../../component/SidebarProfile/index";

const SellingProduct = () => {
  return (
    <section id="sidebar">
      <NavbarLogin />
      <div className="container-fluid p-0 d-flex align-items-start vh-100">
        <div className="sidebar vh-100 w-25 d-flex">
          <SidebarProfile />
        </div>
        <div className="main-content vh-100">
          <div className="container">
            <div className="wrapper-card py-2">
              <h5>Inventory</h5>
              <div className="border-top"/>
              <div className="mb-3 py-2">
                <label for="exampleFormControlInput1" className="col-sm-3 col-form-label">
                  Name Of Goods
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="input1"
                  style={{ width: '40vh' }}
                />
              </div>
            </div>
            <div className="wrapper-card py-2 mt-4">
              <h5>Items Detail</h5>
              <div className="border-top"/>
              <div className="mb-3 py-2">
                <label for="exampleFormControlInput1" className="col-sm-3 col-form-label">
                  Unit Price
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="input1"
                  style={{ width: '40vh' }}
                />
              </div>
              <div className="mb-3 py-2">
                <label for="exampleFormControlInput1" className="col-sm-3 col-form-label">
                  Stock
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="input1"
                  style={{ width: '40vh' }}
                />
                <div className="mt-4">
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                  <label className="form-check-label" for="inlineRadio1">Baru</label>
                </div>
                <div className="form-check-inline">
                  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                  <label className="form-check-label" for="inlineRadio2">Bekas</label>
                </div>
                </div>
              </div>
            </div>
            <div className="wrapper-card py-2 mt-4">
              <h5>Photo Of Goods</h5>
              <div className="border-top"/>
              <div className="mb-3 py-2">
                <div id="myDIV">
                  <form>
                  <form enctype="multipart/form-data">
                    <div className="mb-3">
                      <label for="fileInput" className="form-label">Pilih Gambar</label>
                      <input type="file" className="form-control" id="fileInput" name="fileInput" />
                    </div>
                    <div className="">
                    <button type="button" className="btn btn-outline-secondary">Upload Foto</button>
                    </div>
                  </form>
                  </form>
                </div>
              </div>
            </div>
            <div className="wrapper-card py-2 mt-4">
              <h5>Description</h5>
              <div className="border-top"/>
              <div className="mb-3 py-2">
                <label for="exampleFormControlInput1" className="col-sm-3 col-form-label">
                  Description
                </label>
                <div class="form-outline mb-4">
                  <textarea className="form-control" id="form6Example7" rows="4"></textarea>
                  <label className="form-label" for="form6Example7"></label>
                </div>
              </div>
            </div>
          </div>
          <div class="d-grid gap-2 col-2 mx-auto">
            <button class="btn btn-danger rounded-pill" type="button">Jual</button>
          </div>
        </div>
      </div>
      </section>
  );
};

export default SellingProduct;
