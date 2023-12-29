import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import { createTheme, ThemeProvider } from "@mui/material/styles"
import ShoppingBag from './views/ShoPppingbag/ShoppingBag';
import Login from './views/auth/Login';
import Home from './views/Home/Home';
import Shop from './views/Shop/Shop';
import Navbar from './views/Navbar/Navbar';

export const theme = createTheme({
  palette: {
    primary: {
      main: "#EFC80C",
    },
    secondary: {
      main: "#FFFFFF",
    },
  },
})
function App() {
  return (
    <ThemeProvider theme={theme}>
    <BrowserRouter>
    <Navbar/>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/shope" element={<Shop />} />
            <Route path="/shopping-bag" element={<ShoppingBag/>} />
          </Routes>
        </Suspense>
    </BrowserRouter>
  </ThemeProvider>
  );
}

export default App;
