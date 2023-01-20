/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useEffect, useState } from "react";
import { useAppDispatch } from "@hooks/redux";
import { userApi } from "@services/UserService";
import { Field, Form, Formik } from "formik";
import { TField } from "@components/inputs/TField";
import { useLazyGetReportsQuery } from "@services/ReportService";
import { IReport } from "@model/IReport";
import Header from "@components/header/Header";
import { Box } from "@mui/material";
import BasicTable from "@components/table/Table";
import {
  BlackSmallButton,
  BlockButton,
  LongGreenButton,
  LongRedButton,
} from "@components/button/components";
import BasicModal from "@components/modal/BasicModal";
import {
  BlockDateModal,
  BlockModal,
  CarModal,
} from "@components/modal/components";
import { AdminReportColumns } from "@components/table/consts";
import { Pagination } from "@components/pagination/Pagination";
import { PageSize } from "@components/pagination/PageSize";
import { NewCircularProgress } from "@pages/ClientOrderHistory/components";
import {
  BlockBox,
  Cell,
  FormBox,
  Line,
  OrderHistoryBox,
  PaginationBox,
  Row,
  TableBox,
  Text,
  Title,
  TitleBox,
} from "./components";
import "typeface-rasa";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  ButtonBox,
  CarBox,
  CarImg,
  InfoText,
  ItemText,
  TextBox,
  ValueText,
} from "@pages/currentOrder/components";

export const Reports = () => {
  //Page
  const [page, setPage] = useState(1);
  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  //Size
  const [size, setSize] = useState(10);
  const handleSizeChange = (newSize: number) => {
    setSize(newSize);
  };

  const dispatch = useAppDispatch();
  const [isDriver, setIsDriver] = useState(true);
  const [openId, setOpenId] = useState({
    reportID: "",
    clientID: "",
    driverID: "",
  });

  const handleOpenId = (report: IReport) => {
    if (openId.reportID === report.id) {
      setOpenId({ reportID: "", clientID: "", driverID: "" });
    } else {
      setOpenId({
        reportID: report.id,
        clientID: report.client.id,
        driverID: report.driver.id,
      });
    }
  };

  const [open, setOpen] = useState(false);

  const [openBlock, setOpenBlock] = useState(false);
  const handleOpenBlock = (role: string) => {
    if (role === "driver") {
      setIsDriver(true);
    } else {
      setIsDriver(false);
    }
    setOpenBlock(true);
  };
  const handleCloseBlock = () => {
    setOpenBlock(false);
  };
  const handlePermanentBlock = (id: string) => {
    dispatch(
      userApi.endpoints.blockUser.initiate({ id: id, data: { blocked: true } })
    );
    setOpenBlock(false);
  };

  const [openBlockDate, setOpenBlockDate] = useState(false);
  const handleOpenDateBlock = () => {
    setOpenBlockDate(true);
  };
  const handleCloseDateBlock = () => {
    setOpenBlockDate(false);
  };
  const handleDateBlock = (id: string, date: number) => {
    dispatch(
      userApi.endpoints.blockUser.initiate({
        id: id,
        data: { blocked: true, blockedUntil: date },
      })
    );
    setOpenBlockDate(false);
  };

  const [carModal, setCarModal] = useState({
    make: "",
    model: "",
    year: 0,
    color: "",
    photo: "",
  });
  const handleOpen = (report: IReport) => {
    if (report.driver) {
      setCarModal({
        make: report.driver.car.make,
        model: report.driver.car.model,
        year: report.driver.car.year,
        color: report.driver.car.color,
        photo: report.driver.car.photo,
      });
    }
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const [getReports, { data, isLoading }] = useLazyGetReportsQuery();

  useEffect(() => {
    getReports({ page: page - 1, size });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, page, size]);

  return (
    <OrderHistoryBox>
      <Header />
      <BasicModal open={isLoading} handleClose={undefined}>
        <NewCircularProgress size={"15rem"} />
      </BasicModal>
      <TitleBox>
        <div>
          <Title>Reports</Title>
          <Line />
        </div>
        <PageSize size={size} handleChange={handleSizeChange} />
      </TitleBox>
      <TableBox>
        <BasicTable columns={AdminReportColumns}>
          {data?.items.map((report) => (
            <Row key={report.id}>
              <Cell component="th" scope="row" align="center">
                <Text>{new Date(report.createdAt!).toLocaleDateString()}</Text>
              </Cell>
              <Cell align="center">
                <Text>{report.comment}</Text>
              </Cell>
              <Cell align="center">
                <Text>
                  {report.driver?.firstName + " " + report.driver?.lastName}
                </Text>
              </Cell>
              <Cell align="center">
                <Text>
                  {report.client?.firstName + " " + report.client?.lastName}
                </Text>
              </Cell>
              <Cell align="center">
                <>
                  <BlackSmallButton onClick={() => handleOpen(report)}>
                    Car
                  </BlackSmallButton>
                  <BasicModal open={open} handleClose={handleClose}>
                    <CarModal>
                      <CarBox>
                        <Box sx={{ flexDirection: "column" }}>
                          <CarImg src={carModal.photo} />
                        </Box>
                        <Box>
                          <InfoText>Info</InfoText>
                          <TextBox>
                            <Box sx={{ mr: 8 }}>
                              <ItemText>Make:</ItemText>
                              <ItemText>Model:</ItemText>
                              <ItemText>Year:</ItemText>
                              <ItemText>Color:</ItemText>
                            </Box>
                            <Box>
                              <ValueText>{carModal.make}</ValueText>
                              <ValueText>{carModal.model}</ValueText>
                              <ValueText>{carModal.year}</ValueText>
                              <ValueText>{carModal.color}</ValueText>
                            </Box>
                          </TextBox>
                        </Box>
                      </CarBox>
                    </CarModal>
                  </BasicModal>
                </>
              </Cell>
              <Cell align="center">
                <MoreVertIcon onClick={() => handleOpenId(report)} />
                {openId.reportID === report.id && (
                  <BlockBox>
                    <BlockButton onClick={() => handleOpenBlock("driver")}>
                      Block driver
                    </BlockButton>
                    <BlockButton onClick={() => handleOpenBlock("client")}>
                      Block client
                    </BlockButton>
                  </BlockBox>
                )}
                <BasicModal open={openBlock} handleClose={handleCloseBlock}>
                  <BlockModal>
                    <InfoText>Block {isDriver ? "driver" : "client"}</InfoText>
                    <ButtonBox>
                      <LongRedButton
                        onClick={() =>
                          handlePermanentBlock(
                            isDriver ? openId.driverID : openId.clientID
                          )
                        }
                      >
                        Block permanently
                      </LongRedButton>
                      <LongRedButton onClick={handleOpenDateBlock}>
                        Block until
                      </LongRedButton>
                    </ButtonBox>
                  </BlockModal>
                </BasicModal>
                <BasicModal
                  open={openBlockDate}
                  handleClose={handleCloseDateBlock}
                >
                  <BlockDateModal>
                    <InfoText>Block {isDriver ? "driver" : "client"}</InfoText>
                    <Formik
                      initialValues={{ date: "" }}
                      onSubmit={(values) => {
                        // console.log(Date.parse(values.date));
                        handleDateBlock(
                          isDriver ? openId.driverID : openId.clientID,
                          Date.parse(values.date)
                        );
                        // handleSubmit(values);
                      }}
                    >
                      <Form>
                        <FormBox>
                          <Field
                            name="date"
                            placeholder="Date"
                            type="date"
                            component={TField}
                          />
                        </FormBox>
                        <ButtonBox>
                          <LongRedButton onClick={handleCloseDateBlock}>
                            Back
                          </LongRedButton>
                          <LongGreenButton type="submit">
                            Accept
                          </LongGreenButton>
                        </ButtonBox>
                      </Form>
                    </Formik>
                  </BlockDateModal>
                </BasicModal>
              </Cell>
            </Row>
          ))}
        </BasicTable>
        <PaginationBox>
          <Pagination page={page} handleClick={handlePageChange} />
        </PaginationBox>
      </TableBox>
    </OrderHistoryBox>
  );
};
