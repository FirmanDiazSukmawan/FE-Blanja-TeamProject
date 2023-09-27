/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import NavbarLogin from '../../component/navbarLogin/navbarLogin';
import SidebarProfile from '../../component/SidebarProfile/index';
import img from '../../asset/img/Mjajuni.jpeg';

const Dashboard = () => {
  const isSeller = localStorage.getItem('role');

  if (isSeller === 'seller') {
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
                <h3 className="title mb-0">My Profile</h3>
                <span className="sub-title">Manage your profile information</span>
                <hr className="mb-4" />

                <div className="row">
                  <div className="col-lg-8">
                    <form>
                      <div className="row mb-3">
                        <label for="name" className="col-sm-3 col-form-label text-end">
                          Name
                        </label>
                        <div className="col-sm-7">
                          <input type="name" className="form-control" id="name" />
                        </div>
                      </div>
                      <div className="row mb-3">
                        <label for="email" className="col-sm-3 col-form-label text-end">
                          Email
                        </label>
                        <div className="col-sm-7">
                          <input type="email" className="form-control" id="email" />
                        </div>
                      </div>
                      <div className="row mb-3">
                        <label for="phone-number" className="col-sm-3 col-form-label text-end">
                          Phone Number
                        </label>
                        <div className="col-sm-7">
                          <input type="phone-number" className="form-control" id="phone-number" />
                        </div>
                      </div>
                      <fieldset className="row mb-3">
                        <legend className="col-form-label col-sm-3 pt-0 text-end">Gender</legend>
                        <div className="col-sm-7 d-flex">
                          <div className="form-check me-4">
                            <input className="form-check-input" type="radio" name="gender" id="laki-laki" value="option1" checked />
                            <label className="form-check-label" for="gridRadios1">
                              {' '}
                              Laki - laki{' '}
                            </label>
                          </div>
                          <div className="form-check">
                            <input className="form-check-input" type="radio" name="gender" id="laki-laki" value="option2" />
                            <label className="form-check-label" for="gridRadios2">
                              {' '}
                              Perempuan{' '}
                            </label>
                          </div>
                        </div>
                      </fieldset>
                    </form>
                    <form className="row gx-3 gy-2 align-items-center">
                      <label for="name" className="col-sm-3 col-form-label text-end">
                        Data Of Bith
                      </label>
                      <div className="col-sm-7">
                        <label className="visually-hidden" for="day">
                          Preference
                        </label>
                        <select className="form-select" id="day">
                          <option selected>Day</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                          <option value="7">7</option>
                          <option value="8">8</option>
                          <option value="9">9</option>
                          <option value="10">10</option>
                          <option value="11">11</option>
                          <option value="12">12</option>
                          <option value="13">13</option>
                          <option value="14">14</option>
                          <option value="15">15</option>
                          <option value="16">16</option>
                          <option value="17">17</option>
                          <option value="18">18</option>
                          <option value="19">19</option>
                          <option value="20">20</option>
                          <option value="21">21</option>
                          <option value="22">22</option>
                          <option value="23">23</option>
                          <option value="24">24</option>
                          <option value="25">25</option>
                          <option value="26">26</option>
                          <option value="27">27</option>
                          <option value="28">28</option>
                          <option value="29">29</option>
                          <option value="30">30</option>
                          <option value="31">31</option>
                        </select>
                      </div>
                    </form>

                    <button type="submit" className="btn btn-save mt-5">
                      Save
                    </button>
                  </div>

                  <div className="col-lg-4 text-center">
                    <img className="preview-profile-img" src={img} alt="profile" />

                    <div className="mb-3 upload-img mt-4">
                      <label for="uploadImages" className="form-label">
                        <a className="btn-upload">Upload Image</a>
                      </label>
                      <input className="form-control" type="file" id="uploadImages" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    );
  } else {
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

                <div className="row">
                  <div className="col-lg-8">
                    <form>
                      <div className="row mb-3">
                        <label for="name" className="col-sm-3 col-form-label text-end">
                          Name
                        </label>
                        <div className="col-sm-7">
                          <input type="name" className="form-control" id="name" />
                        </div>
                      </div>
                      <div className="row mb-3">
                        <label for="email" className="col-sm-3 col-form-label text-end">
                          Email
                        </label>
                        <div className="col-sm-7">
                          <input type="email" className="form-control" id="email" />
                        </div>
                      </div>
                      <div className="row mb-3">
                        <label for="phone-number" className="col-sm-3 col-form-label text-end">
                          Phone Number
                        </label>
                        <div className="col-sm-7">
                          <input type="phone-number" className="form-control" id="phone-number" />
                        </div>
                      </div>
                      <fieldset className="row mb-3">
                        <legend className="col-form-label col-sm-3 pt-0 text-end">Gender</legend>
                        <div className="col-sm-7 d-flex">
                          <div className="form-check me-4">
                            <input className="form-check-input" type="radio" name="gender" id="laki-laki" value="option1" checked />
                            <label className="form-check-label" for="gridRadios1">
                              {' '}
                              Laki - laki{' '}
                            </label>
                          </div>
                          <div className="form-check">
                            <input className="form-check-input" type="radio" name="gender" id="laki-laki" value="option2" />
                            <label className="form-check-label" for="gridRadios2">
                              {' '}
                              Perempuan{' '}
                            </label>
                          </div>
                        </div>
                      </fieldset>
                    </form>
                    <form className="row gx-3 gy-2 align-items-center">
                      <label for="name" className="col-sm-3 col-form-label text-end">
                        Data Of Bith
                      </label>
                      <div className="col-sm-7">
                        <label className="visually-hidden" for="day">
                          Preference
                        </label>
                        <select className="form-select" id="day">
                          <option selected>Day</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                          <option value="7">7</option>
                          <option value="8">8</option>
                          <option value="9">9</option>
                          <option value="10">10</option>
                          <option value="11">11</option>
                          <option value="12">12</option>
                          <option value="13">13</option>
                          <option value="14">14</option>
                          <option value="15">15</option>
                          <option value="16">16</option>
                          <option value="17">17</option>
                          <option value="18">18</option>
                          <option value="19">19</option>
                          <option value="20">20</option>
                          <option value="21">21</option>
                          <option value="22">22</option>
                          <option value="23">23</option>
                          <option value="24">24</option>
                          <option value="25">25</option>
                          <option value="26">26</option>
                          <option value="27">27</option>
                          <option value="28">28</option>
                          <option value="29">29</option>
                          <option value="30">30</option>
                          <option value="31">31</option>
                        </select>
                      </div>
                    </form>

                    <button type="submit" className="btn btn-save mt-5">
                      Save
                    </button>
                  </div>

                  <div className="col-lg-4 text-center">
                    <img className="preview-profile-img" src={img} alt="profile" />

                    <div className="mb-3 upload-img mt-4">
                      <label for="uploadImages" className="form-label">
                        <a className="btn-upload">Upload Image</a>
                      </label>
                      <input className="form-control" type="file" id="uploadImages" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    );
  }
};

export default Dashboard;
