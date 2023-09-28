import React from "react";

import IconProduct from '../../asset/img/package 1.png';
import IconCart from '../../asset/img/shopping-cart (3) 1.png';
import '../../asset/css/style.css';
import HeaderProfile from '../HeaderProfile';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import { url } from '../../redux/baseUrl/url';
import { useState } from 'react';
import ModalProfile from '../ModalUpdateProfileSeller';
import ModalUpdateCustomer from '../ModalUpdateProfileCustomer';

const SidebarProfile = () => {
  const isSeller = localStorage.getItem('role');
  const isCustomer = localStorage.getItem('role');
  const navigate = useNavigate();
  const [users,setUsers] = useState([])
  const usersId = localStorage.getItem('userId');

  useEffect(() => {
    if (isSeller === "seller") {
    axios
      .get(`${url}/seller/${usersId}`)

      .then((res) => {
        setUsers(res.data.data);
        // console.log(res.data.data);
      })
      .catch((err) => {
        return (err);
      },[usersId]);
    }
    else {
      axios
      .get(`${url}/customer/${usersId}`)

      .then((res) => {
        setUsers(res.data.data);
        // console.log(res);
      })
      .catch((err) => {
        return (err);
      });
    }
  }, [usersId]);




  const handleProduct = () => {
    if (isSeller) {
    navigate('/myProduct');
    }
    else {navigate('/')}
  };

  const handleMyProfile = () => {
    navigate('/profile');
  };

  const handleStoreProfile =() => {
    navigate("/storeProfile");
  }
  const handleSellingProduct =() => {
    navigate("/sellingProduct");
  }


  if (isSeller === 'seller') {
    return (
      <>
        <HeaderProfile users={users} />
        <ModalProfile/>
        <div className="main">
          
        

    
          <div className="list-item" onClick={handleStoreProfile}>
      <p>
        <a className="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
          <img className="icon-profile" src={require("../../asset/img/blanja.png")} alt="" />
          <span className="description active ms-3">Store Profile</span>
        </a>
      </p>
    </div>
    

          <div className="list-item">
            <p>
              <a
                className="btn btn-primary"
                data-bs-toggle="collapse"
                href="#collapseProduct"
                role="button"
                aria-expanded="false"
                aria-controls="collapseProduct"
              >
                <img
                  className="icon-profile-product"
                  src={IconProduct}
                  alt=""
                />
                <span className="description active ms-3">Product</span>{" "}
              </a>
            </p>

            <div className="collapse" id="collapseProduct">
              <div className="card card-body p-0">
                <button className="btn p-0" onClick={handleProduct}>
                  <span className="description">My Products</span>
                </button>

                <button Lin className="btn p-0" onClick={handleSellingProduct}>
                  <span className="description">Selling Products</span>
                </button>
              </div>
            </div>
          </div>

          <div className="list-item">
            <p>
              <a
                className="btn btn-primary"
                data-bs-toggle="collapse"
                href="#collapseCart"
                role="button"
                aria-expanded="false"
                aria-controls="collapseCart"
              >
                <img className="icon-profile-cart" src={IconCart} alt="" />
                <span className="description active ms-3">Order</span>{" "}
              </a>
            </p>

            <div className="collapse" id="collapseCart">
              <div className="card card-body p-0">
                <button className="btn p-0">
                  <span className="description">List Order</span>
                </button>

                <button className="btn">
                  <span className="description">List Cancel Order</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <HeaderProfile users={users}/>
        <ModalUpdateCustomer/>
        <div className="main">
        <div className="list-item">
      <p>
        <Link to="/profile" className="btn btn-primary" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapseExample">
          <img className="icon-profile" src={require("../../asset/img/blanja.png")} alt="" />
          <span className="description active ms-3">My Account</span>{' '}
        </Link>
      </p>
    </div>

        
          <div className="list-item">
            <p>
              <a
                className="btn btn-primary"
                data-bs-toggle="collapse"
                href="#collapseProduct"
                role="button"
                aria-expanded="false"
                aria-controls="collapseProduct"
              >
                <img
                  className="icon-profile-product"
                  src={IconProduct}
                  alt=""
                />
                <span className="description active ms-3">
                  Shipping Address
                </span>{" "}
              </a>
            </p>
          </div>

          <div className="list-item">
            <p>
              <a
                className="btn btn-primary"
                data-bs-toggle="collapse"
                href="#collapseCart"
                role="button"
                aria-expanded="false"
                aria-controls="collapseCart"
              >
                <img className="icon-profile-cart" src={IconCart} alt="" />
                <span className="description active ms-3">My Order</span>{" "}
              </a>
            </p>

            <div className="collapse" id="collapseCart">
              <div className="card card-body p-0">
                <button className="btn p-0">
                  <span className="description">List Order</span>
                </button>

                <button className="btn">
                  <span className="description">List Cancel Order</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default SidebarProfile;
