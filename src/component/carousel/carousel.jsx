import React from "react";

import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";

import "./carousel.css";
import "react-multi-carousel/lib/styles.css";

function CarouselList() {
  const responsive = {
    largeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 2.5,
    },
    tablet: {
      breakpoint: { max: 800, min: 575 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 575, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="Carousel">
      <div className="container">
        <Carousel
          responsive={responsive}
          showDots={false}
          autoPlay={false}
          infinite={true}
          centerMode={false}
          itemClass="style-item"
        >
          <div className="item">
            <Link to="#" style={{ textDecoration: "none" }}>
              <div
                className="img-item"
                style={{
                  backgroundImage: "url(img/image1.png)",
                }}
              >
                <h2 className="title-item text-white">Casual Trending</h2>
              </div>
            </Link>
          </div>

          <div className="item">
            <Link to={"#"} style={{ textDecoration: "none" }}>
              <div
                className="img-item"
                style={{
                  backgroundImage: "url(img/image2.png)",
                }}
              >
                <h2 className="title-item text-white">Black Edition</h2>
              </div>
            </Link>
          </div>

          <div className="item">
            <Link to={"#"} style={{ textDecoration: "none" }}>
              <div
                className="img-item"
                style={{
                  backgroundImage: "url(img/image3.png)",
                }}
              >
                <h2 className="title-item text-white">Popular Teenager</h2>
              </div>
            </Link>
          </div>

          <div className="item">
            <Link to={"#"} style={{ textDecoration: "none" }}>
              <div
                className="img-item"
                style={{
                  backgroundImage: "url(img/image4.png)",
                }}
              >
                <h2 className="title-item text-white">Thrift Here</h2>
              </div>
            </Link>
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default CarouselList;
