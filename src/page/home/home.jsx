/* eslint-disable jsx-a11y/heading-has-content */
import React, { useEffect, useState } from "react";

import Navbar from "../../component/navbar/navbar";
import NavbarLogin from "../../component/navbarLogin/navbarLogin";
import CarouselList from "../../component/carousel/carousel";
import Category from "../../component/category/category";
import ProductCard from "../../component/productCard/productCard";
import axios from "axios";

import "./home.css";
import { url } from "../../redux/baseUrl/url";
import { useNavigate } from "react-router-dom";

function Home() {
  const login = localStorage.getItem("token");
  const navigate = useNavigate();
  const [loadingNew, setLoadingNew] = useState(true);
  const [newProductList, setNewProductList] = useState([]);
  const [currentPageNew, setCurrentPageNew] = useState(1);
  const [totalPageNew, setTotalPageNew] = useState(1);

  const [loadingPopular, setLoadingPopular] = useState(false);
  const [popularProductList, setPopularProductList] = useState([]);
  const [currentPagePopular, setCurrentPagePopular] = useState(1);
  const [totalPagePopular, setTotalPagePopular] = useState(1);

  useEffect(() => {
    setLoadingNew(true);
    axios
      .get(`${url}/product/?page=${currentPageNew}&limit=15`)
      .then((response) => {
        setTotalPageNew(response?.data?.pagination?.totalPage);
        setNewProductList(response?.data?.data);
        setLoadingNew(false)
        // console.log(response)
      })
      .catch((err) => {
        console.log(err);
        setLoadingNew(false);
      })
      .finally(() => {
        setLoadingNew(false);
      });
  }, [currentPageNew]);

  useEffect(() => {
    setLoadingPopular(true);
    axios
      .get(`${url}/product?page=${currentPagePopular}&by=review`)
      .then((response) => {
        setTotalPagePopular(response?.data?.pages?.total);
        setPopularProductList(response?.data?.data);
        setLoadingPopular(false)
      })
      .catch((err) => {
        console.log(err);
        setLoadingPopular(false)
      })
      .finally(() => {
        setLoadingPopular(false);
      });
  }, [currentPagePopular]);

  const handlePageChangeNew = (newPage) => {
    setCurrentPageNew(newPage);
  };

  const handlePageChangePopular = (newPage) => {
    setCurrentPagePopular(newPage);
  };
  const handleRecipeClick = (product_id) => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    } else {
      navigate(`/detailProduct/${product_id}`);
    }
  };
  return (
    <>
      {!login ? <Navbar /> : <NavbarLogin />}
      <div className="Home">
        {loadingNew? "loading..." :
        <div className="row">
          <section id="carousel" className="container">
            <CarouselList />
          </section>
          <section id="category-list" className="container">
            <div className="container mt-4">
              <Category />
            </div>
          </section>
          <section id="new-product">
            <div className="container mt-4">
              <div className="row">
                <h2 className="fw-bold lh-1">New</h2>
                <p className="text-muted lh-1">You’ve never seen it before!</p>
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
                          rating={newProduct.score}
                        />
                      </div>
                    ))
                  ) : (
                    <div class="spinner-border text-primary" role="status">
                      <span class="sr-only">Loading...</span>
                    </div>
                  )
                ) : (
                  Array?.from({ length: 5 })?.map((_, index) => (
                    <div className="col" key={index}>
                      <div className="ProductCard">
                        <div className="card-body">
                          {Array?.from({ length: 2 })?.map((_, index) => (
                            <h5
                              className="product-title card-title"
                              key={index}
                            ></h5>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
            <div className="pagination ">
              <div className="container text-center">
                {Array?.from({ length: totalPageNew }, (_, index) => (
                  <button
                    key={index}
                    onClick={() => handlePageChangeNew(index + 1)}
                    type="button"
                    className={`btn ${
                      currentPageNew === index + 1 ? "btn-danger" : ""
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
            </div>
          </section>

          <section id="popular-product">
            <div className="container mt-4">
              <div className="row">
                <h2 className="fw-bold lh-1">Popular</h2>
                <p className="text-muted lh-1">
                  Find clothes that are trending recently
                </p>
              </div>
              <div className="row row-cols-md-5 rows-cols-xs-2">
                <ProductCard />
                {/* {!loadingPopular ? (
                popularProductList?.length > 0 ? (
                  popularProductList.slice(0, 10).map((newProduct) => (
                    <div className="col" key={newProduct?.product_id}>
                      <ProductCard
                        productId={newProduct?.product_id}
                        image={newProduct?.path}
                        title={newProduct?.product_name}
                        price={newProduct?.product_price}
                        storeName={newProduct?.product_category}
                        rating={newProduct.score}
                      />
                    </div>
                  ))
                ) : (
                  <div className="col-12 col-md-12 col-lg-12 col-xl-12 mt-5">
                    <p className="text-center">No products found</p>
                  </div>
                )
              ) : (
                Array.from({ length: 5 }).map((_, index) => (
                  <div className="col" key={index}>
                    <div className="ProductCard">
                      <div className="card-body">
                        {Array.from({ length: 2 }).map((_, index) => (
                          <h5 className="product-title card-title" key={index}>
                          </h5>
                        ))}
                      </div>
                    </div>
                  </div>
                ))
              )} */}
              </div>
            </div>
            <div className="pagination2 ">
              <div className="container text-center">
                {Array?.from({ length: totalPagePopular }, (_, index) => (
                  <button
                    key={index}
                    onClick={() => handlePageChangePopular(index + 1)}
                    type="button"
                    className={`btn ${
                      currentPagePopular === index + 1 ? "btn-danger" : ""
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
            </div>
          </section>
        </div>
        }
      </div>
    </>
  );
}

export default Home;
