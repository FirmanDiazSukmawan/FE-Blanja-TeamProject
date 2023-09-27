import React, { useState } from "react";
import "../../asset/globalStyle.css";
import { Link, useNavigate } from "react-router-dom";
import { Tab, Tabs } from "react-bootstrap";
import style from "./styleLogin.css";
import axios from "axios";
import { url } from "../../redux/baseUrl/url";
import Swal from "sweetalert2";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errmsg, setErrmsg] = useState("");
  const navigate = useNavigate();

  const handleLoginCustomer = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${url}/customer/login`, {
        email: email,
        password: password,
      });
      localStorage.setItem("token",res.data.token);
      localStorage.setItem("userId",res.data.data.customer_id);
      localStorage.setItem("image",res.data.data.image);
      console.log(res)
      Swal.fire({
        text: "Gratz Login succes brother",
        icon: "success",
      });
      navigate("/");
      console.log(res.data.data);
    } catch (err) {
      if (err) {
        setErrmsg(err.response.data.message);
        Swal.fire({
          text: errmsg,
          icon: "error",
        });
      }
    }
  };
  const handleLoginSeller = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${url}/seller/login`, {
        email: email,
        password: password,
      });
      localStorage.setItem("token",res.data.token);
      localStorage.setItem("userId",res.data.data.seller_id);
      localStorage.setItem("image",res.data.data.image);
      Swal.fire({
        text: "Gratz Login succes brother",
        icon: "success",
      });
      navigate("/");
      console.log(res.data.data);
    } catch (err) {
      if (err) {
        setErrmsg(err.response.data.message);
        Swal.fire({
          text: errmsg,
          icon: "error",
        });
      }
    }
  };

  return (
    <>
      <div className="container">
        <div className="row justify-content-center align-items-center vh-100">
          <div className="col-md-4 col-xs-12">
            <img
              src={require("../../asset/img/blanja.png")}
              alt="logo"
              className="rounded mx-auto d-block mb-4"
            />

            <p className="text-center mb-5">
              <b>Please login with your account</b>
            </p>
            <Tabs
            variant="pills"
            defaultActiveKey="Customer"
            transition={false}
            id="noanim-tab-example"
            className="btn-group position-relative top-0 start-50 translate-middle mx-auto mt-3 d-flex justify-content-center align-items-center"
              role="group"
              aria-label="Basic radio toggle button group"
            >
              <Tab eventKey="Customer" title="Customer" style={style}>
                <div className="container ">
                  <div className="row row-cols-1 row-cols-md-3 g-4 d-flex justify-content-center mt-3 ">
                    <div className="d-flex justify-content-center mt-3">
                      <form>
                        <div
                          style={{
                            width: "43vh",
                            display: "flex",
                            flexDirection: "column",
                          }}
                        >
                          <label
                            htmlFor="exampleInputEmail1"
                            className="form-label"
                          ></label>
                          <input
                            type="email"
                            className="form-control form-control-lg"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Email"
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                        <div className="mb-3">
                          <label
                            htmlFor="exampleInputPassword1"
                            className="form-label"
                          ></label>
                          <input
                            type="password"
                            className="form-control  form-control-lg"
                            id="exampleInputPassword1"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </div>
                        <small>
                          <Link
                            to={"/forgotPassword"}
                            className="d-block text-decoration-none text-end text-danger mt-3"
                          >
                            Forgot Password?
                          </Link>
                        </small>

                        <div className="d-grid mt-4">
                          <button
                            type="submit"
                            className="btn btn-danger btn-lg rounded-pill"
                            onClick={handleLoginCustomer}
                          >
                            Login
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </Tab>
              <Tab eventKey="Seller" title="Seller" style={{ height: "auto" }}>
                <div className="container ">
                  <div className="row row-cols-1 row-cols-md-3 g-4 d-flex justify-content-center mt-3 ">
                    <div className="d-flex justify-content-center mt-3">
                      <form
                        onSubmit={(event) => {
                          event.preventDefault();
                        }}
                      >
                        <div
                          style={{
                            width: "43vh",
                            display: "flex",
                            flexDirection: "column",
                          }}
                        >
                          <label
                            htmlFor="exampleInputEmail1"
                            className="form-label"
                          ></label>
                          <input
                            type="email"
                            className="form-control form-control-lg"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Email"
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                        <div className="mb-3">
                          <label
                            htmlFor="exampleInputPassword1"
                            className="form-label"
                          ></label>
                          <input
                            type="password"
                            className="form-control  form-control-lg"
                            id="exampleInputPassword1"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </div>
                        <small>
                          <Link
                            to={"/forgotPassword"}
                            className="d-block text-decoration-none text-end text-danger mt-3"
                          >
                            Forgot Password?
                          </Link>
                        </small>

                        <div className="d-grid mt-4">
                          <button
                            type="submit"
                            className="btn btn-danger btn-lg rounded-pill"
                            onClick={handleLoginSeller}
                          >
                            Login
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </Tab>
            </Tabs>
            {/* <div
              className="btn-group position-relative top-0 start-50 translate-middle mx-auto mt-3"
              role="group"
              aria-label="Basic radio toggle button group"
            >
              <input
                type="radio"
                className="btn-check"
                name="btnradio"
                id="customer"
                autoComplete="off"
                checked={userType === "customer"}
                onChange={() => setUserType("customer")}
              />
              <label
                style={{ height: "50px", width: "150px" }}
                className="btn btn-outline-danger btn-lg"
                htmlFor="customer"
              >
                Customer
              </label>

              <input
                type="radio"
                className="btn-check"
                name="btnradio"
                id="seller"
                autoComplete="off"
                checked={userType === "seller"}
                onChange={() => setUserType("seller")}
              />
              <label
                style={{ height: "50px", width: "150px" }}
                className="btn btn-outline-danger btn-lg"
                htmlFor="seller"
              >
                Seller
              </label>
            </div> */}
            {/* <form
              onSubmit={(event) => {
                event.preventDefault();
              }}
            >
              <div>
                <label
                  htmlFor="exampleInputEmail1"
                  className="form-label"
                ></label>
                <input
                  type="email"
                  className="form-control form-control-lg"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleInputPassword1"
                  className="form-label"
                ></label>
                <input
                  type="password"
                  className="form-control  form-control-lg"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <small>
                <Link
                  to={"/forgotPassword"}
                  className="d-block text-decoration-none text-end text-danger mt-3"
                >
                  Forgot Password?
                </Link>
              </small>

              <div className="d-grid mt-4">
                <button
                  type="submit"
                  className="btn btn-danger btn-lg rounded-pill"
                  onClick={handleLogin}
                >
                  Login
                </button>
              </div>
            </form> */}

            <small className="d-block text-center text-muted mt-4">
              Don’t have a Tokopedia account?
              <Link
                className="text-danger text-decoration-none"
                to={"/register"}
              >
                Register
              </Link>
            </small>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
