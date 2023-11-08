import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { url } from "../../redux/baseUrl/url";
import NavbarLogin from "../../component/navbarLogin/navbarLogin";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./productList.css";
import { Link } from "react-router-dom";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import { useState } from "react";


function ProductList() {
  const {category_id} = useParams()
  // console.log(category_id)
  const [category, setCategory] = React.useState([]);
  const [categoryName, setCategoryName] = React.useState([]);
  const [loading,setLoading] = useState(false)
  const navigate = useNavigate()
  useEffect(() => {
    axios
      .get(`${url}/product/category/${category_id}`)

      .then((res) => {
        setCategory(res.data.data);
        setLoading(false)
      })
      .catch((err) => {
        setLoading(true)
        return (err);
      });
  }, [category_id]);

  useEffect(() => {
    axios
      .get(`${url}/category/${category_id}`)

      .then((res) => {
        setCategoryName(res.data.data[0].name_category);
        setLoading(false)
      })
      .catch((err) => {
        setLoading(true)
        return (err);
      });
  }, [category_id]);


  const handleClick = (product_id) => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    } else {
      navigate(`/detailProduct/${product_id}`);
    }
  };
  

  const formatPrice = (price) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(price);
  };
  const renderStars = () => {
    const starCount = Math.round(4);
    const stars = [];

    for (let i = 0; i < 5; i++) {
      const starColor = i < starCount ? "#FF9529" : "gray";
      stars.push(
        <FontAwesomeIcon key={i} icon={faStar} size="sm" color={starColor} />
      );
    }

    return stars;
  };


  return (
    <div className="ProductList" style={{ overflowX: "hidden" }}>
      <NavbarLogin />
  {loading?(<div class="spinner-border text-primary" role="status">
  <span class="sr-only">Loading...</span>
</div>) :(
      <section id="category">
        <div className="container mt-4">
          <div className="row">
            <h2
              className="fw-bold lh-1"
              style={{ textTransform: "capitalize" }}
            >
              {categoryName}
            </h2>
          </div>
          <div className="row row-cols-md-5 rows-cols-xs-2">
          {category.map((item,index) => (
      <div className="ProductCard" onClick={() => handleClick(item?.product_id)} key={index}>
        <div className="card mt-3 mb-3 h-100">
          <img
            // src={image[0].photo_path}
            src={item?.image_product}
            className="card-img-top"
            alt="Product"
          />
          <div className="card-body">
            {/* <h5 className="product-title card-title">{title}</h5> */}
            <h5 className="product-title card-title">{item?.name_product}</h5>
            {/* <h5 className="price card-title" style={{ color: "#DB3022" }}>
              {formatPrice(price)}
            </h5> */}
            <h5 className="price card-title" style={{ color: "#DB3022" }}>
            {formatPrice(item?.price)}
            </h5>
            {/* <small className="text text-muted">{storeName}</small> */}
            <small className="text text-muted">{item?.store_name}</small>

            <div className="row my-2">
              <div className="ic-rating col-auto pe-0">{renderStars()}</div>

              <div className="rating col-auto ps-0">
                <small className="text">({10  })</small>
              </div>
            </div>
          </div>
        </div>
      </div>
))}
            {/* {products?.length > 0 ? (
              products.map((product) => (
                <div className="col" key={product?.product_id}>
                  <ProductCard
                    productId={product?.product_id}
                    image={product?.path}
                    title={product?.product_name}
                    price={product?.product_price}
                    storeName={product?.product_category}
                    rating={product.score}
                  />
                </div>
              ))
            ) : (
              <div className="col-12 col-md-12 col-lg-12 col-xl-12 mt-5">
                <p className="text-center">No products</p>
              </div>
            )} */}
          </div>
        </div>
      </section>
      )}
    </div>
  );
}

export default ProductList;
