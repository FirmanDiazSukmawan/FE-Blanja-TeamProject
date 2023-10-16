import { React,useEffect, useState } from "react";
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
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { url } from "../../redux/baseUrl/url";
import SearchPage from "../SearchPage/SearchPage";


function NavbarLogin() {

    const navigate = useNavigate()
    // const [img,setimg] = useState("")
    // const image = localStorage.getItem("image")
    const role = localStorage.getItem("role")
    const [search,setSearch] = useState("")
    const [data,setData] = useState([])
    const [img,setimg] = useState([])
    const [loading,setLoading] = useState(false)

   const userId = localStorage.getItem("userId")

   useEffect(() => {
    if(role === "seller") {
    axios
      .get(`${url}/seller/${userId}`)
      .then((res) => {
        setimg(res.data.data.image)
        console.log(res.data.data.image);
      })
      .catch((err) => {
        console.log(err);
      });}

      else {
        axios
      .get(`${url}/customer/${userId}`)
      .then((res) => {
        setimg(res.data.data.image)
        console.log(res.data.data.image);
      })
      .catch((err) => {
        console.log(err);
      });
      }
  }, [userId]);
  
    useEffect(() => {
        if(search.trim() === ""){
            setData([])
            return
        }
        setLoading(true)
        axios.get(`${url}/product/?limit=5&sort=ASC&search=${search}`)
        .then((res) => {
            setData(res.data.data)
            setLoading(false)
        })
        .catch((err) => {
            console.log(err);
            setLoading(false)
        })
    },[search])
// console.log(data)

// console.log(img)

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
                  <div className="col search ">
                    <input
                      type="text"
                      className="form-control decoration-none"
                      placeholder="Search Product"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                   <SearchPage data={data}/>
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
                    <Link to={"/myBag"}>
                    <FontAwesomeIcon
                      id="ic-shopping-cart"
                      className="ic"
                      icon={faShoppingCart}
                      size="lg"
                      style={{ cursor: "pointer" }}
                    /></Link>
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
                    <Link to ={"/profile"}>
                    <img src={img} className="iconProfile" alt=""  />
                    </Link>
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
