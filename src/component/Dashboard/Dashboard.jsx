/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import NavbarLogin from '../../component/navbarLogin/navbarLogin';
import SidebarProfile from '../../component/SidebarProfile/index';
import { useDispatch, useSelector } from 'react-redux';
import { getCustomerById, customerSelector, thisLoadingSelector } from '../../redux/reducer/customerSlice';
import { useEffect } from 'react';

const Dashboard = () => {
  const userId = localStorage.getItem('userId');
  const dispatch = useDispatch();
  const customer = useSelector(customerSelector);
  const isLoading = useSelector(thisLoadingSelector);

// console.log(customer)


  useEffect(() => {
    dispatch(getCustomerById(userId));
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
                <h3 className="title mb-0">My Profile Customer</h3>
                <span className="sub-title">Manage your profile information</span>
                <hr className="mb-4" />
        {isLoading? "loading...": 
                <div className="row">
                  <div className="col-lg-8">
                    <form>
                      <div className="row mb-3">
                        <label htmlFor="name" className="col-sm-3 col-form-label text-end">
                          Name
                        </label>
                        <div className="col-sm-7">
                          <input type="name" className="form-control" id="name" disabled value={customer?.name} />
                        </div>
                      </div>
                      <div className="row mb-3">
                        <label htmlFor="email" className="col-sm-3 col-form-label text-end" >
                          Email
                        </label>
                        <div className="col-sm-7">
                          <input type="email" className="form-control" id="email" disabled value={customer?.email} />
                        </div>
                      </div>
                      <div className="row mb-3">
                        <label htmlFor="phone-number" className="col-sm-3 col-form-label text-end">
                          Phone Number
                        </label>
                        <div className="col-sm-7">
                          <input type="phone-number" className="form-control" id="phone-number" disabled value={customer?.phone_number} />
                        </div>
                      </div>
                      <fieldset className="row mb-3">
                        <legend className="col-form-label col-sm-3 pt-0 text-end">Gender</legend>
                        <div className="col-sm-7 d-flex">
                          <div className="form-check me-4">
                            <input className="form-check-input" type="radio" name="gender" id="laki-laki" value="{customer?.gender}" defaultChecked />
                            <label className="form-check-label" for="gridRadios1" disabled value={customer?.name}>
                            {customer?.gender}
                            </label>
                          </div>
                        </div>
                      </fieldset>
                    </form>
                    <div className="row mb-3">
                        <label htmlFor="phone-number" className="col-sm-3 col-form-label text-end">
                          Birthday
                        </label>
                        <div className="col-sm-7">
                          <input type="phone-number" className="form-control" id="phone-number" disabled value={customer?.birthday} />
                        </div>
                      </div>

                   
                  </div>

                  <div className="col-lg-4 text-center">
                    <img className="preview-profile-img" src={customer?.image} alt="profile" />

                    <div className="mb-3 upload-img mt-4">
                        <p >{customer?.name}</p>
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

export default Dashboard;
