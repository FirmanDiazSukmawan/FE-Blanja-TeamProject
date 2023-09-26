import React from 'react';
import { useNavigate } from 'react-router-dom';
import IconAcc from '../../asset/img/Mjajuni.jpeg';

const ButtonSidebar = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/dashboard');
    window.location.reload();
  };
  return (
    <div className="list-item">
      <p>
        <a className="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
          <img className="icon-profile" src={IconAcc} alt="" />
          <span className="description active ms-3">Store</span>{' '}
        </a>
      </p>

      <div className="collapse" id="collapseExample">
        <div className="card card-body p-0">
          <button className="btn p-0" onClick={handleNavigate}>
            <span className="description">Store Profile</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ButtonSidebar;
