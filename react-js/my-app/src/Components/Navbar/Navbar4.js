import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Avatar, Menu, MenuItem, Tooltip } from "@mui/material";
import logo1 from "../../images/image.png";

const drawerWidth = 240;
const navItems = ["Home", "About", "Service", "Contact"];
const settings = ["Login", "Logout"];

function Navbar4(props) {
  const { window, children } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      display="flex"
      flexDirection="column"
      sx={{ textAlign: "center" }}
    >
      <Box display="flex" mx="auto">
        <Box height="50px" width="50px">
          {/* <img
            src={logo1}
            style={{ height: "100%", width: "100%" }}
            alt="img"
          /> */}
           <Typography
                sx={{marginLeft:'-50px',textAlign: "center",fontSize:'27px',fontWeight:'600'}}>
                Citizencare
              </Typography>
        </Box>
      </Box>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" style={{ backgroundColor: "white",color:'black' }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 3, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            sx={{
              width: "100%",
              justifyContent: { md: "space-between", xs: "none" },
              display: "flex",
            }}
          >
            <Box display="flex" >
              <Box
                height="50px"
                width="240px"
                display={{ xs: "none", md: "flex" }}
              >
                <img
                  src={logo1}
                  style={{ height: "100%", width: "100%" }}
                  alt="img2"
                />
              </Box>
            </Box>
            <Box
              sx={{
                display: { xs: "none", sm: "flex" },
                mx: { md: "auto", xs: "0" },
              }}
            >
              {navItems.map((item) => (
                <Button key={item} sx={{ color: "black" }}>
                  {item}
                </Button>
              ))}
            </Box>
            <Box sx={{ flexGrow: 0, ml: "auto" }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp"/>
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "4px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" width="100%">
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}

Navbar4.propTypes = {
  window: PropTypes.func,
};

export default Navbar4;
