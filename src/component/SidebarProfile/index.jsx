import React from 'react';

import IconProduct from '../../asset/img/package 1.png';
import IconCart from '../../asset/img/shopping-cart (3) 1.png';
import '../../asset/css/styles.css';
import HeaderProfile from '../HeaderProfile';
import ButtonSidebar from '../ButtonSidebar';
import { useNavigate } from 'react-router-dom';

const SidebarProfile = () => {
  const isSeller = localStorage.getItem('role');
  const navigate = useNavigate();

  const handleProduct = () => {
    navigate('/dashboard');
  };

  const handleSellingProduct = () => {
    navigate('/dashboard');
  };

  if (isSeller === 'seller') {
    return (
      <>
        <HeaderProfile />

        <div className="main">
          <ButtonSidebar />

          <div className="list-item">
            <p>
              <a className="btn btn-primary" data-bs-toggle="collapse" href="#collapseProduct" role="button" aria-expanded="false" aria-controls="collapseProduct">
                <img className="icon-profile-product" src={IconProduct} alt="" />
                <span className="description active ms-3">Product</span>{' '}
              </a>
            </p>

            <div className="collapse" id="collapseProduct">
              <div className="card card-body p-0">
                <button className="btn p-0" onClick={handleProduct}>
                  <span className="description">My Products</span>
                </button>

                <button className="btn p-0" onClick={handleSellingProduct}>
                  <span className="description">Selling Products</span>
                </button>
              </div>
            </div>
          </div>

          <div className="list-item">
            <p>
              <a className="btn btn-primary" data-bs-toggle="collapse" href="#collapseCart" role="button" aria-expanded="false" aria-controls="collapseCart">
                <img className="icon-profile-cart" src={IconCart} alt="" />
                <span className="description active ms-3">Order</span>{' '}
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
        <HeaderProfile />

        <div className="main">
          <ButtonSidebar />

          <div className="list-item">
            <p>
              <a className="btn btn-primary" data-bs-toggle="collapse" href="#collapseProduct" role="button" aria-expanded="false" aria-controls="collapseProduct">
                <img className="icon-profile-product" src={IconProduct} alt="" />
                <span className="description active ms-3">Shipping Address</span>{' '}
              </a>
            </p>

            <div className="collapse" id="collapseProduct">
              <div className="card card-body p-0">
                <button className="btn p-0" onClick={handleProduct}>
                  <span className="description">My Products</span>
                </button>

                <button className="btn p-0" onClick={handleSellingProduct}>
                  <span className="description">Selling Products</span>
                </button>
              </div>
            </div>
          </div>

          <div className="list-item">
            <p>
              <a className="btn btn-primary" data-bs-toggle="collapse" href="#collapseCart" role="button" aria-expanded="false" aria-controls="collapseCart">
                <img className="icon-profile-cart" src={IconCart} alt="" />
                <span className="description active ms-3">My Order</span>{' '}
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
