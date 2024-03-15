import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ShoppingBag from "./views/ShoPppingbag/ShoppingBag";
import { Provider } from "react-redux";
import Login from "./views/auth/Login";
import ForgotPassword from "./views/auth/ForgotPassword";
import Home from "./views/Home/Home";
import Shop from "./views/Shop/Shop";
import Navbar from "./views/Navbar/Navbar";
import SingUp from "./views/auth/SingUp";
import ProductDetails from "./views/Shop/ProductDetails";
import AddressMain from "./views/address/AddressMain";
import SelectAddress from "./views/address/SelectAddress";
import ContactUs from "./views/Contact-us/ContactUs";
import Profile from "./views/profile/Profile";
import { store } from "./Redux/Store/Store";
import { NotificationContainer } from "react-notifications";
import PurchaseDetails from "./views/PurchaseDetails/PurchaseDetails";

// import Product from './layout/productModel/Product';

export const theme = createTheme({
  palette: {
    primary: {
      main: "#EFC80C",
    },
    secondary: {
      main: "#FFFFFF",
    },
  },
  typography: {
    fontFamily: ["PT Mono"].join(","),
  },
});
function App() {
  return (
    <Provider store={store}>
      <NotificationContainer />
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Navbar />
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<SingUp />} />
              <Route path="/forgotPassword" element={<ForgotPassword />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/shop/new/:productId" element={<ProductDetails />} />
              <Route path="/shopping-bag" element={<ShoppingBag />} />
              <Route path="/address" element={<AddressMain />} />
              <Route path="/address/:id" element={<AddressMain />} />
              <Route path="/select-address" element={<SelectAddress />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/profile" element={<Profile />} />
              <Route
                path="/purchase-details/:id"
                element={<PurchaseDetails />}
              />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
