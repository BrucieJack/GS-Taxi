/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useEffect, useState } from "react";
import { useAppDispatch } from "@hooks/redux";
import { useLazyGetUsersQuery, userApi } from "@services/UserService";
import { Field, Form, Formik } from "formik";
import { TField } from "@components/inputs/TField";
import Header from "@components/header/Header";
import { Box } from "@mui/material";
import BasicTable from "@components/table/Table";
import { IUser } from "@model/IUser";
import { Pagination } from "@components/pagination/Pagination";
import { PageSize } from "@components/pagination/PageSize";
import { NewCircularProgress } from "@pages/ClientOrderHistory/components";
import {
  AcceptSmallButton,
  BlackSmallButton,
  CancelSmallButton,
  LongGreenButton,
  LongRedButton,
} from "@components/button/components";
import BasicModal from "@components/modal/BasicModal";
import LockIcon from "@mui/icons-material/Lock";
import {
  AcceptModal,
  BlockDateModal,
  BlockModal,
  CarModal,
} from "@components/modal/components";
import {
  AdminDriverColumns,
  AdminClientColumns,
} from "@components/table/consts";
import {
  BlockBox,
  BlockText,
  Cell,
  FormBox,
  Line,
  LockBox,
  OrderHistoryBox,
  Row,
  TableBox,
  Text,
  Title,
  TitleBox,
} from "./components";
import "typeface-rasa";
import {
  AcceptText,
  ButtonBox,
  CarBox,
  CarImg,
  InfoText,
  ItemText,
  TextBox,
  ValueText,
} from "@pages/currentOrder/components";
import { useRole } from "@hooks/useRole";

const AllUsers = () => {
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
  const handleClientClick = () => {
    setPage(1);
    setIsDriver(false);
  };
  const handleDriverClick = () => {
    setPage(1);
    setIsDriver(true);
  };
  const [modalId, setModalId] = useState("");

  //Block
  const [openBlock, setOpenBlock] = useState(false);
  const handleOpenBlock = (id: string) => {
    setModalId(id);
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

  //DateBlock
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

  //OpenId
  const [openId, setOpenId] = useState("");
  const handleLockOpen = (id: string) => {
    if (openId === id) {
      setOpenId("");
    } else {
      setOpenId(id);
    }
  };

  //Unblock
  const [openUnblock, setOpenUnblock] = useState(false);
  const handleOpenUnblock = (id: string) => {
    setModalId(id);
    setOpenUnblock(true);
  };
  const handleCloseUnblock = () => {
    setOpenUnblock(false);
  };
  const handleUnblock = (id: string) => {
    dispatch(
      userApi.endpoints.blockUser.initiate({ id: id, data: { blocked: false } })
    );
    setOpenUnblock(false);
  };

  //Modal
  const [open, setOpen] = useState(false);
  const [carModal, setCarModal] = useState({
    make: "",
    model: "",
    year: 0,
    color: "",
    photo: "",
  });
  const handleOpen = (user: IUser) => {
    if (user.car) {
      setCarModal({
        make: user.car.make,
        model: user.car.model,
        year: user.car.year,
        color: user.car.color,
        photo: user.car.photo,
      });
    }
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  //
  const [getUsers, { data, isLoading }] = useLazyGetUsersQuery();
  useEffect(() => {
    if (isDriver) {
      getUsers({ role: "driver", page: page - 1, size });
    } else {
      getUsers({ role: "client", page: page - 1, size });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDriver, data, page, size]);
  useRole("admin");

  return (
    <OrderHistoryBox>
      <Header />
      <BasicModal open={isLoading} handleClose={undefined}>
        <NewCircularProgress size={"15rem"} />
      </BasicModal>
      <TitleBox>
        <Title onClick={handleClientClick}>Clients</Title>
        <Title onClick={handleDriverClick}>Drivers</Title>
        <PageSize size={size} handleChange={handleSizeChange} />
      </TitleBox>
      <TitleBox>
        <Line isDriver={isDriver} />
      </TitleBox>
      <TableBox isDriver={isDriver}>
        <BasicTable
          columns={isDriver ? AdminDriverColumns : AdminClientColumns}
        >
          {data?.items.map((user: IUser) => (
            <Row key={user.id}>
              <Cell component="th" scope="row" align="center">
                <LockBox>
                  {user.blocked && (
                    <LockIcon
                      sx={{ mr: 1, mt: 1 }}
                      onClick={() => handleLockOpen(user.id)}
                    />
                  )}
                  <Text>{user.firstName}</Text>
                </LockBox>
                {openId === user.id && (
                  <BlockBox>
                    <BlockText>
                      User is blocked until{" "}
                      {new Date(user.blockedUntil!).toLocaleDateString()}
                    </BlockText>
                  </BlockBox>
                )}
              </Cell>
              <Cell align="center">
                <Text>{user.lastName}</Text>
              </Cell>
              <Cell align="center">
                <Text>{user.email}</Text>
              </Cell>
              {isDriver && (
                <Cell align="center">
                  <>
                    <BlackSmallButton onClick={() => handleOpen(user)}>
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
              )}
              <Cell align="center">
                {user.blocked ? (
                  <AcceptSmallButton onClick={() => handleOpenUnblock(user.id)}>
                    Unblock
                  </AcceptSmallButton>
                ) : (
                  <CancelSmallButton onClick={() => handleOpenBlock(user.id)}>
                    Block
                  </CancelSmallButton>
                )}
                <BasicModal open={openUnblock} handleClose={handleCloseUnblock}>
                  <AcceptModal>
                    <AcceptText>
                      Are you sure you want to unblock client?
                    </AcceptText>
                    <ButtonBox>
                      <LongRedButton onClick={handleCloseUnblock}>
                        Cancel
                      </LongRedButton>
                      <LongGreenButton onClick={() => handleUnblock(modalId)}>
                        OK
                      </LongGreenButton>
                    </ButtonBox>
                  </AcceptModal>
                </BasicModal>
                <BasicModal open={openBlock} handleClose={handleCloseBlock}>
                  <BlockModal>
                    <InfoText>Block {isDriver ? "driver" : "client"}</InfoText>
                    <ButtonBox>
                      <LongRedButton
                        onClick={() => handlePermanentBlock(modalId)}
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
                        handleDateBlock(modalId, Date.parse(values.date));
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
        {data?.total && (
          <Pagination
            page={page}
            handleClick={handlePageChange}
            size={Math.ceil(data?.total / size)}
          />
        )}
      </TableBox>
    </OrderHistoryBox>
  );
};

export default AllUsers;
