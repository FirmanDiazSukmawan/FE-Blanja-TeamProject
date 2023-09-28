import React from "react";
import NavbarLogin from "../../component/navbarLogin/navbarLogin";
import style from "./myBag.module.css";
import bajuKoko from "../../asset/img/bajukoko.png";
import { useNavigate } from "react-router-dom";
const MyBag = () => {
  const navigate = useNavigate()
  const handleClick = () => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    } else {
      navigate(`/checkout`);
    }
  };
  return (
    <>
      <NavbarLogin />
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-8" id={style.bag}>
            <h1>My Bag</h1>
            <div className="shippingAddress mt-5" id={style.shipping}>
              {/* card shipping address */}
              <div className="card" id={style.card}>
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col-1" id={style.checkbox}>
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                    </div>
                    <div className="col-5">
                      <h5>
                        Select All Items <span>(2 items selected)</span>
                      </h5>
                    </div>
                    <div className="col-6 text-end" id={style.delete}>
                      <button type="button" class="btn btn-link">
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* end card shipping address */}

              {/* card another product 1 */}
              <div className="card mt-5" id={style.card}>
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col-1" id={style.checkbox}>
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value="#"
                        id="flexCheckDefault"
                      />
                    </div>
                    <div className="col-7 d-flex gap-3">
                      <div className={style.image}>
                        <img src={bajuKoko} width={"70px"} alt="" />
                      </div>
                      <div className="product">
                        <h5>Men's Formal Suit - Black</h5>
                        <p>Zalora Cloth</p>
                      </div>
                    </div>
                    <div className="col-4 text-end">
                      <h4>$20.0</h4>
                    </div>
                  </div>
                </div>
              </div>
              {/* end cardproduct 1 */}

              {/* card another product 2 */}
              <div className="card" id={style.card}>
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col-1" id={style.checkbox}>
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                    </div>
                    <div className="col-7 d-flex gap-3">
                      <div className={style.image}>
                        <img src={bajuKoko} width={"70px"} alt="" />
                      </div>
                      <div className="product">
                        <h5>Men's Formal Suit - Black</h5>
                        <p>Zalora Cloth</p>
                      </div>
                    </div>
                    <div className="col-4 text-end">
                      <h4>$20.0</h4>
                    </div>
                  </div>
                </div>
              </div>
              {/* end card product 2 */}
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card mb-5" id={style.card}>
              <div className="card-body">
                <h3>Shopping Summary</h3>
                <div className="row">
                  <div className="col-6">
                    <p>Order</p>
                    <p>Delivery</p>
                  </div>
                  <div className="col-6 text-end" id="value">
                    <p>$40.0</p>
                    <p>$5.0</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6" id="sub">
                    <p>Shopping Summary</p>
                  </div>
                  <div className="col-6 text-end" id="value">
                    <p>$40.0</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 d-grid">
                    <button type="button" class="btn btn-danger" onClick={handleClick}>
                      CheckOut
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyBag;
