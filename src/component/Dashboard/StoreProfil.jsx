/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import NavbarLogin from '../../component/navbarLogin/navbarLogin';
import SidebarProfile from '../../component/SidebarProfile/index';
import { useEffect } from 'react';
import { getSellerById, isLoadingSelector, sellerSelector } from '../../redux/reducer/sellerSlice';
import { useDispatch, useSelector } from 'react-redux';

const StoreProfile = () => {
  const userId = localStorage.getItem('userId');
  const dispatch = useDispatch();
  const seller = useSelector(sellerSelector);
  
  const isLoading = useSelector(isLoadingSelector);
  // console.log(seller)




  useEffect(() => {
    dispatch(getSellerById(userId));
  }, [dispatch, userId])




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
              <h3 className="title mb-0">My Store Profile</h3>
              <span className="sub-title">Manage your profile information</span>
              <hr className="mb-4" />
              {isLoading? "loading...": 
              <div className="row">
                <div className="col-lg-8">
                  <form >
                    <div className="row mb-3 ">
                      <label htmlFor="name" className="col-sm-3 col-form-label text-end">
                        Store Name
                      </label>
                      <div className="col-sm-7">
                        <input type="name" className="form-control" id="name" disabled value={seller?.store_name} />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label htmlFor="email" className="col-sm-3 col-form-label text-end">
                        Email
                      </label>
                      <div className="col-sm-7">
                        <input type="email" className="form-control" id="email" disabled value={seller?.email}/>
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label htmlFor="phone-number" className="col-sm-3 col-form-label text-end">
                        Phone Number
                      </label>
                      <div className="col-sm-7">
                        <input type="phone-number" className="form-control" id="phone-number" disabled value={seller?.phone}
                        />
                      </div>
                    </div>
                    
                    <textarea
                      className="form-control"
                      placeholder="Store Description"
                      id="floatingTextarea2"
                      style={{ height: 200 }}
                      disabled value={seller?.store_description}
                    />
                 

                  </form>

                </div>

                <div className="col-lg-4 text-center">
                  <img className="preview-profile-img" 
                  src={seller?.image}
                   alt="profile" />
                  <div className="mb-3 upload-img mt-4">
                    <h5>{seller?.name}</h5>
                  </div>
                </div>
              </div>
              }
            </div>
          </div>
        </div>
      </div>
    </body>
  );
};

export default StoreProfile;
