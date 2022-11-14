import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Stack from "@mui/material/Stack";
import "../components/button/button.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button } from "../components/button/Button";
import BasicModal from "../components/modal/BasicModal";
import { Formik, Form, Field } from "formik";
import { TField } from "../components/inputs/TField";
import { button as buttonStyle } from "../components/button/style";
import { field as inputStyle } from "../components/inputs/style";
import { modal as modalStyle } from "../components/modal/style";

export default {
  title: "Example/Modal",
  component: BasicModal,
} as ComponentMeta<typeof BasicModal>;

export const Auth: ComponentStory<typeof BasicModal> = () => (
  <Stack spacing={2} maxWidth={300}>
    <BasicModal sx={modalStyle.box.long}>
      <Typography sx={modalStyle.text.simpleText}>
        Are you sure you want to accept the offer from Ivan Ivanov?
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button label="Cancel" sx={buttonStyle.round.redMedium} />
        <Button label="Ok" sx={buttonStyle.round.greenMedium} />
      </Box>
    </BasicModal>
    <BasicModal sx={modalStyle.box.date}>
      <Typography sx={modalStyle.text.block}>Block client</Typography>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
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
                type="date"
                component={TField}
                sx={inputStyle.input}
              />
            </Form>
          )}
        </Formik>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-evenly", mt: 5 }}>
        <Button label="Back" sx={buttonStyle.round.redLong} />
        <Button label="Accept" sx={buttonStyle.round.greenLong} />
      </Box>
    </BasicModal>
    <BasicModal sx={modalStyle.box.price}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          mt: 7,
        }}
      >
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
      <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
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

      <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
        <Button label="Cancel" sx={buttonStyle.round.redMedium} />
        <Button label="Ok" sx={buttonStyle.round.greenMedium} />
      </Box>
    </BasicModal>
    <BasicModal sx={modalStyle.box.img}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          mt: 5,
        }}
      >
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
          <Typography
            sx={{
              fontSize: 64,
              fontFamily: "Rasa",
              fontWeight: 700,
              lineHeight: 1,
              textAlign: "center",
              color: "#C4A267",
            }}
          >
            Info
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              mt: 2,
            }}
          >
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
    </BasicModal>
  </Stack>
);
