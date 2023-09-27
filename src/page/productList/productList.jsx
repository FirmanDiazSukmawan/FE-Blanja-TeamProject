import React from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { url } from "../../redux/baseUrl/url";
import NavbarLogin from "../../component/navbarLogin/navbarLogin";
import ProductCard from "../../component/productCard/productCard";

function ProductList() {
  const location = useLocation();
  const [products, setProducts] = React.useState([]);
  const currentKeyword = location.pathname.split("/")[2];

  React.useEffect(() => {
    const currentKeyword = location.pathname.split("/")[2];

    window.scrollTo(0, 0);

    // axios.get(`${url}/product?category=${currentKeyword}`).then((response) => {
    //   const productData = response?.data?.data;
    //   setProducts(productData);
    // });
  }, []);

  return (
    <div className="ProductList" style={{ overflowX: "hidden" }}>
      <NavbarLogin />

      <section id="category">
        <div className="container mt-4">
          <div className="row">
            <h2
              className="fw-bold lh-1"
              style={{ textTransform: "capitalize" }}
            >
              {currentKeyword}
            </h2>
          </div>
          <div className="row row-cols-md-5 rows-cols-xs-2">
            <ProductCard />
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
    </div>
  );
}

export default ProductList;
