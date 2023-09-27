import React from 'react';
import SidebarProfile from '../../component/SidebarProfile/index';
import NavbarLogin from '../../component/navbarLogin/navbarLogin';
import MainSidebar from '../../component/MainSidebar/index';

const MyProduct = () => {
  return (
    <>
      <body id="sidebar">
        <NavbarLogin />
        <div className="container-fluid p-0 d-flex align-items-start vh-100">
          <div className="sidebar vh-100 w-25 d-flex">
            <SidebarProfile />
          </div>
          <div className="main-content vh-100">
            <div className="container">
              <div className="wrapper-card">
                <MainSidebar />
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
};

export default MyProduct;
