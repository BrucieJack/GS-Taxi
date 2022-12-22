import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IOrder } from "../../model/IOrder";

interface IOrderState {
  order: IOrder | null;
}

const initialState: IOrderState = {
  order: null,
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setOrder: (state, action: PayloadAction<IOrder>) => {
      state.order = action.payload;
    },
  },
});

export default orderSlice.reducer;

export const { setOrder } = orderSlice.actions;
