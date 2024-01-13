import React from "react";
import { useNavigate } from "react-router-dom";
import BackArrow from "../Icons/BackArrow";
import Share from "../Icons/Share";
import Info from "../Icons/Info";
import FootPrint from "../Icons/FootPrint";
import Susytainably from "../Icons/Sustainably";
import RecycledP from "../Icons/RecycledP";
import RecycledC from "../Icons/RecycledC";
import Renewable from "../Icons/Renewable";
import Unstressed from "../Icons/Unstressed";
import Waste from "../Icons/Waste";
import Factory from "../Icons/Factory";

import "./ProductDetails.scss";

const ProductDetails = () => {
  const navigate = useNavigate();
  const handleInfo = () => {
    navigate("/glossary");
  };

  return (
    <>
      <div className="product-details-wrapper">
        <div className="product-details-header-product-image"></div>
        <div className="product-details-header">
          <div className="product-details-header-buttons-wrapper">
            <div className="product-details-header-button-left">
              <BackArrow />
            </div>
            <div className="product-details-header-button-right">
              <Share />
            </div>
          </div>
          <div className="product-details-header-titles-wrapper">
            <div className="product-details-header-titles-first">
              Personal Care
            </div>
            <div className="product-details-header-titles-second">
              Dove Shampoo
            </div>
            <div className="product-details-header-titles-third">
              Intense repair
            </div>
          </div>
        </div>

        <div className="product-details-main">
          <div className="product-details-main-data-box-wrapper">
            <div className="product-details-main-data-box-title">
              <h5>Product Details</h5>
            </div>
            <div className="product-details-main-data-box-content-wide-wrapper">
              <div className="product-details-main-data-box-content-item">
                <FootPrint />
                <div className="product-details-main-data-box-content-double-wrapper">
                  <h6 className="product-details-main-data-box-content-item">
                    GHG Footprint
                  </h6>
                  <h6 className="product-details-main-data-box-content-item">
                    46% UoM
                  </h6>
                </div>
              </div>
              <div
                className="product-details-main-data-box-content-item product-details-main-data-box-content-item--info"
                onClick={() => handleInfo()}
              >
                <span className="product-details-main-data-box-content-item--info_text">
                  <Info />
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
                  Packaging
                </h6>
                <h6 className="product-details-main-data-box-content-item">
                  GHG Footprint
                </h6>
                <h6 className="product-details-main-data-box-content-item">
                  36% UoM
                </h6>
              </div>
            </div>
            <div className="product-details-main-data-box-content-marquee"></div>
            <div className="product-details-main-data-box-content-wide-wrapper">
              <div className="product-details-main-data-box-content-item">
                <Susytainably />
                <div className="product-details-main-data-box-content-double-wrapper">
                  <h6 className="product-details-main-data-box-content-item">
                    Sustainably Sourced Material
                  </h6>
                  <h6 className="product-details-main-data-box-content-item">
                    30%
                  </h6>
                </div>
              </div>
            </div>
            <div className="product-details-main-data-box-content-normal-wrapper">
              <div className="product-details-main-data-box-content-double-wrapper">
                <h6 className="product-details-main-data-box-content-item">
                  Palm Oil 5%
                </h6>
                <h6 className="product-details-main-data-box-content-item">
                  Parabens 0%
                </h6>
              </div>
              <div className="product-details-main-data-box-content-double-wrapper">
                <h6 className="product-details-main-data-box-content-item">
                  PFAS 2%
                </h6>
                <h6 className="product-details-main-data-box-content-item">
                  Pthalates 0%
                </h6>
              </div>
            </div>
            <div className="product-details-main-data-box-content-marquee"></div>

            <div className="product-details-main-data-box-content-normal-wrapper product-details-main-data-box-content-normal-wrapper--double-icon">
              <div className="product-details-main-data-box-content-icon-item">
                <RecycledP />
                <div className="product-details-main-data-box-content-double-wrapper">
                  <h6 className="product-details-main-data-box-content-item">
                    Recycled
                  </h6>
                  <h6 className="product-details-main-data-box-content-item">
                    Plastic
                  </h6>
                  <h6 className="product-details-main-data-box-content-item">
                    60%
                  </h6>
                </div>
              </div>
              <div className="product-details-main-data-box-content-icon-item">
                <RecycledC />
                <div className="product-details-main-data-box-content-double-wrapper">
                  <h6 className="product-details-main-data-box-content-item">
                    Recycled
                  </h6>
                  <h6 className="product-details-main-data-box-content-item">
                    Cardboard
                  </h6>
                  <h6 className="product-details-main-data-box-content-item">
                    100%
                  </h6>
                </div>
              </div>
            </div>
          </div>

          <div className="product-details-main-data-box-wrapper">
            <div className="product-details-main-data-box-title">
              <h5>Where was it made</h5>
            </div>
            <div className="product-details-main-data-box-content-normal-wrapper product-details-main-data-box-content-normal-wrapper--double-icon">
              <div className="product-details-main-data-box-content-icon-item">
                <Renewable />
                <div className="product-details-main-data-box-content-double-wrapper">
                  <h6 className="product-details-main-data-box-content-item">
                    Recycled
                  </h6>
                  <h6 className="product-details-main-data-box-content-item">
                    Plastic
                  </h6>
                  <h6 className="product-details-main-data-box-content-item">
                    60%
                  </h6>
                </div>
              </div>
              <div className="product-details-main-data-box-content-icon-item">
                <Unstressed />
                <div className="product-details-main-data-box-content-double-wrapper">
                  <h6 className="product-details-main-data-box-content-item">
                    Recycled
                  </h6>
                  <h6 className="product-details-main-data-box-content-item">
                    Cardboard
                  </h6>
                  <h6 className="product-details-main-data-box-content-item">
                    100%
                  </h6>
                </div>
              </div>
            </div>

            <div className="product-details-main-data-box-content-normal-wrapper product-details-main-data-box-content-normal-wrapper--double-icon">
              <div className="product-details-main-data-box-content-icon-item">
                <Waste />
                <div className="product-details-main-data-box-content-double-wrapper">
                  <h6 className="product-details-main-data-box-content-item">
                    Recycled
                  </h6>
                  <h6 className="product-details-main-data-box-content-item">
                    Plastic
                  </h6>
                  <h6 className="product-details-main-data-box-content-item">
                    60%
                  </h6>
                </div>
              </div>
              <div className="product-details-main-data-box-content-icon-item">
                <Factory />
                <div className="product-details-main-data-box-content-double-wrapper">
                  <h6 className="product-details-main-data-box-content-item">
                    Recycled
                  </h6>
                  <h6 className="product-details-main-data-box-content-item">
                    Cardboard
                  </h6>
                  <h6 className="product-details-main-data-box-content-item">
                    100%
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
