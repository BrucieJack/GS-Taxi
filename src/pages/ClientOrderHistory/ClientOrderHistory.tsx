import Header from "../../components/header/Header";
import {
  Cell,
  Line,
  OrderHistoryBox,
  Row,
  TableBox,
  Text,
  Title,
} from "./components";
import "typeface-rasa";

import BasicTable from "../../components/table/Table";

const colums2 = ["Date", "From", "To", "Driver", "Rating", "Cost", "Report"];

//доделать

export const CliOrderHstory = () => {
  return (
    <OrderHistoryBox>
      <Header />
      <Title>Order’s History</Title>
      <Line />
      <TableBox>
        <BasicTable columns={colums2}>
          <Row>
            <Cell component="th" scope="row" align="center">
              <Text>01.11.2021</Text>
            </Cell>
            <Cell align="center">
              <Text>Chkalova street, 28/3</Text>
            </Cell>
            <Cell align="center">
              <Text>Lenina 53</Text>
            </Cell>
            <Cell align="center">
              <Text>7.8</Text>
            </Cell>
            <Cell align="center">
              <Text>$ 4.2</Text>
            </Cell>
            <Cell align="center">
              <Text>$ 4.2</Text>
            </Cell>
            <Cell align="center">
              <Text>report</Text>
            </Cell>
          </Row>
        </BasicTable>
      </TableBox>
    </OrderHistoryBox>
  );
};
