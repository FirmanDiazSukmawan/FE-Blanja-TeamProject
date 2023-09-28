import React from "react";
function SearchPage({ data }) {
  return (
    <>
      <div
        className="position-absolute"
        style={{
          width: "95%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "2%",
        }}
      >
        {data.map((item) => (
          <div
            className="search"
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              width: "90%",
              height: "5vh",
              padding: "1%",
              borderLeft: "1px solid",
              borderRight: "1px solid",
              borderRadius: "20px",
              backgroundColor: "#fafafa",
            }}
            key={item.product_id}
          >
            <img
              src={item.image_product}
              className="card-img "
              id="cardimg"
              alt="..."
              style={{ width: "5vh", height: "5vh" }}
            />
            <p className="text-center" style={{ fontSize: "1.5vh" }}>
              {item.name_product}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default SearchPage;
