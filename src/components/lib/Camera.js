import { BrowserQRCodeReader } from "@zxing/browser";
import {
  ChecksumException,
  FormatException,
  NotFoundException,
} from "@zxing/library";
import { useLayoutEffect, useMemo, useRef } from "react";

function stopAllActiveTracks(currentStream) {
  currentStream.getTracks().forEach((track) => {
    // track.enabled = false;
    track.stop();
    // currentStream.removeTrack(track);
  });
}

export default function Camera({
  zoom = 1.0,
  focusMode = "manual",
  facingMode = "environment",
  onDetect,
}) {
  const containerRef = useRef(null);
  const lastInstanceId = useRef(0);
  const { containerWidth, containerHeight } = useMemo(
    () =>
      containerRef.current
        ? {
            containerHeight:
              containerRef.current.getBoundingClientRect().height,
            containerWidth: containerRef.current.getBoundingClientRect().width,
          }
        : {
            containerHeight: window.innerHeight,
            containerWidth: window.innerWidth,
          },
    []
  );

  useLayoutEffect(() => {
    if (!containerRef.current) {
      return;
    }

    const containerRefCurrent = containerRef.current;

    const videoEl = BrowserQRCodeReader.prepareVideoElement();

    videoEl.style.background = "black";
    videoEl.style.width = "100%";
    videoEl.style.height = "100%";

    containerRef.current.appendChild(videoEl);

    let currentStream;
    let controls;

    const browserReader = new BrowserQRCodeReader();
    let checkInterval;

    const timeId = new Date().getTime();

    lastInstanceId.current = timeId;

    navigator.mediaDevices
      .getUserMedia({
        video: {
          width: containerWidth - 100,
          height: containerHeight - 100,
          facingMode,
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          focusMode,
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          advanced: [{ zoom }],
          aspectRatio: containerHeight / containerWidth,
        },
        audio: false,
      })
      .then((stream) => {
        currentStream = stream;

        window.localStream = stream;

        BrowserQRCodeReader.addVideoSource(videoEl, currentStream);
      })
      .then((stream) => {
        return browserReader.decodeFromVideoElement(videoEl, (result, err) => {
          if (err) {
            if (err instanceof NotFoundException) {
              console.log(`No QR code found. ID: ${timeId}`);
            }

            if (err instanceof ChecksumException) {
              console.log(
                "A code was found, but it's read value was not valid."
              );
            }

            if (err instanceof FormatException) {
              console.log("A code was found, but it was in a invalid format.");
            }
          }

          if (onDetect && result) onDetect(result.getText());
        });
      })
      .then((ctrls) => {
        controls = ctrls;

        if (lastInstanceId.current > timeId) {
          controls.stop();

          stopAllActiveTracks(currentStream);
        }
      })
      .catch((err) => {
        console.error(err);

        stopAllActiveTracks(currentStream);
      });

    return () => {
      console.info("Stream...", currentStream);

      clearInterval(checkInterval);

      if (controls) {
        controls.stop();
      }

      BrowserQRCodeReader.cleanVideoSource(videoEl);
      BrowserQRCodeReader.releaseAllStreams();

      if (currentStream) {
        stopAllActiveTracks(currentStream);
      }

      videoEl.srcObject = null;

      containerRefCurrent.removeChild(videoEl);
    };
  }, [
    containerRef,
    onDetect,
    zoom,
    focusMode,
    containerHeight,
    containerWidth,
    facingMode,
  ]);

  useLayoutEffect(
    () => () => {
      containerRef.current?.querySelectorAll("video").forEach((video) => {
        video.height = "100%";
        if (video.srcObject instanceof MediaStream) {
          stopAllActiveTracks(video.srcObject);
        }
      });
    },
    []
  );

  return <div ref={containerRef} style={{ height: "100%", width: "100%" }} />;
}
