import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/login/Login";
import { Register } from "./pages/register/Register";
import { ClientHome } from "./pages/clientHome/ClientHome";
import { CreateOrder } from "./pages/createOrder/CreateOrder";
import { CarPhoto } from "./pages/carPhoto/CarPhoto";
import { ActiveOrders } from "./pages/activeOrders/ActiveOrders";
import { DriverOrderHstory } from "./pages/DriverOrderHitory/DriverOrderHistory";
import { CurrentOrder } from "./pages/currentOrder/CurrentOrder";
import { ActiveTrip } from "./pages/activeTrip/ActiveTrip";
import { ClientOrderHistory } from "./pages/ClientOrderHistory/ClientOrderHistory";
import { DriverHome } from "./pages/driverHome/DriverHome";

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
      {/* <Route path="/admin" element={}>
        <Route index element={} />
        <Route path="reports" element={} />
        <Route path="allUsers" element={} />
      </Route> */}
    </Routes>
  );
}

export default App;
