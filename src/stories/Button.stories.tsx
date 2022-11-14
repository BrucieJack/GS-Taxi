import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Stack from "@mui/material/Stack";
import "../components/button/button.css";

import { Button } from "../components/button/Button";
import { button as buttonStyle } from "../components/button/style";

import "typeface-rasa";

export default {
  title: "Example/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

export const Auth: ComponentStory<typeof Button> = () => (
  <Stack spacing={2} maxWidth={300}>
    <Button label="Login" sx={buttonStyle.auth.disabled} disabled />
    <Button label="Login" sx={buttonStyle.auth.active} />
    <Button label="Register" sx={buttonStyle.auth.disabled} disabled />
    <Button label="Register" sx={buttonStyle.auth.active} />
  </Stack>
);

export const RoundButtons: ComponentStory<typeof Button> = () => (
  <Stack spacing={2} maxWidth={300}>
    <Button label="Create order" sx={buttonStyle.round.brownBig} />
    <Button label="Order" sx={buttonStyle.round.brownBig} disabled />
    <Button label="Save" sx={buttonStyle.round.greenBig} />
    <Button label="Change photo" sx={buttonStyle.round.blackBig} />
    <Button label="Accept" sx={buttonStyle.round.greenSmall} />
    <Button label="Car" sx={buttonStyle.round.blackSmall} />
    <Button label="Block" sx={buttonStyle.round.redSmall} />
    <Button label="Accept" sx={buttonStyle.round.greenMediumAccept} />
    <Button label="Ok" sx={buttonStyle.round.greenMedium} />
    <Button label="Cancel" sx={buttonStyle.round.redMedium} />
    <Button label="Back" sx={buttonStyle.round.redLong} />
    <Button label="Accept" sx={buttonStyle.round.greenLong} />
  </Stack>
);
