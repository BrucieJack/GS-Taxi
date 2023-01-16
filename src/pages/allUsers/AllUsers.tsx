import { useEffect, useState } from "react";
import { useAppDispatch } from "@hooks/redux";
import { useGetUsersMutation, userApi } from "@services/UserService";
import { Field, Form, Formik } from "formik";
import { TField } from "@components/inputs/TField";
import Header from "@components/header/Header";
import { Box } from "@mui/material";
import BasicTable from "@components/table/Table";
import {
  AcceptSmallButton,
  BlackSmallButton,
  CancelSmallButton,
  LongGreenButton,
  LongRedButton,
} from "@components/button/components";
import BasicModal from "@components/modal/BasicModal";
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
  Cell,
  FormBox,
  Line,
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
import { IUser } from "@model/IUser";

export const AllUsers = () => {
  const dispatch = useAppDispatch();
  const [isDriver, setIsDriver] = useState(true);
  const handleClientClick = () => {
    setIsDriver(false);
  };
  const handleDriverClick = () => {
    setIsDriver(true);
  };
  const [open, setOpen] = useState(false);
  const [modalId, setModalId] = useState("");
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

  const [users, setUsers] = useState(Array<IUser>);
  const [getUsers, { data, isLoading, isSuccess, error, isError }] =
    useGetUsersMutation();

  useEffect(() => {
    if (isDriver) {
      getUsers("driver");
    } else {
      getUsers("client");
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDriver, data]);

  useEffect(() => {
    if (isSuccess) {
      if (data) {
        setUsers(data);
      }
    } else if (isError) {
      console.log(error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  return (
    <OrderHistoryBox>
      <Header />
      <TitleBox>
        <Title onClick={handleClientClick}>Clients</Title>
        <Title onClick={handleDriverClick}>Drivers</Title>
      </TitleBox>
      <TitleBox>
        <Line isDriver={isDriver} />
      </TitleBox>
      <TableBox isDriver={isDriver}>
        <BasicTable
          columns={isDriver ? AdminDriverColumns : AdminClientColumns}
        >
          {users.map((user) => (
            <Row key={user.id}>
              <Cell component="th" scope="row" align="center">
                <>
                  <Text>{user.firstName}</Text>
                </>
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
                        // console.log(Date.parse(values.date));
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
      </TableBox>
    </OrderHistoryBox>
  );
};
