import { Box, Container } from '@mui/material'
import React from 'react'
import logo from '../../assets/img/logo.png'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
<nav  className='navbar'>
<Container>
    <Box className="navbar-section">
        <Box>
            <img src={logo} alt='logo' />
        </Box>
        <Box sx={{ml:'auto'}}>
        <Box  className="nav-list-group">
            <NavLink className="nav-list" color='primary' to="/home">Home</NavLink>
            <NavLink className="nav-list" to="shop">Shop</NavLink>
            <NavLink className="nav-list" to="shopping-bag">Shopping Bag (0)</NavLink>
            <NavLink className="nav-list" to="/">LOG IN</NavLink>
        </Box>
        </Box>
    </Box>
</Container>
</nav>
  )
}

export default Navbar
