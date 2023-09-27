import React from 'react';
import NavbarLogin from '../../component/navbarLogin/navbarLogin';
import SidebarProfile from '../../component/SidebarProfile/index';

const SellingProduct = () => {
  return (
    <body id="sidebar">
      <NavbarLogin />
      <div className="container-fluid p-0 d-flex align-items-start vh-100">
        <div className="sidebar vh-100 w-25 d-flex">
          <SidebarProfile />
        </div>
        <div className="main-content vh-100">
          <div className="container">
            <div className="wrapper-card">
              <h5>Selling Product</h5>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
};

export default SellingProduct;
