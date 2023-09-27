/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import '../../Assets/css/style.css';
import '../../App.css';

import ModalProduct from '../ModalProduct';
import ModalUpdate from '../ModalUpdate';


const MainSidebar = () => {
  return (
    <>
      <h3 className="title mb-0">My Product</h3>
      {/* navpils */}
      <ul className="nav mb-3" id="pills-tab-product" role="tablist">
        <li className="nav-item" role="presentation">
          <button className="nav-link active" id="pills-item-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">
            All Items
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">
            Sold Out
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">
            Archived
          </button>
        </li>
      </ul>
      <div className="tab-content" id="pills-tabContent">
        <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
          <div className="container pt-3">
            <div className="row">
              <div className="col-lg-12 p-0">
                {/* <ModalProduct /> */}
                <table className="table table-hover">
                  <thead className="table-dark text-center ">
                    <tr>
                      <th scope="col">Images</th>
                      <th scope="col">Name</th>
                      <th scope="col">Size</th>
                      <th scope="col">Price</th>
                      <th scope="col">Qty</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((item) => {
                      return (
                        <>
                          <ModalUpdate product={item} />
                          <tr>
                            <td className="text-center">
                              <img crossOrigin="anonymous" src={item.photo} className="photo-table" alt="" />
                            </td>
                            <td>{item.name}</td>
                            <td className="text-center">{item.size}</td>
                            <td className="text-center">{currencyFormat(item.price)}</td>
                            <td className="text-center">{item.stock}</td>

                            <td className="text-center">
                              <button type="button" className="btn btn-success me-1" data-bs-toggle="modal" data-bs-target={`#update${item.id_product}`}>
                                <i className="bi bi-pencil-square"></i>
                              </button>

                              <button type="button" className="btn btn-danger" onClick={() => handleDelete(item.id_product)}>
                                <i className="bi bi-trash3-fill"></i>
                              </button>
                            </td>
                          </tr>
                        </>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* sold out */}
        <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">
          <div className="container pt-3">
            <div className="row">
              <div className="col-lg-12 p-0">
                <table className="table table-hover">
                  <thead className="table-dark text-center ">
                    <tr>
                      <th scope="col">Images</th>
                      <th scope="col">Name</th>
                      <th scope="col">Size</th>
                      <th scope="col">Price</th>
                      <th scope="col">Qty</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody></tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* archived */}
        <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabindex="0">
          <div className="container pt-3">
            <div className="row">
              <div className="col-lg-12 p-0">
                <table className="table table-hover">
                  <thead className="table-dark text-center ">
                    <tr>
                      <th scope="col">Images</th>
                      <th scope="col">Name</th>
                      <th scope="col">Size</th>
                      <th scope="col">Price</th>
                      <th scope="col">Qty</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody></tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* modal Create*/}
    </>
  );
};

export default MainSidebar;
