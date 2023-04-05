import React, { useState } from "react";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";
import img1 from "../../AdminDashboard/Html/demo.webp";
import { Hidden } from "@mui/material";
import { FaBars } from "react-icons/fa";
import Offcanvas from "react-bootstrap/Offcanvas";
import "../../AdminDashboard/css/sidemenu.css";
import Slidebar from "./Slidebar";
import { useNavigate } from "react-router-dom";

const UserHeader = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    navigate("/logout");
  };
  const [show, setShow] = useState(false);

  const handlesClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <AppBar style={{ backgroundColor: "darkslateblue" }}>
        <Toolbar
          style={{
            display: "flex",
            flexFlow: "row wrap",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h6">Citizencare</Typography>

          <Hidden mdDown>
            <Button
              style={{ color: "white" }}
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <Avatar src={img1} />
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </Hidden>
          <Hidden mdUp>
            <IconButton>
              <FaBars style={{ color: "white" }} onClick={handleShow} />
            </IconButton>
          </Hidden>
        </Toolbar>
      </AppBar>
      <Offcanvas
        show={show}
        onHide={handlesClose}
        style={{ marginTop: "50px", maxWidth: "19rem" }}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title
            style={{
              margin: "0px 20px",
              fontFamily: "Poppins",
              fontSize: "20px",
              fontWeight: "600",
            }}
          >
            Citizencare
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Slidebar />
        </Offcanvas.Body>
      </Offcanvas>
      ;
    </>
  );
};

export default UserHeader;
