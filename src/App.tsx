import "./App.css";
import * as React from "react";
import { Route, Routes } from "react-router-dom";
const Login = React.lazy(() => import("./pages/login/Login"));
const Register = React.lazy(() => import("./pages/register/Register"));
const ClientHome = React.lazy(() => import("./pages/clientHome/ClientHome"));
const CreateOrder = React.lazy(() => import("./pages/createOrder/CreateOrder"));
const CarPhoto = React.lazy(() => import("./pages/carPhoto/CarPhoto"));
const ActiveOrders = React.lazy(
  () => import("./pages/activeOrders/ActiveOrders")
);
const DriverOrderHstory = React.lazy(
  () => import("./pages/DriverOrderHitory/DriverOrderHistory")
);
const CurrentOrder = React.lazy(
  () => import("./pages/currentOrder/CurrentOrder")
);
const ActiveTrip = React.lazy(() => import("./pages/activeTrip/ActiveTrip"));
const ClientOrderHistory = React.lazy(
  () => import("./pages/ClientOrderHistory/ClientOrderHistory")
);
const DriverHome = React.lazy(() => import("./pages/driverHome/DriverHome"));
const AdminHome = React.lazy(() => import("@pages/adminHome/AdminHome"));
const AllUsers = React.lazy(() => import("@pages/allUsers/AllUsers"));
const Reports = React.lazy(() => import("@pages/reports/Reports"));

function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<ClientHome />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="createOrder" element={<CreateOrder />} />
        <Route path="currentOrder" element={<CurrentOrder />} />
        <Route path="activeTrip" element={<ActiveTrip />} />
        <Route path="ordersHistory" element={<ClientOrderHistory />} />
      </Route>
      <Route path="/driver">
        <Route index element={<CarPhoto />} />
        <Route path="activeOrders" element={<ActiveOrders />} />
        <Route path="ordersHistory" element={<DriverOrderHstory />} />
        <Route path="home" element={<DriverHome />} />
        {/* <Route path="activeTrip" element={} /> */}
      </Route>
      <Route path="/admin">
        <Route index element={<AdminHome />} />
        <Route path="reports" element={<Reports />} />
        <Route path="allUsers" element={<AllUsers />} />
      </Route>
    </Routes>
  );
}

export default App;
