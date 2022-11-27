import { useCallback, useState } from "react";
import Slider from "@material-ui/core/Slider";
import Cropper from "react-easy-crop";
// import getCroppedImg from "./Crop";

const EasyCrop = (img: any) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState<number | number[]>(1);
  const [croppedImage, setCroppedImage] = useState(null);

  const onClose = useCallback(() => {
    setCroppedImage(null);
  }, []);

  return (
    <div>
      <div className="container">
        <div className="crop-container">
          <Cropper
            image={img}
            crop={crop}
            zoom={zoom as number}
            zoomSpeed={4}
            maxZoom={3}
            zoomWithScroll={true}
            showGrid={true}
            aspect={4 / 3}
            onCropChange={setCrop}
            onZoomChange={setZoom}
          />
        </div>
        <div className="controls">
          <label>
            Zoom
            <Slider
              value={zoom}
              min={1}
              max={3}
              step={0.1}
              aria-labelledby="zoom"
              onChange={(e, zoom) => setZoom(zoom)}
              className="range"
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default EasyCrop;
