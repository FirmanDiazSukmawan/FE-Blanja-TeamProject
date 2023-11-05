import React, { useEffect, useState } from "react";
import NavbarLogin from "../../component/navbarLogin/navbarLogin";
import style from "./myBag.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { url } from "../../redux/baseUrl/url";
import Swal from "sweetalert2";
const MyBag = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const users_id = localStorage.getItem("userId");
  console.log(users_id);
  // const handleClick = () => {
  //   if (!localStorage.getItem("token")) {
  //     navigate("/login");
  //   } else {
  //     navigate(`/checkout`);
  //   }
  // };

  useEffect(() => {
    axios
      .get(`${url}/order/customer/${users_id}`)
      .then((res) => {
      const order = res.data.data.filter((item) => item.status === null)
      setData(order)
      console.log(order)
      })
      .catch((err) => {
        console.log(err);
      });
  }, [users_id]);

  const handleCheckout = () => {
    axios
      .patch(`${url}/order/status/${users_id}`)
      .then((res) => {
        if (!localStorage.getItem("token")) {
          navigate("/login");
        } else {
          console.log(res.data.data);
          navigate(`/checkout`);
        }
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
  const handleDelete = async (order_id) => {
    const result = await Swal.fire({
      title: "Delete Product",
      text: "Are you sure you want to delete this product?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Delete",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#dc3545",
    });

    if (result.isConfirmed) {
      try {
        await axios.delete(`${url}/order/${order_id}`);
        setData(data.filter((item) => item.order_id !== order_id));
        console.log("Product deleted successfully");
      } catch (error) {
        console.error("Error deleting product:", error);
      }
    }
    try {
    } catch (err) {
      console.log(err);
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
              {data?.map((item) => (
                <div className="card mt-3 cardOrder" key={item.order_id}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-around",
                      alignItems: "center",
                    }}
                  >
                    <input className="form-check-input ml-3 " type="checkbox" />
                    <div className="ml-5 wrapImage">
                      <img
                        style={{ width: 70, height: 70, objectFit: "cover" }}
                        src={item.image_product}
                        alt="Gambar 1"
                      />
                    </div>
                    <div className="row ml-2 wrap ">
                      <div className="font-weight-bold wrapTitle">
                        {item.name_product}
                      </div>
                      <span className="text-secondary wrapTitle">
                        {item.order_size}
                      </span>
                      <span className="text-secondary wrapTitle">
                        {item.order_color}
                      </span>
                    </div>

                    <div
                      className="font-weight-bold mr-3 price"
                      style={{ width: 140 }}
                    >
                      {new Intl.NumberFormat("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      }).format(item.price * item.quantity)}
                    </div>
                    <button
                      className="btn btn-danger"
                      type="button"
                      onClick={() => handleDelete(item.order_id)}
                    >
                      <i class="bi bi-trash"></i>
                    </button>
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
                    <button
                      type="button"
                      class="btn btn-danger"
                      onClick={handleCheckout}
                    >
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
