import React from "react";
import style from "./detailProduct.module.css";
import bajukoko from "../../asset/img/bajukoko.png";
import {AiFillAmazonCircle, AiFillStar, AiOutlineStar} from "react-icons/ai"
import NavbarLogin from "../../component/navbarLogin/navbarLogin";
import ProductCard from "../../component/productCard/productCard"
import gridKoko from "../../asset/img/gridKoko.svg";
const DetailProduct = () => {
  return (
    <>
      <NavbarLogin />
      <div className="container mt-5">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="#" className={style.breadcrumb}>
                Home
              </a>
            </li>
            <li className="breadcrumb-item">
              <a href="#" className={style.breadcrumb}>
                Category
              </a>
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
                <img src={bajukoko} className="rounded img-fluid" alt="" />
              </div>
              <div className="col-auto mt-4">
                <img
                  src={gridKoko}
                  className="rounded mx-2 img-fluid"
                  style={{ width: "65px" }}
                  alt=""
                />
                <img
                  src={gridKoko}
                  className="rounded mx-2"
                  style={{ width: "65px" }}
                  alt=""
                />
                <img
                  src={gridKoko}
                  className="rounded mx-2"
                  style={{ width: "65px" }}
                  alt=""
                />
                <img
                  src={gridKoko}
                  className="rounded mx-2"
                  style={{ width: "65px" }}
                  alt=""
                />
                <img
                  src={gridKoko}
                  className="rounded mx-2"
                  style={{ width: "65px" }}
                  alt=""
                />
              </div>
            </section>
            <section id="productPayment" className="col-lg-6">
              <div className={style.productName}>
                <h1>Baju Muslim Pria</h1>
                <p>Zalora Cloth</p>
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
                <p className="my-0">Price</p>
                <h1>$ 20.0</h1>
              </div>

              <div className="color mt-4">
                <p className="my-0">Color</p>
                <select class="form-select" aria-label="Default select example">
                  <option selected>Select Color</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>

              <div className="mt-4 d-flex" id="amount">
                <div
                  className="d-flex flex-column"
                  style={{ marginRight: "80px" }}
                  id={style.size}
                >
                  <p>Size</p>
                  <div className={style.count}>
                    <button
                      type="button"
                      className="btn btn-dark"
                      id={style.btnDark}
                    >
                      -
                    </button>
                    <span className="num">0</span>
                    <button
                      type="button"
                      className="btn btn-outline-dark"
                      id={style.btnLight}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="d-flex flex-column" id={style.jumlah}>
                  <p>Jumlah</p>
                  <div className={style.count}>
                    <button
                      type="button"
                      className="btn btn-dark"
                      id={style.btnDark}
                    >
                      -
                    </button>
                    <span className="num">0</span>
                    <button
                      type="button"
                      className="btn btn-outline-dark"
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
                >
                  Add Bag
                </button>
                <button  type="button" class="btn btn-danger me-2 flex-grow-1">
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
              <h1>New</h1>
            </div>
            <div className="mt-5" id={style.description}>
              <h2>Description</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                non magna rutrum, pellentesque augue eu, sagittis velit.
                Phasellus quis laoreet dolor. Fusce nec pharetra quam. Interdum
                et malesuada fames ac ante ipsum primis in faucibus. Praesent
                sed enim vel turpis blandit imperdiet ac ac felis. Etiam
                tincidunt tristique placerat. Pellentesque a consequat mauris,
                vel suscipit ipsum. Donec ac mauris vitae diam commodo vehicula.
                Donec quam elit, sollicitudin eu nisl at, ornare suscipit magna.
                Donec non magna rutrum, pellentesque augue eu, sagittis velit.
                Phasellus quis laoreet dolor. Fusce nec pharetra quam. Interdum
                et malesuada fames ac ante ipsum primis in faucibus. Praesent
                sed enim vel turpis blandit imperdiet ac ac felis. In ultricies
                rutrum tempus. Mauris vel molestie orci.
              </p>
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
        <div className="row mt-5">
        <ProductCard />
        </div>
       
      </div>
    </>
  );
};

export default DetailProduct;
