import React from "react";
import bajukoko from "../../asset/img/bajukoko.png";
import {AiFillStar, AiOutlineStar} from "react-icons/ai"
import NavbarLogin from "../../component/navbarLogin/navbarLogin";


const DetailProduct = () => {
  return (
    <>
    <NavbarLogin />
      <div className="container mt-5">
        <div className="product">
          <div className="row">
            <section id="image-container" className="col-lg-4">
              <img src={bajukoko} className="img-fluid" alt="" />
            </section>
            <section id="productPayment" className="col-lg-8">
              <div className="productName">
                <h1>Baju Muslim Pria</h1>
                <p>Zalora Cloth</p>
              </div>
              <div className="rating d-flex ">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiOutlineStar />
              </div>

              <div className="price mt-4">
                <p className="my-0">Price</p>
                <h1>$ 20.0</h1>
              </div>

              <div className="color mt-4">
                <p className="my-0">Color</p>
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
              </div>
              <div className="button">
              <button type="button" class="btn btn-outline-dark">Chat</button>
              <button type="button" class="btn btn-outline-dark">Add Bag</button>
              <button type="button" class="btn btn-danger">Buy Now</button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailProduct;
