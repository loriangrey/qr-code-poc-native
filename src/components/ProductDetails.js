import React from "react";
const ProductDetails = () => {
  return (
    <>
      <div
        className="Logo"
        style={{
          backgroundColor: "#389af5",
          height: "320px",
          position: "relative",
        }}
      >
        <h3 style={{ color: "#fff" }}>Product Details</h3>
      </div>

      <div
        className="box"
        style={{
          display: "flex",
          position: "absolute",
          top: "230px ",
          left: "310px",
          width: "800px",
          height: "460px",
          backgroundColor: "#fff",
          border: "1px solid #ccc",
          borderRadius: "8px",
          padding: "0px",
          margin: "20px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div
          style={{
            width: "100%",
            border: "none",
            outline: "none",
            margin: "0px",
            height: "88px",
            borderTopRightRadius: "8px",
            borderTopLeftRadius: "8px",
            backgroundColor: "#f2f2f2",
          }}
        >
          <h2 style={{ marginLeft: "2.5rem" }}>Product Details</h2>
        </div>
      </div>
      <div
        className="boxbelow"
        style={{
          display: "flex",
          position: "absolute",
          top: "780px",
          bottom: "50px",
          left: "310px",
          width: "750px",
          height: "460px",
          backgroundColor: "ffff",
          border: "1px solid #ccc",
          borderRadius: "8px",
          padding: "20px",
          margin: "20px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div
          style={{
            width: "100%",
            border: "none",
            outline: "none",
            margin: "0px",
            height: "88px",
            borderTopRightRadius: "8px",
            borderTopLeftRadius: "8px",
            backgroundColor: "#f2f2f2",
          }}
        >
          <h2 style={{ marginLeft: "2.5rem" }}>Where was it made </h2>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
