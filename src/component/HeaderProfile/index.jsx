/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const HeaderProfile = (users) => {
  // console.log(users)
  return (
    <div className="header">
      <div className="wrapper-img d-flex">
        <img className="profile-images" src={users.users.image} style={{ objectFit: 'cover', width: '60px', height: '60px' }} alt="" />
        <div className="preferensi ms-3">
          <p className="mb-2 fw-bold">{users.users.name}</p>
        </div>
      </div>
    </div>
  );
};

export default HeaderProfile;
