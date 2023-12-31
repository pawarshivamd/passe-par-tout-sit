import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ShoppingBag from "./views/ShoPppingbag/ShoppingBag";
import Login from "./views/auth/Login";
import Home from "./views/Home/Home";
import Shop from "./views/Shop/Shop";
import Navbar from "./views/Navbar/Navbar";
import SingUp from "./views/auth/SingUp";
import ProductDetails from "./views/Shop/ProductDetails";
import AddressMain from "./views/address/AddressMain";
import SelectAddress from "./views/address/SelectAddress";
import ContactUs from "./views/Contact-us/ContactUs";
import Profile from "./views/profile/Profile";

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
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Navbar />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<SingUp />} />
            <Route path="/home" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/shop/new" element={<ProductDetails />} />
            <Route path="/shopping-bag" element={<ShoppingBag />} />
            <Route path="/address" element={<AddressMain />} />
            <Route path="/select-address" element={<SelectAddress />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
