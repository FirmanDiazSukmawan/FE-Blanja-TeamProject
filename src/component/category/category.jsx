import React from "react";
import Carousel from "react-multi-carousel";
import { Link, useNavigate } from "react-router-dom";

import "react-multi-carousel/lib/styles.css";
import "../category/category.css";
import { useEffect } from "react";
import axios from "axios";
import { url } from "../../redux/baseUrl/url";
import { useState } from "react";


function Category() {
  const responsive = {
    largeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2.75,
    },
  };

  const navigate = useNavigate()
  const [category,setCategory] = useState([])
  const [loading,setLoading] = useState(false)
  useEffect(() => {
    axios
      .get(`${url}/category`)

      .then((res) => {
        setCategory(res.data.data);
        setLoading(false)
        // console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
        setLoading(true)
      });
  }, []);

  

  // console.log(category)

  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  
  return (
    <div className="Category">
      <div className="row mb-3">
        <h2 className="fw-bold lh-1">Category</h2>
        <p className="text-muted lh-1">What are you currently looking for</p>
      </div>
      <div className="row">
        <div className="container">
          <Carousel
            responsive={responsive}
            infinite={true}
            centerMode={false}
            itemClass="style-item"
          >
            
            {loading?"loading.." :category?.map((item) => (
    <div
      className="item"
      key={item.category_id}
      style={{ backgroundColor: getRandomColor() }}
    >
      <Link to={`/category/${item.category_id}`} style={{ textDecoration: "none" }}>
        <div
          className="img-item"
          style={{
            backgroundImage: `url('${item.image}')`,
          }}
        >
          <h2 className="title-item text-white">{item.name_category}</h2>
        </div>
      </Link>
    </div>
  ))}

          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Category;
