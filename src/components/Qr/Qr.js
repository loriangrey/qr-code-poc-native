import { useState } from "react";
import { useNavigate } from "react-router-dom";

import CameraArea from "../lib/Camera";
import "./Qr.scss";

export default function Scanner() {
  const navigate = useNavigate();
  const [QRDetectionColor, setQRDetectionColor] = useState(false);

  const handleQRDetection = (result) => {
    setQRDetectionColor(result ? true : false);
    // TODO connect / call API with result url parameters
    setTimeout(() => {
      navigate("/product-detail");
    }, 1000);
  };

  console.log(QRDetectionColor);
  return (
    <>
      <div className="scanner-wrapper">
        <div className="scanner-advise-block">
          Scan the QR code on any Unilever product access the information about
          it's sustainability
        </div>
        <div className="scanner-page">
          <div
            className={`${
              QRDetectionColor
                ? "scanner-camera-area scanner-camera-area-active"
                : "scanner-camera-area"
            }`}
          >
            <div className="camera-frame">
              <CameraArea onDetect={(result) => handleQRDetection(result)} />
            </div>
          </div>
        </div>
        <div className="scanner-button-wrapper">
          <div className="scanner-button-couple">
            <div className="scanner-button scanner-button1">O</div>
            <div className="scanner-button">1x</div>
          </div>
          <div className="scanner-button">Upload from Gallery</div>
        </div>
      </div>
      <div className="scanner-blured-bg"></div>
    </>
  );
}
