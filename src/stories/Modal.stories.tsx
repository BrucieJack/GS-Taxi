import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Stack from "@mui/material/Stack";
import "../components/button/button.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import BasicModal from "../components/modal/BasicModal";
import { Formik, Form, Field } from "formik";
import { TField } from "../components/inputs/TField";
import { field as inputStyle } from "../components/inputs/style";
import { modal as modalStyle } from "../components/modal/style";
import { Rating } from "@material-ui/core";

export default {
  title: "Example/Modal",
  component: BasicModal,
} as ComponentMeta<typeof BasicModal>;

export const Auth: ComponentStory<typeof BasicModal> = () => {
  const [value, setValue] = React.useState<number | null>(2);

  return (
    <Stack spacing={2} maxWidth={300}>
      {/* <BasicModal> */}
      <Typography sx={modalStyle.text.simpleText}>
        Are you sure you want to accept the offer from Ivan Ivanov?
      </Typography>
      <Box sx={modalStyle.insideBox.long[1]}>
        {/* <Button label="Cancel" sx={buttonStyle.round.redMedium} />
          <Button label="Ok" sx={buttonStyle.round.greenMedium} /> */}
      </Box>
      {/* </BasicModal>
      <BasicModal> */}
      <Typography sx={modalStyle.text.block}>Block client</Typography>
      <Box sx={modalStyle.insideBox.date[1]}>
        <Formik
          initialValues={{ date: "" }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ values }) => (
            <Form>
              <Field
                name="date"
                placeholder="Date"
                type="input"
                component={TField}
                sx={inputStyle.input}
              />
            </Form>
          )}
        </Formik>
      </Box>
      <Box sx={modalStyle.insideBox.date[2]}>
        {/* <Button label="Back" sx={buttonStyle.round.redLong} />
          <Button label="Accept" sx={buttonStyle.round.greenLong} /> */}
      </Box>
      {/* </BasicModal>
      <BasicModal> */}
      <Box sx={modalStyle.insideBox.price[1]}>
        <Box>
          <Typography sx={modalStyle.text.item}>Who:</Typography>
          <Typography sx={modalStyle.text.item}>From:</Typography>
          <Typography sx={modalStyle.text.item}>To:</Typography>
        </Box>
        <Box>
          <Typography sx={modalStyle.text.value}>Vasya Pupkin</Typography>
          <Typography sx={modalStyle.text.value}>
            Chkalova street, 28/3
          </Typography>
          <Typography sx={modalStyle.text.value}>Lenina</Typography>
        </Box>
      </Box>
      <Typography sx={modalStyle.text.blue}>
        Please offer your price for order
      </Typography>
      <Box sx={modalStyle.insideBox.price[2]}>
        <Formik
          initialValues={{ price: "" }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ values }) => (
            <Form>
              <Field
                name="price"
                placeholder="Price"
                type="input"
                component={TField}
                sx={inputStyle.input}
              />
            </Form>
          )}
        </Formik>
      </Box>

      <Box sx={modalStyle.insideBox.price[3]}>
        {/* <Button label="Cancel" sx={buttonStyle.round.redMedium} />
          <Button label="Ok" sx={buttonStyle.round.greenMedium} /> */}
      </Box>
      {/* </BasicModal> */}
      {/* <BasicModal> */}
      <Box sx={modalStyle.insideBox.img[1]}>
        <Box
          component="img"
          sx={{
            height: 305.67,
            width: 463.8,
          }}
          alt="The house from the offer."
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
        />
        <Box>
          <Typography sx={modalStyle.text.info}>Info</Typography>
          <Box sx={modalStyle.insideBox.img[2]}>
            <Box sx={{ mr: 8 }}>
              <Typography sx={modalStyle.text.item}>Make:</Typography>
              <Typography sx={modalStyle.text.item}>Model:</Typography>
              <Typography sx={modalStyle.text.item}>Year:</Typography>
              <Typography sx={modalStyle.text.item}>Color:</Typography>
            </Box>
            <Box>
              <Typography sx={modalStyle.text.value}>Chevrolet</Typography>
              <Typography sx={modalStyle.text.value}>Camaro</Typography>
              <Typography sx={modalStyle.text.value}>2020</Typography>
              <Typography sx={modalStyle.text.value}>Yellow</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      {/* </BasicModal> */}
      {/* <BasicModal sx={modalStyle.box.rate}> */}
      <Typography sx={modalStyle.text.simpleText}>Rate Driver</Typography>
      <Rating
        name="half-rating"
        precision={0.5}
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        sx={modalStyle.rating}
      />
      <Box sx={modalStyle.insideBox.rate[1]}>
        <Formik
          initialValues={{ rate: "" }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ values }) => (
            <Form>
              <Field
                name="rate"
                placeholder=""
                type="text"
                component={TField}
                sx={inputStyle.longinput}
              />
            </Form>
          )}
        </Formik>
      </Box>
      <Box sx={modalStyle.insideBox.rate[2]}>
        {/* <Button label="Submit" sx={buttonStyle.round.submit} /> */}
      </Box>
      {/* </BasicModal> */}
    </Stack>
  );
};
