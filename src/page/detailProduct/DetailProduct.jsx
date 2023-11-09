import React, { useEffect } from "react";
import style from "./detailProduct.module.css";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import NavbarLogin from "../../component/navbarLogin/navbarLogin";
import ProductCard from "../../component/productCard/productCard";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductId,
  loadingSelector,
  productSelector,
} from "../../redux/reducer/productSlice";
import { useState } from "react";
import axios from "axios";
import { url } from "../../redux/baseUrl/url";

const DetailProduct = () => {
  const { product_id } = useParams();
  // console.log(product_id)
  const dispatch = useDispatch();
  const product = useSelector(productSelector);
  const loading = useSelector(loadingSelector);
  const products = product?.[0];
  console.log(products);
  const navigate = useNavigate();
  const [loadingNew, setLoadingNew] = useState(false);
  const [newProductList, setNewProductList] = useState([]);
  const [currentPageNew, setCurrentPageNew] = useState(1);
  const [totalPageNew, setTotalPageNew] = useState(1);
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const customer_id = localStorage.getItem("userId");
  const [data, setData] = useState({
    order_size: "",
    order_color: "",
    quantity: "",
    customer_id: customer_id,
    seller_id: "",
    product_id: product_id,
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddBag = async (e) => {
    try {
      const updateData = {
        ...data,
        order_color: selectedColor,
        order_size: selectedSize,
        quantity: quantity,
        seller_id: products?.users_id,
      };
      const result = await axios.post(`${url}/order`, updateData);
      console.log(result);
      navigate("/myBag");
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    setLoadingNew(true);
    axios
      .get(`${url}/product/?page=${currentPageNew}&limit=10`)
      .then((response) => {
        setTotalPageNew(response?.data.pagination.totalPage);
        setNewProductList(response?.data?.data);
        // console.log(response)
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoadingNew(false);
      });
  }, [currentPageNew]);

  useEffect(() => {
    dispatch(getProductId(product_id));
  }, [dispatch, product_id]);

  const formatPrice = (price) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(price);
  };

  // console.log(products?.color)

  const [quantity, setQuantity] = useState(0);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const handlePageChangeNew = (newPage) => {
    setCurrentPageNew(newPage);
  };

  const handleColorChange = (e) => {
    setSelectedColor(e.target.value);
  };

  const handleSizeChange = (e) => {
    setSelectedSize(e.target.value);
  };

  // console.log(selectedSize)

  return (
    <>
      <NavbarLogin />
{loadingNew?("loading..."):(
      <div className="container mt-5">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="#" className={style.breadcrumb}>
                Home
              </Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="#" className={style.breadcrumb}>
                Category
              </Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              T-Shirt
            </li>
          </ol>
        </nav>
        
        <div className="product mt-5">
          <div className="row">
            <section className="col-lg-4">
              <div className="model container ">
                <img
                  src={products?.image_product}
                  className="rounded img-fluid"
                  alt=""
                  style={{ width: "30vh" }}
                />
              </div>
              <div className="col-auto mt-4">
                <img
                  src={products?.image_product}
                  className="rounded mx-2 img-fluid"
                  style={{ width: "65px" }}
                  alt=""
                />
                <img
                  src={products?.image_product}
                  className="rounded mx-2"
                  style={{ width: "65px" }}
                  alt=""
                />
                <img
                  src={products?.image_product}
                  className="rounded mx-2"
                  style={{ width: "65px" }}
                  alt=""
                />
                <img
                  src={products?.image_product}
                  className="rounded mx-2"
                  style={{ width: "65px" }}
                  alt=""
                />
                <img
                  src={products?.image_product}
                  className="rounded mx-2"
                  style={{ width: "65px" }}
                  alt=""
                />
              </div>
            </section>
            <section id="productPayment" className="col-lg-6">
              <div className={style.productName}>
                <h1>{products?.name_product}</h1>
                <p>{products?.store_name}</p>
              </div>
              <div className="rating d-flex align-items-center ">
                <AiFillStar color="#FFBA49" />
                <AiFillStar color="#FFBA49" />
                <AiFillStar color="#FFBA49" />
                <AiFillStar color="#FFBA49" />
                <AiOutlineStar color="#FFBA49" />
                <p>(10)</p>
              </div>

              <div className="mt-4" id={style.price}>
                <p className="my-0">price</p>
                <h1>{formatPrice(products?.price)}</h1>
              </div>

              <div className="mt-4 d-flex" id="amount">
                <div
                  className="d-flex flex-column"
                  style={{ marginRight: "80px" }}
                  id={style.size}
                >
                  <label htmlFor="colorSelect" className="my-0">
                    Color
                  </label>
                  <select
                    className="form-select"
                    id="colorSelect"
                    style={{ width: "20vh" }}
                    name="order_color"
                    value={selectedColor}
                    onChange={handleColorChange}
                  >
                    {products?.color?.split(",").map((color, index) => (
                      <option key={index} value={color.trim()}>
                        {color.trim()}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="d-flex flex-column">
                  <label htmlFor="colorSelect" className="my-0">
                    Size
                  </label>
                  <select
                    className="form-select"
                    id="sizeSelect"
                    style={{ width: "20vh" }}
                    name="order_size"
                    value={selectedSize}
                    onChange={handleSizeChange}
                  >
                    {products?.size?.split(",").map((size, index) => (
                      <option key={index} value={size?.trim()}>
                        {size?.trim()}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mt-4 d-flex" id="amount">
                <div className="d-flex flex-column" id={style.jumlah}>
                  <p>Jumlah</p>
                  <div className={style.count}>
                    <button
                      type="button"
                      className="btn btn-dark"
                      onClick={handleDecrement}
                      id={style.btnDark}
                    >
                      -
                    </button>
                    <input
                      type="text"
                      value={quantity}
                      readOnly
                      style={{
                        width: 20,
                        margin: "0 5px",
                        textAlign: "center",
                        border: "none",
                      }}
                    />
                    <button
                      type="button"
                      className="btn btn-outline-dark"
                      onClick={handleIncrement}
                      id={style.btnLight}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              <div className="button d-flex mt-4" id={style.action}>
                <button
                  type="button"
                  class="btn btn-outline-dark me-2 flex-grow-3"
                  id={style.outline}
                >
                  Chat
                </button>
                <button
                  type="button"
                  class="btn btn-outline-dark me-2 flex-grow-3"
                  id={style.outline}
                  onClick={handleAddBag}
                >
                  Add Bag
                </button>
                <button
                  onClick={handleAddBag}
                  type="button"
                  class="btn btn-danger me-2 flex-grow-1"
                >
                  Buy Now
                </button>
              </div>
            </section>
          </div>
        </div>
        <div className="row mt-5 ">
          <section id={style.information} className="col-lg-12">
            <h1>Informasi Produk</h1>
            <div className="mt-5" id={style.condition}>
              <h2>Condition</h2>
              <h1>{products?.condition}</h1>
            </div>
            <div className="mt-5" id={style.description}>
              <h2>Description</h2>
              <p>{products?.description}</p>
            </div>
            <div className="mt-5" id={style.review}>
              <h1>Product Review</h1>
              <div className="row mt-5">
                <div className="col-lg-2" id={style.rating}>
                  <h1>
                    5.0<span>/10</span>
                  </h1>
                  <AiFillStar color="#FFBA49" size="2em" />
                  <AiFillStar color="#FFBA49" size="2em" />
                  <AiFillStar color="#FFBA49" size="2em" />
                  <AiFillStar color="#FFBA49" size="2em" />
                  <AiFillStar color="#FFBA49" size="2em" />
                </div>
                <div className="col-lg-10"></div>
              </div>
            </div>
          </section>
        </div>
        <div className="row mt-5">
          <div>
            <h1>You Can Also Like This</h1>
            <p>You've never seen it before!</p>
          </div>
        </div>
        <div className="row row-cols-md-5 rows-cols-xs-2">
          {/* <ProductCard /> */}
          {!loadingNew ? (
            newProductList?.length > 0 ? (
              newProductList?.map((newProduct, index) => (
                <div className="col" key={index}>
                  <ProductCard
                    product_id={newProduct?.product_id}
                    image={newProduct?.image_product}
                    title={newProduct?.name_product}
                    price={newProduct?.price}
                    store_name={newProduct?.store_name}
                    rating={newProduct?.score}
                  />a
                </div>
              ))
            ) : (
              <div className="col-12 col-md-12 col-lg-12 col-xl-12 mt-5">
                <p className="text-center">No products</p>
              </div>
            )
          ) : (
            Array?.from({ length: 5 })?.map((_, index) => (
              <div className="col" key={index}>
                <div className="ProductCard">
                  <div className="card-body">
                    {Array?.from({ length: 2 })?.map((_, index) => (
                      <h5 className="product-title card-title">No PRODUCT</h5>
                    ))}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="pagination ">
          <div className="container text-center">
            {Array?.from({ length: totalPageNew }, (_, index) => (
              <button
                key={index}
                onClick={() => handlePageChangeNew(index + 1)}
                type="button"
                className={`btn btn-secondary ${
                  currentPageNew === index + 1 ? "btn-danger" : ""
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
      )}
    </>
  );
};

export default DetailProduct;
