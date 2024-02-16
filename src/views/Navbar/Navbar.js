import { Box, Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import { ReactComponent as Logo } from "../../assets/img/logo.svg";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import { useSelector, useDispatch } from "react-redux";
import { fetchCartDetails } from "../../Redux/Thunks/cartThunk";
import { fetchUserDetails } from "../../Redux/Thunks/userThunk";
import { jwtDecode as jwt_decode } from "jwt-decode";
import { handleLogout } from "../../utils/constants";

const Navbar = () => {
  const [showLogo, setShowLogo] = useState(false);
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [FixedNavbar, setFixedNavbar] = useState();

  const dispatch = useDispatch();
  const naviagte = useNavigate();

  const { cartData = {} } = useSelector((state) => state.cart);
  // const userData = useSelector((state) => state.user);

  const token = localStorage.getItem("auth_token");

  useEffect(() => {
    if (token) {
      dispatch(fetchCartDetails());
      dispatch(fetchUserDetails());
    }
  }, [dispatch]);

  const handleNavLinkClick = () => {
    if (open) {
      setOpen(false);
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 2) {
        setFixedNavbar(true);
        setShowLogo(true);
      } else {
        setFixedNavbar(false);
        setShowLogo(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  useEffect(() => {
    if (token) {
      const decodedToken = jwt_decode(token);
      const currentTime = Date.now() / 1000;
      if (decodedToken.exp < currentTime) {
        handleLogout(naviagte);
        window.location.reload();
      }
    }
  }, [token]);

  const isHomepage = location.pathname === "/";
  return (
    <nav className={`navbar ${FixedNavbar ? "fixed-navbar" : ""} `}>
      <Container>
        <Box className="navbar-section">
          <Box>
            <Link to="/">
              {(!isHomepage || showLogo) && <Logo width={70} />}
            </Link>
          </Box>
          <Box sx={{ ml: "auto" }}>
            <Box
              className={`menun-section ${
                open ? "menu-visible" : "menu-hidden"
              }  `}
            >
              <Box className="nav-list-group">
                <NavLink
                  onClick={handleNavLinkClick}
                  className="nav-list"
                  color="primary"
                  to="/"
                >
                  Home
                </NavLink>
                <NavLink
                  onClick={handleNavLinkClick}
                  className="nav-list"
                  to="shop"
                >
                  Shop
                </NavLink>
                <NavLink
                  onClick={handleNavLinkClick}
                  className="nav-list"
                  to="shopping-bag"
                >
                  Shopping Bag (
                  {cartData && cartData.cart_items
                    ? cartData.cart_items.length
                    : "0"}
                  )
                </NavLink>

                {token ? (
                  <NavLink
                    onClick={handleNavLinkClick}
                    className="nav-list"
                    to="/profile"
                  >
                    My Account
                  </NavLink>
                ) : (
                  <NavLink
                    onClick={handleNavLinkClick}
                    className="nav-list"
                    to="/login"
                  >
                    LOG IN
                  </NavLink>
                )}
              </Box>
            </Box>
            <Box onClick={() => setOpen(!open)} className="icon-box">
              {open ? <CloseOutlinedIcon /> : <MenuIcon />}
            </Box>
          </Box>
        </Box>
      </Container>
    </nav>
  );
};

export default Navbar;
