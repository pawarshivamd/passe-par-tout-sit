import { Box, Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import { ReactComponent as Logo } from "../../assets/img/logo.svg";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import { useSelector, useDispatch } from "react-redux";
import { fetchCartDetails } from "../../Redux/Thunks/cartThunk";
import { fetchUserDetails, userLogout } from "../../Redux/Thunks/userThunk";
import { jwtDecode as jwt_decode } from "jwt-decode";
// import { Notification } from "react-notification-system";
import Notification from "../../utils/Notification";

const Navbar = () => {
  const [showLogo, setShowLogo] = useState(false);
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [FixedNavbar, setFixedNavbar] = useState();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { cartData = {} } = useSelector((state) => state.cart);

  const token = localStorage.getItem("auth_token");

  useEffect(() => {
    if (token) {
      dispatch(fetchCartDetails());
      dispatch(fetchUserDetails());
    }
  }, [dispatch]);

  const handleNavLinkClick = (event, to) => {
    event.preventDefault();
    handleNavLink(to);
  };

  const handleNavLink = (to) => {
    setOpen(false);
    navigate(to);
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
        dispatch(userLogout(navigate));
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
            <NavLink to="/">
              {(!isHomepage || showLogo) && <Logo width={70} />}
            </NavLink>
          </Box>
          <Box sx={{ ml: "auto" }}>
            <Box
              className={`menun-section ${
                open ? "menu-visible" : "menu-hidden"
              }  `}
            >
              <Box className="nav-list-group">
                <NavLink
                  onClick={(event) => handleNavLinkClick(event, "/")}
                  className={`nav-list ${
                    location.pathname === "/" ? "active" : ""
                  }`}
                  color="primary"
                  to="/"
                >
                  Home
                </NavLink>
                <NavLink
                  onClick={(event) => handleNavLinkClick(event, "/shop")}
                  className={`nav-list ${
                    location.pathname === "/shop" ? "active" : ""
                  }`}
                  to="shop"
                >
                  Shop
                </NavLink>
                {token ? (
                  <NavLink
                    onClick={(event) =>
                      handleNavLinkClick(event, "/shopping-bag")
                    }
                    className={`nav-list ${
                      location.pathname === "/shopping-bag" ? "active" : ""
                    }`}
                    to="shopping-bag"
                  >
                    Shopping Bag (
                    {cartData && cartData.cart_items
                      ? cartData.cart_items.length
                      : "0"}
                    )
                  </NavLink>
                ) : (
                  <Link
                    className="nav-list "
                    onClick={() =>
                      Notification("info", "Please login to Continue")
                    }
                    to={"/login"}
                  >
                    Shopping Bag
                  </Link>
                )}

                {token ? (
                  <NavLink
                    onClick={(event) => handleNavLinkClick(event, "/profile")}
                    className={`nav-list ${
                      location.pathname === "/profile" ? "active" : ""
                    }`}
                    to="/profile"
                  >
                    My Account
                  </NavLink>
                ) : (
                  <NavLink
                    onClick={(event) => handleNavLinkClick(event, "/login")}
                    className={`nav-list ${
                      location.pathname === "/login" ? "active" : ""
                    }`}
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
