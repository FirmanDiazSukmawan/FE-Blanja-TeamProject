import React, { useState } from "react";
import '../../asset/css/style.css';
import { Link, useNavigate } from "react-router-dom";
import style from "./styleRegister.css"
import { Tab, Tabs } from "react-bootstrap";
import axios from "axios";
import { url } from "../../redux/baseUrl/url";
import Swal from "sweetalert2";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [storeName, setStoreName] = useState("");
  const navigate = useNavigate()
  const [errmsg, setErrmsg] = useState();


  const handleRegisterCustomer = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${url}/customer`,{
        name: name,
        email: email,
        password: password,
      });
       

      navigate("/login")
      Swal.fire({
        text: "Gratz Register succes brother",
        icon: "success",
      });
      console.log(res)
    } catch (err) {
      if (err){
        setErrmsg(err.response.data.message)
        Swal.fire({
          text: errmsg,
          icon: "error",
        });
      }
    }
  }

  const handleRegisterSeller = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${url}/seller`,{
        name: name,
        email: email,
        phone: phone,
        password: password,
        store_name: storeName,
      });
       

      navigate("/login")
      Swal.fire({
        text: "Gratz Register succes brother",
        icon: "success",
      });
      // console.log(res.data.message)
    } catch (err) {
      if (err){
        setErrmsg(err.response.data.message)
        Swal.fire({
          text: errmsg,
          icon: "error",
        });
      }
    }
  }

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
              <b>Please sign up with your account</b>
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
            <Tab eventKey="Customer" title="Customer" style={style} >
              <div className="container ">
                <div className="row row-cols-1 row-cols-md-3 g-4 d-flex justify-content-center mt-3 ">
               
                <div className="d-flex justify-content-center mt-3">
                <form
            >
              <div className="mb-3">
                <label
                  htmlFor="exampleInputName"
                  className="form-label"
                ></label>
                <input
                  type="name"
                  className="form-control  form-control-lg"
                  id="exampleInputName1"
                  placeholder="Name"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div style={{width:"43vh",display:"flex",flexDirection:"column"}}>
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
                  onClick={handleRegisterCustomer}
                  
                >
                  Register
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
              
              <div style={{width:"43vh",display:"flex",flexDirection:"column"}}>
                <label
                  htmlFor="exampleInputName1"
                  className="form-label"
                ></label>
                <input
                  type="name"
                  className="form-control form-control-lg"
                  id="exampleInputName1"
                  aria-describedby="nameHelp"
                  placeholder="Name"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-1">
                <label
                  htmlFor="exampleInputEmail1"
                  className="form-label"
                ></label>
                <input
                  type="email"
                  className="form-control  form-control-lg"
                  id="exampleInputemail1"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-1">
                <label
                  htmlFor="exampleInputPhoneNumber1"
                  className="form-label"
                ></label>
                <input
                  type="phone"
                  className="form-control  form-control-lg"
                  id="exampleInputPhone1"
                  placeholder="Phone Number"
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="mb-1">
                <label
                  htmlFor="exampleInputStore_name1"
                  className="form-label"
                ></label>
                <input
                  type="store_name"
                  className="form-control  form-control-lg"
                  id="exampleInputStore_name1"
                  placeholder="Store Name"
                  onChange={(e) => setStoreName(e.target.value)}
                />
              </div>
              <div className="mb-1">
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
                  onClick={handleRegisterSeller}
                >
                  Register
                </button>
              </div>
            </form>
                  </div>
              </div>
              </div>
            </Tab>
          </Tabs>

            <small className="d-block text-center text-muted mt-4">
              Already have a tokopedia account?
              <Link className="text-danger text-decoration-none" to={"/login"}>
                Login
              </Link>
            </small>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
