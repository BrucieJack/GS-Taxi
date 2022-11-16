import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Stack from "@mui/material/Stack";
import "../components/button/button.css";
import "typeface-rasa";
import TransitionAlert from "../components/alert/TransitionAlert";
import { alert as alertStyle } from "../components/alert/style";

export default {
  title: "Example/TransitionAlert",
  component: TransitionAlert,
} as ComponentMeta<typeof TransitionAlert>;

export const Actions: ComponentStory<typeof TransitionAlert> = () => (
  <Stack spacing={2} maxWidth={300}>
    <TransitionAlert sx={alertStyle.color.green}>
      This is a success alert — check it out!
    </TransitionAlert>
    <TransitionAlert sx={alertStyle.color.yellow}>
      This is a success alert — check it out!
    </TransitionAlert>
    <TransitionAlert sx={alertStyle.color.red}>
      This is a success alert — check it out!
    </TransitionAlert>
  </Stack>
);
