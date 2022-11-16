import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

interface IProps {
  columns: string[];
  children: React.ReactNode;
}

export default function BasicTable(props: IProps) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {props.columns.map((column) => (
              <TableCell>{column}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>{props.children}</TableBody>
      </Table>
    </TableContainer>
  );
}
