import React, { useState } from "react";
import { AppBar, Box, Divider, Drawer, IconButton, Toolbar, Typography } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../../images/logo.svg';

import '../../styles/Header.css';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  //toggle menu bar
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  }

  //drawer function
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography sx={{ flexGrow: 1, my: 2 }} color={"goldenrod"} variant="h6" component="div">
        <img src={Logo} alt="logo" height={"70px"} width={"200px"} />
      </Typography>

      <Divider />

      <ul className="mobile-nav-menu">
        <li><NavLink activeClassName="active" to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/about'}>About</NavLink></li>
        <li><NavLink to={'/menu'}>Menu</NavLink></li>
        <li><NavLink to={'/contact'}>Contact</NavLink></li>
      </ul>
    </Box>
  );

  return (
    <>
      <Box>
        <AppBar sx={{ bgcolor: "black" }} component={"nav"}>
          <Toolbar>
            <IconButton color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{
                mr: 2,
                display: { sm: "none" },
              }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Typography sx={{ flexGrow: 1 }} color={"goldenrod"} variant="h6" component="div">
              <img src={Logo} alt="logo" height={"70px"} width={"240px"} />
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <ul className="nav-menu">
                <li><NavLink activeClassName="active" to={'/'}>Home</NavLink></li>
                <li><NavLink to={'/about'}>About</NavLink></li>
                <li><NavLink to={'/menu'}>Menu</NavLink></li>
                <li><NavLink to={'/contact'}>Contact</NavLink></li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer variant="temporary" open={mobileOpen} onClose={handleDrawerToggle} sx={{ display: { xs: "block", sm: "none" }, "& .MuiDrawer-paper": { boxSizing: "border-box", width: "250px" } }}>
            {drawer}
          </Drawer>
        </Box>
        {/* content jate dkha jai tar jnno */}
        <Box>
          <Toolbar />
        </Box>

      </Box>
    </>
  )
}
export default Header;