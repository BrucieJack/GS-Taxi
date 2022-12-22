import { tripApi } from "./../services/TripService";
import { offerApi } from "./../services/OfferService";
import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "../services/AuthService";
import { orderApi } from "../services/OrderService";
import { userApi } from "../services/UserService";
import authReducer from "./reducers/AuthSlice";
import userReducer from "./reducers/UserSlice";
<<<<<<< HEAD
import orderReducer from "./reducers/OrderSlice";
import { reportApi } from "../services/ReportService";
// import offerReducer from "./reducers/OfferSlice";
=======
>>>>>>> e754e5fedd262276f047e5bbc38b856560605ebd

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [orderApi.reducerPath]: orderApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
<<<<<<< HEAD
    [offerApi.reducerPath]: offerApi.reducer,
    [tripApi.reducerPath]: tripApi.reducer,
    [reportApi.reducerPath]: reportApi.reducer,
    auth: authReducer,
    user: userReducer,
    order: orderReducer,
    // offer: offerReducer,
=======
    auth: authReducer,
    user: userReducer,
>>>>>>> e754e5fedd262276f047e5bbc38b856560605ebd
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([
      authApi.middleware,
      orderApi.middleware,
      userApi.middleware,
<<<<<<< HEAD
      offerApi.middleware,
      tripApi.middleware,
      reportApi.middleware,
=======
>>>>>>> e754e5fedd262276f047e5bbc38b856560605ebd
    ]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
