import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Stack from "@mui/material/Stack";
import "../components/button/button.css";
import "typeface-rasa";
import BasicTable from "../components/table/Table";
import { table } from "../components/table/style";
import { TableCell, TableRow, Typography } from "@mui/material";

export default {
  title: "Example/Table",
  component: BasicTable,
} as ComponentMeta<typeof BasicTable>;

const colums1 = ["Date", "From", "To", "Driver", "Rating", "Cost", "Report"];
const colums2 = ["Date", "From", "To", "Client", "Cost"];
const colums3 = ["Date", "Comment", "Driver", "Client", "Car", "Action"];
const colums4 = ["FirstName", "LastName", "Email", "Car", "Action"];

export const Actions: ComponentStory<typeof BasicTable> = () => (
  <Stack spacing={2} maxWidth={1627}>
    <BasicTable width={1627} columns={colums1}>
      <TableRow sx={table.box.row}>
        <TableCell
          sx={table.box.cell}
          component="th"
          scope="row"
          align="center"
        >
          <Typography sx={table.text.simple}>01.11.2021</Typography>
        </TableCell>
        <TableCell sx={table.box.cell} align="center">
          <Typography sx={table.text.simple}>Chkalova street, 28/3</Typography>
        </TableCell>
        <TableCell sx={table.box.cell} align="center">
          <Typography sx={table.text.simple}>Lenina 53</Typography>
        </TableCell>
        <TableCell sx={table.box.cell} align="center">
          {/* <Button label="Car" sx={buttonStyle.round.blackSmall} /> */}
        </TableCell>
        <TableCell sx={table.box.cell} align="center">
          <Typography sx={table.text.simple}>7.8</Typography>
        </TableCell>
        <TableCell sx={table.box.cell} align="center">
          <Typography sx={table.text.simple}>$ 4.2</Typography>
        </TableCell>
        <TableCell sx={table.box.cell} align="center">
          <Typography sx={table.text.simple}>Strlochka</Typography>
        </TableCell>
      </TableRow>
    </BasicTable>
    <BasicTable width={1136} columns={colums2}>
      <TableRow sx={table.box.row}>
        <TableCell
          sx={table.box.cell}
          component="th"
          scope="row"
          align="center"
        >
          <Typography sx={table.text.simple}>01.11.2021</Typography>
        </TableCell>
        <TableCell sx={table.box.cell} align="center">
          <Typography sx={table.text.simple}>Chkalova street, 28/3</Typography>
        </TableCell>
        <TableCell sx={table.box.cell} align="center">
          <Typography sx={table.text.simple}>Lenina 53</Typography>
        </TableCell>
        <TableCell sx={table.box.cell} align="center">
          <Typography sx={table.text.simple}>Ivan Ivanov</Typography>
        </TableCell>
        <TableCell sx={table.box.cell} align="center">
          <Typography sx={table.text.simple}>$ 4.2</Typography>
        </TableCell>
      </TableRow>
    </BasicTable>
    <BasicTable width={1312} columns={colums3}>
      <TableRow sx={table.box.row}>
        <TableCell
          sx={table.box.cell}
          component="th"
          scope="row"
          align="center"
        >
          <Typography sx={table.text.simple}>01.11.2021</Typography>
        </TableCell>
        <TableCell sx={table.box.cell} align="center">
          <Typography sx={table.text.simple}>comment</Typography>
        </TableCell>
        <TableCell sx={table.box.cell} align="center">
          <Typography sx={table.text.simple}>Ivan Ivanov</Typography>
        </TableCell>
        <TableCell sx={table.box.cell} align="center">
          <Typography sx={table.text.simple}>Ivan Ivanov</Typography>
        </TableCell>
        <TableCell sx={table.box.cell} align="center">
          {/* <Button label="Car" sx={buttonStyle.round.blackSmall} /> */}
        </TableCell>
        <TableCell sx={table.box.cell} align="center">
          <Typography sx={table.text.simple}>.......</Typography>
        </TableCell>
      </TableRow>
    </BasicTable>
    <BasicTable width={1235} columns={colums4}>
      <TableRow sx={table.box.row}>
        <TableCell
          sx={table.box.cell}
          component="th"
          scope="row"
          align="center"
        >
          <Typography sx={table.text.simple}>Ivan</Typography>
        </TableCell>
        <TableCell sx={table.box.cell} align="center">
          <Typography sx={table.text.simple}>Ivanov</Typography>
        </TableCell>
        <TableCell sx={table.box.cell} align="center">
          <Typography sx={table.text.simple}>Ivanov123@mail.ru</Typography>
        </TableCell>
        <TableCell sx={table.box.cell} align="center">
          {/* <Button label="Car" sx={buttonStyle.round.blackSmall} /> */}
        </TableCell>
        <TableCell sx={table.box.cell} align="center">
          {/* <Button label="Block" sx={buttonStyle.round.redSmall} /> */}
        </TableCell>
      </TableRow>
    </BasicTable>
  </Stack>
);
