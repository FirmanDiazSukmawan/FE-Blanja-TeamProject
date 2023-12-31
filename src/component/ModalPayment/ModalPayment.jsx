import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import style from "./payment.module.css";
import goPay from "../../asset/img/goPay.svg";
import posIndo from "../../asset/img/posIndo.svg";
import masterCard from "../../asset/img/masterCard.svg";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { url } from "../../redux/baseUrl/url";
import axios from "axios";


function ModalPayment(props) {
  const {order_id}= props
  const {price} = props
  const {calculateTotalPrice} = props
  console.log(price)

  console.log(order_id)
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();

  const user_id = localStorage.getItem("userId")
  const [loading,setLoading] = useState(false)
  const [data,setData] = useState([])
  const [order,setOrder] = useState([])
  useEffect(()=>{
    axios.get(`${url}/addres/${user_id}`)
    .then((res)=>{
      setData(res.data.data)

      setLoading(false)
    })
    .catch((err)=>{
      console.log(err)
    })
  },[user_id])

  useEffect(()=>{
    axios.get(`${url}/order/customer/${user_id}`)
    .then((res)=>{
      setOrder(res.data.data)
      console.log(res.data.data)
      setLoading(false)
    })
    .catch((err)=>{
      console.log(err)
    })
  },[user_id])

  const handlePaidNowClick = () => {
    axios.patch(`${url}/order/status/paid/${user_id}`)
    .then((res) => {
      console.log(res.data.data);

      navigate(`/profile`);
    })
    .catch((err) => {
      console.log(err);
    });
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(price);
  };

  return (
    <>
      <Button variant="danger" onClick={handleShow} id={style.modalButton}>
        {props.modalName}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Payment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="">
            <div className="card">
              <div className="card-body">
                <div>
                  <h4 className={style.method}>Payment Method</h4>
                </div>
                <div className="row align-items-center justify-content-center mt-4">
                  <div className="col-3">
                    <img src={goPay} alt="" />
                  </div>
                  <div className="col-5">
                    <h5 className={style.method}>GoPay</h5>
                  </div>
                  <div
                    className="col-1 offset-3 form-check mt-2"
                    id={style.checkbox}
                  >
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      id="flexCheckDefault"
                    />
                  </div>
                </div>
                <div className="row align-items-center justify-content-center mt-4">
                  <div className="col-3">
                    <img src={posIndo} alt="" />
                  </div>
                  <div className="col-5">
                    <h5 className={style.method}>Pos Indonesia</h5>
                  </div>
                  <div
                    className="col-1 offset-3 form-check mt-2"
                    id={style.checkbox}
                  >
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      id="flexCheckDefault"
                    />
                  </div>
                </div>
                <div className="row align-items-center justify-content-center mt-4">
                  <div className="col-3">
                    <img src={masterCard} alt="" />
                  </div>
                  <div className="col-5">
                    <h5 className={style.method}>Master Card</h5>
                  </div>
                  <div
                    className="col-1 offset-3 form-check mt-2"
                    id={style.checkbox}
                  >
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      id="flexCheckDefault"
                    />
                  </div>
                </div>
              </div>
              <div className="card-footer mt-5">
                <div>
                  <h4>Shopping Summary</h4>
                </div>
                <div className="row">
                  <div className="col-6">
                    <p>Order</p>
                    <p>Delivery</p>
                  </div>
                  <div className="col-6 text-end" id="value">
                  <p>{formatPrice(price?.price)}</p>
                    <p>{formatPrice(5000)}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
   
          <div className="row mx-3">
            <div className="col-6">
              <h4 className={style.summary}>Shopping Summary</h4>
              <h4 className={style.price}>{formatPrice(calculateTotalPrice())}</h4>
            </div>
       
          <div className="col-4 offset-2 mb-5">
            <Button variant="danger" onClick={handlePaidNowClick}>
              Paid Now
            </Button>
          </div>
          </div>
      </Modal>
    </>
  );
}

export default ModalPayment;
