import React, { useState } from "react";
import { FaMagento } from "react-icons/fa";
import "../../css/Navbar.css";
import "react-bootstrap";
import { Menu1 } from "../../Components/Navbar/Menu1";
import { Link } from "react-router-dom";
// import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";
// import Fade from "@mui/material/Fade";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  // const [anchorEl, setAnchorEl] = React.useState(null);
  // const open = Boolean(anchorEl);
  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };
  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  return (
    <nav className="navbarItems">
      <Link to="/">
        <h3
          className="navbar-logo"
          style={{ textDecoration: "solid underline white" }}
        >
          <FaMagento style={{ marginRight: "10px" }} />
          Citizencare.com
        </h3>
      </Link>

      <div className="menu-icons" onClick={() => setIsMobile(!isMobile)}>
        <i className={isMobile ? "fas fa-times" : "fas fa-bars"}></i>
      </div>

      {/* <ul onClick={() => setIsMobile(false)} className={isMobile ? "nav-links-mobile" : "nav-links"}> */}

      <ul className={isMobile ? "nav-menu active" : "nav-menu"}>
        {Menu1.map((item, index) => {
          return (
            <>
              <li key={index}>
                <Link className={item.cName} to={item.url} id={item.id}>
                  <i className={item.icon}></i>
                  {item.title}
                </Link>
              </li>
            </>
          );
        })}

        {/* <i className="fa-solid fa-user"> */}
        {/* <i
          id="fade-button"
          className="fa-solid fa-circle-user"
          style={{
            cursor: "pointer",
            fontSize: "32px",
            marginRight: "10px",
            marginLeft: "20px",
          }}
          aria-controls={open ? "fade-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        ></i>
        <Menu
          id="fade-menu"
          MenuListProps={{
            "aria-labelledby": "fade-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}
        >
          <MenuItem
            onClick={handleClose}
            style={{
              display: "block",
              justifyContent: "space-between",
              flexDirection: "column",
              marginLeft:'auto',
              backgroundColor: "white",

            }}
          >
            {Dropmenu2.map((item, index) => {
              return (
                <>
                  <MenuItem key={index} items={item}>
                    <Link to={item.url} id={item.id} className="drop-menu">
                      <i
                        className={item.icon}
                        style={{ marginRight: "10px" }}
                      ></i>
                      {item.title}
                    </Link>
                  </MenuItem>
                </>
              );
            })}
          </MenuItem> */}
          {/* <MenuItem onClick={handleClose} className='drops'>
            <Link to="/login"  className='drop-menu'>
              <i
                className="fa-solid fa-plus"
                style={{ marginRight: "10px" }}
              ></i>
              Sign Up
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link to="/registration" className='drop-menu'>
              <i
                className="fa-solid fa-arrow-right-to-bracket"
                style={{ marginRight: "10px" }}
              ></i>
              Sign In
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose} >
            <Link to="/profile" className='drop-menu'>
              <i
                className="fa-solid fa-user"
                style={{ marginRight: "10px" }}
              ></i>
              Profile
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link to="/dashboards" className='drop-menu'>
              <i
                class="fa-solid fa-border-none"
                style={{ marginRight: "10px" }}
              ></i>
              Dashboard
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link to=".." className='drop-menu'>
              <i
                class="fa fa-sign-out"
                aria-hidden="true"
                style={{ marginRight: "10px" }}
              ></i>
              Logout
            </Link>
          </MenuItem> */}
        {/* </Menu> */}
      </ul>
    </nav>
  );
};

export default Navbar;
