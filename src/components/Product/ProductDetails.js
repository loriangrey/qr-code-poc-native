import React from "react";
import { useNavigate } from "react-router-dom";
import "./ProductDetails.scss";

const ProductDetails = () => {
  const navigate = useNavigate();
  const handleInfo = () => {
    navigate("/glossary");
  };

  return (
    <>
      <div className="product-details-wrapper">
        <div className="product-details-header">
          <div className="product-details-header-buttons-wrapper">
            <div className="product-details-header-button-left"></div>
            <div className="product-details-header-button-right"></div>
          </div>
          <div className="product-details-header-titles-wrapper">
            <h5>Personal Care</h5>
            <h2>Dove Shampoo</h2>
            <h2>Intense repair</h2>
          </div>
        </div>

        <div className="product-details-main">
          <div className="product-details-main-data-box-wrapper">
            <div className="product-details-main-data-box-title">
              <h4>Product Details</h4>
            </div>
            <div className="product-details-main-data-box-content-wide-wrapper">
              <div className="product-details-main-data-box-content-double-wrapper">
                <h6 className="product-details-main-data-box-content-item">
                  GHG Footprint
                </h6>
                <h6 className="product-details-main-data-box-content-item">
                  46% UoM
                </h6>
              </div>
              <div
                className="product-details-main-data-box-content-item product-details-main-data-box-content-item--info"
                onClick={() => handleInfo()}
              >
                <span className="product-details-main-data-box-content-item--info_text">
                  i
                </span>
              </div>
            </div>
            <div className="product-details-main-data-box-content-normal-wrapper">
              <div className="product-details-main-data-box-content-double-wrapper">
                <h6 className="product-details-main-data-box-content-item">
                  Ingredients
                </h6>
                <h6 className="product-details-main-data-box-content-item">
                  GHG Footprint
                </h6>
                <h6 className="product-details-main-data-box-content-item">
                  54% UoM
                </h6>
              </div>
              <div className="product-details-main-data-box-content-double-wrapper">
                <h6 className="product-details-main-data-box-content-item">
                  Ingredients
                </h6>
                <h6 className="product-details-main-data-box-content-item">
                  GHG Footprint
                </h6>
                <h6 className="product-details-main-data-box-content-item">
                  54% UoM
                </h6>
              </div>
            </div>
            <div className="product-details-main-data-box-content-marquee"></div>
          </div>

          <div className="product-details-main-data-box-wrapper">
            <div className="product-details-main-data-box-title">
              <h4>Where was it made</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
