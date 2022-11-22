import React from "react";
import "./App.css";
import "./components/button/button.css";
import { Rating } from "@material-ui/core";
import { bgcolor } from "@material-ui/system";
import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/login/Login";
import { Register } from "./pages/register/Register";
import { ClientHome } from "./pages/clientHome/ClientHome";
import { CreateOrder } from "./pages/createOrder/CreateOrder";

function App() {
  return (
    <>
      <CreateOrder />
      {/* <ClientHome /> */}
    </>
    // <Header />
    // <Login />
    // <Register />
    // <Routes>
    //   <Route path="/" element={}>
    //     <Route index element={} />
    //     <Route path="login" element={<Login />} />
    //     <Route path="register" element={} />
    //     <Route path="createOrder" element={} />
    //     <Route path="ordersHistory" element={} />
    //   </Route>
    //   <Route path="/driver" element={}>
    //     <Route index element={} />
    //     <Route path="activeOrders" element={} />
    //     <Route path="ordersHistory" element={} />
    //     <Route path="activeTrip" element={} />
    //   </Route>
    //   <Route path="/admin" element={}>
    //     <Route index element={} />
    //     <Route path="reports" element={} />
    //     <Route path="allUsers" element={} />
    //   </Route>
    // </Routes>
  );
}

export default App;
