import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "../services/AuthService";
import { orderApi } from "../services/OrderService";
import { userApi } from "../services/UserService";
import authReducer from "./reducers/AuthSlice";
import userReducer from "./reducers/UserSlice";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [orderApi.reducerPath]: orderApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    auth: authReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([
      authApi.middleware,
      orderApi.middleware,
      userApi.middleware,
    ]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
