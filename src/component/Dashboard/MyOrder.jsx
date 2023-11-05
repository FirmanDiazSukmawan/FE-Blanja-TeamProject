import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SidebarProfile from "../SidebarProfile/index";
import NavbarLogin from "../navbarLogin/navbarLogin";
import "../../asset/css/style.css";
import axios from "axios";

import { url } from "../../redux/baseUrl/url";

const MyOrder = () => {
  const navigate = useNavigate();
  const [order, setOrder] = useState([]);
  const users_id = localStorage.getItem("userId");
  const role = localStorage.getItem("role");

  useEffect(() => {
    if (role === "seller") {
      axios
        .get(`${url}/order/seller/${users_id}`)
        .then((res) => {
          setOrder(res.data.data);
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      axios
        .get(`${url}/order/customer/${users_id}`)
        .then((res) => {
          setOrder(res.data.data);
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [users_id, role]);

  const paidOrders = order.filter(item => item.status === 'paid');
  const onDeliveryOrders = order.filter(item => item.status === 'on delivery')
  const deliveredOrders = order.filter(item => item.status === 'delivered')
  
  const handleDelivery = (customer_id, seller_id) => {
    axios.patch(`${url}/order/status/delivery/${customer_id}/${seller_id}`)
    .then((res) => {
      console.log(res.data.data);
      window.location.reload();
    })
    .catch((err) => {
      console.log(err);
    });
  };

  const handleDelivered = (customer_id) => {
    axios.patch (`${url}/order/status/delivered/${customer_id}`)
    .then((res) => {
      console.log(res.data.data);

      window.location.reload();
    })
    .catch((err) => {
      console.log(err);
    })
  }

  return (
    <>
      {role === "seller" ? (
        <section id="sidebar">
          <NavbarLogin />
          <div className="container-fluid p-0 d-flex align-items-start vh-100">
            <div className="sidebar vh-100 w-25 d-flex">
              <SidebarProfile />
            </div>
            <div className="main-content vh-100">
              <div className="container">
                <div className="wrapper-card">
                  <h3 className="title mb-0">My Order</h3>
                  {/* navpils */}
                  <ul
                    className="nav mb-3"
                    id="pills-tab-product"
                    role="tablist"
                  >
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link active"
                        id="pills-item-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-home"
                        type="button"
                        role="tab"
                        aria-controls="pills-home"
                        aria-selected="true"
                      >
                        All Items
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="pills-profile-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-profile"
                        type="button"
                        role="tab"
                        aria-controls="pills-profile"
                        aria-selected="false"
                      >
                        Get Paid
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="pills-processed-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-processed"
                        type="button"
                        role="tab"
                        aria-controls="pills-processed"
                        aria-selected="true"
                      >
                        Proccessed
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="pills-sent-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-sent"
                        type="button"
                        role="tab"
                        aria-controls="pills-sent"
                        aria-selected="false"
                      >
                        Sent
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="pills-completed-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-completed"
                        type="button"
                        role="tab"
                        aria-controls="pills-completed"
                        aria-selected="false"
                      >
                        Completed
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="pills-contact-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-contact"
                        type="button"
                        role="tab"
                        aria-controls="pills-contact"
                        aria-selected="false"
                      >
                        Order Cancel
                      </button>
                    </li>
                  </ul>

                  <div className="tab-content" id="pills-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="pills-home"
                      role="tabpanel"
                      aria-labelledby="pills-home-tab"
                      tabindex="0"
                    >
                      <div className="container pt-3">
                        <div className="row">
                          <div className="col-lg-12 p-0">
                            {/* <All Items /> */}
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
                                <tr>
                                  <td className="text-center">
                                    <img
                                      crossOrigin="anonymous"
                                      className="photo-table"
                                      alt=""
                                    />
                                  </td>
                                  <td></td>
                                  <td className="text-center"></td>
                                  <td className="text-center"></td>
                                  <td className="text-center"></td>

                                  <td className="text-center">
                                    <button
                                      type="button"
                                      className="btn btn-success me-1"
                                      data-bs-toggle="modal"
                                    >
                                      <i className="bi bi-pencil-square"></i>
                                    </button>

                                    <button
                                      type="button"
                                      className="btn btn-danger"
                                    >
                                      <i className="bi bi-trash3-fill"></i>
                                    </button>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Get Paid */}
                    <div
                      className="tab-pane fade"
                      id="pills-profile"
                      role="tabpanel"
                      aria-labelledby="pills-profile-tab"
                      tabindex="0"
                    >
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
                              <tbody>
                                {paidOrders.map((item) => {
                                  return (
                                    <>
                                      <tr className="text-center">
                                        <td>
                                          <img
                                            crossOrigin="anonymous"
                                            src={item.image_product}
                                            className="photo-table"
                                            alt=""
                                          />
                                        </td>
                                        <td>{item.name_product}</td>
                                        <td>{item.size}</td>
                                        <td>{item.price}</td>
                                        <td>{item.stock}</td>
                                        <td>
                                          <button className="btn btn-danger" onClick={() => handleDelivery(item.customer_id, item.seller_id)}>
                                            Confirm
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

                    {/* Processed */}
                    <div
                      className="tab-pane fade"
                      id="pills-processed"
                      role="tabpanel"
                      aria-labelledby="pills-processed-tab"
                      tabindex="0"
                    >
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
                              <tbody>
                                {onDeliveryOrders.map((item) => {
                                  return (
                                    <>
                                      <tr className="text-center">
                                        <td>
                                          <img
                                            crossOrigin="anonymous"
                                            src={item.image_product}
                                            className="photo-table"
                                            alt=""
                                          />
                                        </td>
                                        <td>{item.name_product}</td>
                                        <td>{item.size}</td>
                                        <td>{item.price}</td>
                                        <td>{item.stock}</td>
                                        <td>
                                          <button className="btn btn-danger" onClick={() => handleDelivered(item.customer_id, item.seller_id)}>
                                            Deliver
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

                    {/* Sent */}
                    <div
                      className="tab-pane fade"
                      id="pills-sent"
                      role="tabpanel"
                      aria-labelledby="pills-sent-tab"
                      tabindex="0"
                    >
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
                    {/* Completed */}
                    <div
                      className="tab-pane fade"
                      id="pills-completed"
                      role="tabpanel"
                      aria-labelledby="pills-completed-tab"
                      tabindex="0"
                    >
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
                              <tbody>
                                {deliveredOrders.map((item) => {
                                  return (
                                    <>
                                      <tr className="text-center">
                                        <td>
                                          <img
                                            crossOrigin="anonymous"
                                            src={item.image_product}
                                            className="photo-table"
                                            alt=""
                                          />
                                        </td>
                                        <td>{item.name_product}</td>
                                        <td>{item.size}</td>
                                        <td>{item.price}</td>
                                        <td>{item.stock}</td>
                                        <td>
                                          <button className="btn btn-danger" onClick={() => handleDelivered(item.customer_id, item.seller_id)}>
                                            Done
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
                    {/* Order Cancel */}
                    <div
                      className="tab-pane fade"
                      id="pills-contact"
                      role="tabpanel"
                      aria-labelledby="pills-contact-tab"
                      tabindex="0"
                    >
                      <div className="container pt-3">
                        <div className="row">
                          <div className="col-lg-12 p-0">
                            <table className="table table-hover">
                              <thead className="table-dark text-center ">
                                <tr>
                                  <th scope="col">Imges</th>
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
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        // customer
        <section id="sidebar">
          <NavbarLogin />
          <div className="container-fluid p-0 d-flex align-items-start vh-100">
            <div className="sidebar vh-100 w-25 d-flex">
              <SidebarProfile />
            </div>
            <div className="main-content vh-100">
              <div className="container">
                <div className="wrapper-card">
                  <h3 className="title mb-0">My Order</h3>
                  {/* navpils */}
                  <ul
                    className="nav mb-3"
                    id="pills-tab-product"
                    role="tablist"
                  >
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link active"
                        id="pills-item-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-home"
                        type="button"
                        role="tab"
                        aria-controls="pills-home"
                        aria-selected="true"
                      >
                        All Items
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="pills-profile-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-profile"
                        type="button"
                        role="tab"
                        aria-controls="pills-profile"
                        aria-selected="false"
                      >
                        Get Paid
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="pills-contact-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-contact"
                        type="button"
                        role="tab"
                        aria-controls="pills-contact"
                        aria-selected="true"
                      >
                        Proccessed
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="pills-contact-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-contact"
                        type="button"
                        role="tab"
                        aria-controls="pills-contact"
                        aria-selected="false"
                      >
                        Sent
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="pills-conmpleted-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-completed"
                        type="button"
                        role="tab"
                        aria-controls="pills-contact"
                        aria-selected="false"
                      >
                        Completed
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="pills-contact-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-contact"
                        type="button"
                        role="tab"
                        aria-controls="pills-contact"
                        aria-selected="false"
                      >
                        Order Cancel
                      </button>
                    </li>
                  </ul>

                  <div className="tab-content" id="pills-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="pills-home"
                      role="tabpanel"
                      aria-labelledby="pills-home-tab"
                      tabindex="0"
                    >
                      <div className="container pt-3">
                        <div className="row">
                          <div className="col-lg-12 p-0">
                            {/* <All Items /> */}
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
                                <tr>
                                  <td className="text-center">
                                    <img
                                      crossOrigin="anonymous"
                                      className="photo-table"
                                      alt=""
                                    />
                                  </td>
                                  <td></td>
                                  <td className="text-center"></td>
                                  <td className="text-center"></td>
                                  <td className="text-center"></td>

                                  <td className="text-center">
                                    <button
                                      type="button"
                                      className="btn btn-success me-1"
                                      data-bs-toggle="modal"
                                    >
                                      <i className="bi bi-pencil-square"></i>
                                    </button>

                                    <button
                                      type="button"
                                      className="btn btn-danger"
                                    >
                                      <i className="bi bi-trash3-fill"></i>
                                    </button>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Get Paid */}
                    <div
                      className="tab-pane fade"
                      id="pills-profile"
                      role="tabpanel"
                      aria-labelledby="pills-profile-tab"
                      tabindex="0"
                    >
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
                                </tr>
                              </thead>
                              <tbody>
                                {order.map((item) => {
                                  return (
                                    <>
                                      <tr className="text-center">
                                        <td>
                                          <img
                                            crossOrigin="anonymous"
                                            src={item.image_product}
                                            className="photo-table"
                                            alt=""
                                          />
                                        </td>
                                        <td>{item.name_product}</td>
                                        <td>{item.size}</td>
                                        <td>{item.price}</td>
                                        <td>{item.stock}</td>
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

                    {/* Processed */}
                    <div
                      className="tab-pane fade"
                      id="pills-contact"
                      role="tabpanel"
                      aria-labelledby="pills-contact-tab"
                      tabindex="0"
                    >
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
                              <tbody>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Sent */}
                    <div
                      className="tab-pane fade"
                      id="pills-contact"
                      role="tabpanel"
                      aria-labelledby="pills-contact-tab"
                      tabindex="0"
                    >
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
                    {/* Completed */}
                    <div
                      className="tab-pane fade"
                      id="pills-contact"
                      role="tabpanel"
                      aria-labelledby="pills-contact-tab"
                      tabindex="0"
                    >
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
                    {/* Order Cancel */}
                    <div
                      className="tab-pane fade"
                      id="pills-contact"
                      role="tabpanel"
                      aria-labelledby="pills-contact-tab"
                      tabindex="0"
                    >
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
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default MyOrder;
