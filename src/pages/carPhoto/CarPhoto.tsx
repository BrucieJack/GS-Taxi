import { useCallback, useState } from "react";
import picture from "./assets/picture.png";
import {
  BigGreenButton,
  BigGreyButton,
} from "../../components/button/components";
import Cropper, { Area } from "react-easy-crop";
import Header from "../../components/header/Header";
import { FileInput } from "../../components/inputs/components";
import "../../i18";
import {
  ButtonBox,
  Container,
  CropContainer,
  CropController,
  IMG,
  MBox,
  PhotoBox,
  PhotoPageBox,
  RowPhoto,
  SimpleText,
  Title,
} from "./components";
import { Box, Slider } from "@mui/material";
import getCroppedImg from "./cropImage";
<<<<<<< HEAD
import { useSetPhotoMutation } from "../../services/UserService";
import { useSelector } from "react-redux";
import React from "react";
=======
>>>>>>> e754e5fedd262276f047e5bbc38b856560605ebd

export const CarPhoto = () => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState<number | number[]>(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area>();
  const [img, setImg] = useState("");
<<<<<<< HEAD
  const state = useSelector((state: any | null) => state);

  const [setPhoto, { data, isLoading, isSuccess, error, isError }] =
    useSetPhotoMutation();

=======
>>>>>>> e754e5fedd262276f047e5bbc38b856560605ebd
  const onCropComplete = useCallback(
    (croppedArea: Area, croppedAreaPixels: Area) => {
      setCroppedAreaPixels(croppedAreaPixels);
    },
    []
  );
<<<<<<< HEAD

  const handleCrop = useCallback(async () => {
    try {
      const id = state.user.user.data.id;
      const croppedImage = await getCroppedImg(img, croppedAreaPixels!);
      setImg(String(croppedImage));

      let formdata = new FormData();
      formdata.append("file", croppedImage as Blob);
      const data = {
        file: formdata,
      };
      console.log("почалось");
      setPhoto({ id, data });
    } catch (e) {
      console.error(e);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [croppedAreaPixels]);

  React.useEffect(() => {
    if (isSuccess) {
      console.log("success");
    }

    if (isError) {
      console.log(error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  const handleImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImg(URL.createObjectURL(e.target.files[0]));
=======
  const handleCrop = useCallback(async () => {
    try {
      const croppedImage = await getCroppedImg(img, croppedAreaPixels!);
      console.log("donee", { croppedImage });
      setImg(String(croppedImage));
    } catch (e) {
      console.error(e);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [croppedAreaPixels]);

  const handleImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      console.log(URL.createObjectURL(e.target.files[0]));
      setImg(URL.createObjectURL(e.target.files[0]));
      console.log(img);
      //   let formData = new FormData();
      //   let image = e.target.files[0];
      //   console.log(formData.append("files", e.target.files[0]));
>>>>>>> e754e5fedd262276f047e5bbc38b856560605ebd
    }
  };

  return (
    <PhotoPageBox>
      <Header />
      <PhotoBox>
        <Title>Car photo</Title>
        <SimpleText>Please select photo of your car.</SimpleText>
        <SimpleText>IMPORTANT: You can upload photo only once!</SimpleText>
        <RowPhoto>
          {img !== "" && (
            <Box>
              <Container>
                <CropContainer>
                  <Cropper
                    image={img === "" ? picture : img}
                    crop={crop}
                    zoom={zoom as number}
                    zoomSpeed={4}
                    maxZoom={3}
                    zoomWithScroll={true}
                    showGrid={true}
                    aspect={3 / 2}
                    onCropChange={setCrop}
                    onZoomChange={setZoom}
                    onCropComplete={onCropComplete}
                  />
                </CropContainer>
                <CropController>
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
                </CropController>
              </Container>
            </Box>
          )}
          {img === "" && <IMG src={picture}></IMG>}
          <ButtonBox>
            <MBox>
              <BigGreyButton>
                {img === "" ? "Upload photo" : "Change photo"}
                <FileInput
                  type="file"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleImg(e)
                  }
                ></FileInput>
              </BigGreyButton>
            </MBox>
            <MBox>
              <BigGreenButton disabled={img === ""} onClick={handleCrop}>
                Save
              </BigGreenButton>
            </MBox>
          </ButtonBox>
        </RowPhoto>
      </PhotoBox>
    </PhotoPageBox>
  );
};
