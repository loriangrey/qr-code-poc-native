import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { ColorRing } from "react-loader-spinner";

import CameraArea from "../lib/Camera";

import NoFlash from "../Icons/NoFlash";
import FotoPlus from "../Icons/FotoPlus";
import { api, data } from "../lib/Api";
import "./Qr.scss";

export default function Scanner() {
  const navigate = useNavigate();
  const [QRDetectionColor, setQRDetectionColor] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleQRDetection = (result) => {
    setQRDetectionColor(result ? true : false);
    // TODO connect / call API with result url parameters
    (async () => {
      // const data = await api("1");
      setTimeout(() => {
        setIsLoading(true);
      }, 1000);

      await data().then((res) => {
        setTimeout(() => {
          navigate("/product-detail", { state: { ...res } });
        }, 2000);
      });
    })();
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
              {!isLoading ? (
                <CameraArea onDetect={(result) => handleQRDetection(result)} />
              ) : (
                <div className="camera-frame-loading">
                  <ColorRing
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="color-ring-loading"
                    wrapperStyle={{}}
                    wrapperClass="color-ring-wrapper"
                    colors={[
                      "#CCCCCC",
                      "#CCCCCC",
                      "#CCCCCC",
                      "#CCCCCC",
                      "#CCCCCC",
                    ]}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="scanner-button-wrapper">
          <div className="scanner-button-couple">
            <div className="scanner-button scanner-button1">
              <NoFlash />
            </div>
            <div className="scanner-button scanner-button2">
              <span>1x</span>
            </div>
          </div>
          <div className="scanner-button scanner-button3">
            <FotoPlus />
            <div>Upload from Gallery</div>
          </div>
        </div>
      </div>
      <div className="scanner-blured-bg"></div>
    </>
  );
}
