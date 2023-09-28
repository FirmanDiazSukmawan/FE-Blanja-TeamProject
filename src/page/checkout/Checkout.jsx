import React from "react";
import NavbarLogin from "../../component/navbarLogin/navbarLogin";
import style from "./checkout.module.css";
import bajuKoko from "../../asset/img/bajukoko.png";
import ModalShipping from "../../component/ModalShipping/ModalShipping";
import ModalAddress from "../../component/ModalAddress/ModalAddress";
import ModalPayment from "../../component/ModalPayment/ModalPayment";

const Checkout = () => {
  return (
    <>
      <NavbarLogin />
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-8" id={style.checkout}>
            <h1>Checkout</h1>
            <div className="shippingAddress mt-5" id={style.shipping}>
              <h5>Shipping Address</h5>
              {/* card shipping address */}
              <div className="card" id={style.card}>
                <div className="card-body">
                  <h5>Andreas Jane</h5>
                  <p>
                    Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja,
                    Kabupaten Banyumas, Jawa Tengah, 53181 [Tokopedia Note: blok
                    c 16] Sokaraja, Kab. Banyumas, 53181
                  </p>
                  <div className="d-flex">
                    <div className="me-3">
                      <ModalShipping modalName="Choose Another Address" />
                    </div>
                    <div>
                      <ModalAddress modalName="Add Another Address" />
                    </div>
                  </div>
                </div>
              </div>
              {/* end card shipping address */}

              {/* card another product 1 */}
              <div className="card mt-5" id={style.card}>
                <div className="d-flex align-items-center">
                  <div className={style.image}>
                    <img src={bajuKoko} width={"70px"} alt="" />
                  </div>
                  <div className="card-body" id={style.brand}>
                    <h3>Andreas Jane</h3>
                    <p>Zalora Cloth</p>
                  </div>
                  <div className={style.price}>
                    <h4>$20.0</h4>
                  </div>
                </div>
              </div>
              {/* end cardproduct 1 */}

              {/* card another product 2 */}
              <div className="card mt-5 mb-5" id={style.card}>
                <div className="d-flex align-items-center">
                  <div className={style.image}>
                    <img src={bajuKoko} width={"70px"} alt="" />
                  </div>
                  <div className="card-body" id={style.brand}>
                    <h3>Andreas Jane</h3>
                    <p>Zalora Cloth</p>
                  </div>
                  <div className={style.price}>
                    <h4>$20.0</h4>
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
                    <ModalPayment modalName="Select Payment" />
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

export default Checkout;
