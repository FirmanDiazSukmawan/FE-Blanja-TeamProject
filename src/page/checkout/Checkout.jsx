import React from "react";
import NavbarLogin from "../../component/navbarLogin/navbarLogin";
import style from "./checkout.module.css";
import bajuKoko from "../../asset/img/bajukoko.png";
import ModalShipping from "../../component/ModalShipping/ModalShipping";
import ModalAddress from "../../component/ModalAddress/ModalAddress";
import ModalPayment from "../../component/ModalPayment/ModalPayment";
import { useEffect } from "react";
import { useState } from "react";
import { url } from "../../redux/baseUrl/url";
import axios from "axios";

const Checkout = () => {
  
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

  const formatPrice = (price) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(price);
  };

  console.log(order)
  return (
    <>
    
      <NavbarLogin />
      {loading?("loading..."):(
      <div className="container mt-5">
      
        <div className="row">
          <div className="col-lg-8" id={style.checkout}>
            <h1>Checkout</h1>
            <div className="shippingAddress mt-5" id={style.shipping}>
              <h5>Shipping Address</h5>
              {/* card shipping address */}
              {data?.map((item)=>( 
              <div className="card" id={style.card}>
                <div className="card-body">
                  <h5>{item.recipients_name}</h5>
                  <span>{item.phone}</span>
                  <p>
                    <span>{item.addres} </span>
                    <span>{item.home_addres} </span>
                    <span>{item.city} </span>
                    <span>{item.postal_code}</span>
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
              ))}
              {/* end card shipping address */}

              {/* card another product 1 */}
              {order?.map((item)=>(
              <div className="card mt-5" id={style.card}>
                <div className="d-flex align-items-center">
                  <div className={style.image}>
                    <img src={item.image_product} width={"70px"} alt="" />
                  </div>
                  <div className="card-body" id={style.brand}>
                    <h3>{item.name_product}</h3>
                    <p>color: {item.order_color}</p>
                    <p>Size : {item.order_size}</p>
                    <p>Quantity : {item.quantity}</p>
                  </div>
                  <div className={style.price}>
                    <h4>{formatPrice(item.price)}</h4>
                  </div>
                </div>
              </div>
              ))}
              {/* end cardproduct 1 */}

              {/* card another product 2 */}
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
      )}
    </>
  );
};

export default Checkout;
