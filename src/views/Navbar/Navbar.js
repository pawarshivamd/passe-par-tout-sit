import { Box, Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import logo from "../../assets/img/logo.png";
import { NavLink } from "react-router-dom";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import MenuIcon from "@mui/icons-material/Menu";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [FixedNavbar, setFixedNavbar] = useState();
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
      if (window.scrollY > 200) {
        setFixedNavbar(true);
      } else {
        setFixedNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav className={`navbar ${FixedNavbar ? "fixed-navbar" : ""}`}>
      <Container>
        <Box className="navbar-section">
          <Box>
            <img src={logo} alt="logo" />
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
                  to="/home"
                >
                  Home
                </NavLink>
                <NavLink className="nav-list" to="shop">
                  Shop
                </NavLink>
                <NavLink className="nav-list" to="shopping-bag">
                  Shopping Bag (0)
                </NavLink>
                <NavLink className="nav-list" to="/">
                  LOG IN
                </NavLink>
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
