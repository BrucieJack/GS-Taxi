import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { table as tableStyle } from "./style";

interface IProps {
  columns: string[];
  children: React.ReactNode;
}

export default function BasicTable(props: IProps) {
  return (
    <TableContainer component={Paper}>
      <Table
        sx={{
          bgcolor: "rgba(196, 162, 103, 0.7)",
        }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            {props.columns.map((column) => (
              <TableCell key={column} sx={{ border: 1, borderColor: "black" }}>
                <Typography sx={tableStyle.text.title}>{column}</Typography>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>{props.children}</TableBody>
      </Table>
    </TableContainer>
  );
}
