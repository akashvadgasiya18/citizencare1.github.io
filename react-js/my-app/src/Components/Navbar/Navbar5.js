import React, { useState } from "react";
import "./Drawer.css";
import "./Toolbar.css";
import { Menu1 } from "../Navbar/Menu1";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import log1 from "../../images/Logo1.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import { useSelector } from "react-redux";
import "animate.css";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import { Avatar } from "@mui/material";

const Navbar5 = (props) => {
  const loggedIn = window.localStorage.getItem("isLoggedIn");
  const providerIn = window.localStorage.getItem("isProvider");
  const adminIn = window.localStorage.getItem("isAdmin");
  const [open, setOpen] = useState(false);

  const [hide, setHide] = useState(false);
  console.log(hide);

  const getdata = useSelector((state) => state.cartreducer.carts);
  let drawerClasses = "side-drawer";
  if (open) {
    drawerClasses = "side-drawer opens";
  }

  const RnderMenu = () => {
    // console.log(loggedIn);
    if (loggedIn) {
      return (
        <>
          <div className="two-btn-appbar">
            {open ? null : (
              <>
                <div className="cart-icns">
                  <Link to="/cart">
                    <Badge
                      badgeContent={getdata.length}
                      color="secondary"
                      style={{ marginRight: "20px", marginTop: "10px" }}
                    >
                      <ShoppingCartIcon color="action" />
                    </Badge>
                  </Link>

                  <PopupState variant="popover" popupId="demo-popup-menu">
                    {(popupState) => (
                      <React.Fragment>
                        <Avatar
                          src="/broken-image.jpg"
                          {...bindTrigger(popupState)}
                          style={{ cursor: "pointer" }}
                        />
                        <Menu {...bindMenu(popupState)}>
                          <MenuItem onClick={popupState.close}>
                            <Link
                              to="/profile"
                              style={{ textDecoration: "none", color: "black" }}
                            >
                              <i class="fa-solid fa-user mr-2"></i>Profile
                            </Link>
                          </MenuItem>
                          <MenuItem onClick={popupState.close}>
                            <Link
                              to="/logout"
                              style={{ textDecoration: "none", color: "black" }}
                            >
                              <i class="fa-solid fa-right-from-bracket mr-2"></i>
                              Logout
                            </Link>
                          </MenuItem>
                        </Menu>
                      </React.Fragment>
                    )}
                  </PopupState>
                </div>
              </>
            )}
          </div>

          <div className="burger_menu">
            <i
              class="fa-solid fa-bars"
              style={{ color: "black", fontSize: "25px", cursor: "pointer" }}
              onClick={() => setOpen(true) || setHide(false)}
            ></i>
          </div>
        </>
      );
    } else if (providerIn) {
      return (
        <>
          <div className="two-btn-appbar">
            {open ? null : (
              <>
                <PopupState variant="popover" popupId="demo-popup-menu">
                  {(popupState) => (
                    <React.Fragment>
                      <Avatar
                        src="/broken-image.jpg"
                        {...bindTrigger(popupState)}
                        style={{ cursor: "pointer" }}
                      />
                      <Menu {...bindMenu(popupState)}>
                        <MenuItem onClick={popupState.close}>
                          <Link
                            to="/providerDash"
                            style={{ textDecoration: "none", color: "black" }}
                          >
                            <i class="fa-solid fa-user mr-2"></i>ProviderDash
                          </Link>
                        </MenuItem>
                        <MenuItem onClick={popupState.close}>
                          <Link
                            to="/logout"
                            style={{ textDecoration: "none", color: "black" }}
                          >
                            <i class="fa-solid fa-right-from-bracket mr-2"></i>
                            Logout
                          </Link>
                        </MenuItem>
                      </Menu>
                    </React.Fragment>
                  )}
                </PopupState>
              </>
            )}
          </div>

          <div className="burger_menu">
            <i
              class="fa-solid fa-bars"
              style={{ color: "black", fontSize: "25px", cursor: "pointer" }}
              onClick={() => setOpen(true) || setHide(false)}
            ></i>
          </div>
        </>
      );
    } else if (adminIn) {
      return (
        <>
          <div className="two-btn-appbar">
            {open ? null : (
              <>
                <PopupState variant="popover" popupId="demo-popup-menu">
                  {(popupState) => (
                    <React.Fragment>
                      <Avatar
                        src="/broken-image.jpg"
                        {...bindTrigger(popupState)}
                        style={{ cursor: "pointer" }}
                      />
                      <Menu {...bindMenu(popupState)}>
                        <MenuItem onClick={popupState.close}>
                          <Link
                            to="/dashmain"
                            style={{ textDecoration: "none", color: "black" }}
                          >
                            <i class="fa-solid fa-user mr-2"></i>Dashboard
                          </Link>
                        </MenuItem>
                        <MenuItem onClick={popupState.close}>
                          <Link
                            to="/logout"
                            style={{ textDecoration: "none", color: "black" }}
                          >
                            <i class="fa-solid fa-right-from-bracket mr-2"></i>
                            Logout
                          </Link>
                        </MenuItem>
                      </Menu>
                    </React.Fragment>
                  )}
                </PopupState>
              </>
            )}
          </div>

          <div className="burger_menu">
            <i
              class="fa-solid fa-bars"
              style={{ color: "black", fontSize: "25px", cursor: "pointer" }}
              onClick={() => setOpen(true) || setHide(false)}
            ></i>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="two-btn-appbar">
            <Link to="/cart">
              <Badge
                badgeContent={getdata.length}
                color="secondary"
                style={{ marginRight: "20px", marginTop: "10px" }}
              >
                <ShoppingCartIcon color="action" />
              </Badge>
            </Link>
            <Link to="/registration">
              <Button variant="outline-dark mr-2">Register</Button>
            </Link>
            <Link to="/login">
              <Button variant="outline-dark">Login</Button>
            </Link>
          </div>

          <div className="burger_menu">
            <i
              class="fa-solid fa-bars"
              style={{ color: "black", fontSize: "25px", cursor: "pointer" }}
              onClick={() => setOpen(true) || setHide(false)}
            ></i>
          </div>
        </>
      );
    }
  };

  return (
    <>
      <div style={{ height: "100%" }}>
        <header className="toolbar">
          <nav className="toolbar_navigation" style={{ position: "sticky" }}>
            <div className="toolbar_logo">
              {" "}
              <span
                style={{
                  fontSize: "37px",
                  fontWeight: "600",
                  color: " #007C80",
                }}
              >
                Citizen
              </span>
              <span
                style={{
                  fontSize: "32px",
                  fontWeight: "800",
                  color: "#8A3E8C",
                }}
              >
                care
              </span>
            </div>
            <div className="toolbar_navigation_items">
              <ul>
                {Menu1.map((item, index) => {
                  return (
                    <>
                      <li className="nav-item ml-2" key={index}>
                        <Link
                          to={item.url}
                          className={item.cName}
                          style={{
                            fontFamily: "poppins",
                          }}
                        >
                          {item.title}
                        </Link>
                      </li>
                    </>
                  );
                })}
              </ul>
            </div>
            <RnderMenu />
          </nav>
        </header>

        {open ? (
          <>
            <nav className={drawerClasses}>
              <i
                class="fa-solid fa-xmark animate__animated animate__fadeInDown"
                style={{
                  color: "black",
                  fontSize: "30px",
                  padding: "4% 10%",
                  cursor: "pointer",
                }}
                onClick={() => setHide(true) || setOpen(false)}
              ></i>

              <ul>
                {Menu1.map((item, index) => {
                  return (
                    <>
                      <li
                        className="nav-item ml-3 animate__animated animate__fadeInDown"
                        key={index}
                      >
                        <Link
                          to={item.url}
                          className={item.cName}
                          style={{
                            fontFamily: "poppins",
                          }}
                        >
                          {item.title}
                        </Link>
                      </li>
                    </>
                  );
                })}
                {loggedIn ? (
                  <>
                    <Link to="/cart">
                      <Badge
                        badgeContent={getdata.length}
                        color="secondary"
                        style={{ marginRight: "20px", marginTop: "10px" }}
                      >
                        <ShoppingCartIcon color="action" />
                      </Badge>
                    </Link>

                    <PopupState variant="popover" popupId="demo-popup-menu">
                      {(popupState) => (
                        <React.Fragment>
                          <Avatar
                            src="/broken-image.jpg"
                            {...bindTrigger(popupState)}
                            style={{
                              cursor: "pointer",
                              marginTop: "20px",
                              marginRight: "20px",
                            }}
                          />
                          <Menu {...bindMenu(popupState)}>
                            <MenuItem onClick={popupState.close}>
                              <Link
                                to="/profile"
                                style={{
                                  textDecoration: "none",
                                  color: "black",
                                }}
                              >
                                <i class="fa-solid fa-user mr-2"></i>Profile
                              </Link>
                            </MenuItem>
                            <MenuItem onClick={popupState.close}>
                              <Link
                                to="/logout"
                                style={{
                                  textDecoration: "none",
                                  color: "black",
                                }}
                              >
                                <i class="fa-solid fa-right-from-bracket mr-2"></i>
                                Logout
                              </Link>
                            </MenuItem>
                          </Menu>
                        </React.Fragment>
                      )}
                    </PopupState>
                  </>
                ) : providerIn ? (
                  <>
                    <PopupState variant="popover" popupId="demo-popup-menu">
                      {(popupState) => (
                        <React.Fragment>
                          <Avatar
                            src="/broken-image.jpg"
                            {...bindTrigger(popupState)}
                            style={{
                              cursor: "pointer",
                              marginTop: "20px",
                              marginRight: "20px",
                            }}
                          />
                          <Menu {...bindMenu(popupState)}>
                            <MenuItem onClick={popupState.close}>
                              <Link
                                to="/providerDash"
                                style={{
                                  textDecoration: "none",
                                  color: "black",
                                }}
                              >
                                <i class="fa-solid fa-user mr-2"></i>
                                ProviderDash
                              </Link>
                            </MenuItem>
                            <MenuItem onClick={popupState.close}>
                              <Link
                                to="/logout"
                                style={{
                                  textDecoration: "none",
                                  color: "black",
                                }}
                              >
                                <i class="fa-solid fa-right-from-bracket mr-2"></i>
                                Logout
                              </Link>
                            </MenuItem>
                          </Menu>
                        </React.Fragment>
                      )}
                    </PopupState>
                  </>
                ) : adminIn ? (
                  <>
                    <PopupState variant="popover" popupId="demo-popup-menu">
                      {(popupState) => (
                        <React.Fragment>
                          <Avatar
                            src="/broken-image.jpg"
                            {...bindTrigger(popupState)}
                            style={{
                              cursor: "pointer",
                              marginTop: "20px",
                              marginRight: "20px",
                            }}
                          />
                          <Menu {...bindMenu(popupState)}>
                            <MenuItem onClick={popupState.close}>
                              <Link
                                to="/dashmain"
                                style={{
                                  textDecoration: "none",
                                  color: "black",
                                }}
                              >
                                <i class="fa-solid fa-user mr-2"></i>Dashboard
                              </Link>
                            </MenuItem>
                            <MenuItem onClick={popupState.close}>
                              <Link
                                to="/logout"
                                style={{
                                  textDecoration: "none",
                                  color: "black",
                                }}
                              >
                                <i class="fa-solid fa-right-from-bracket mr-2"></i>
                                Logout
                              </Link>
                            </MenuItem>
                          </Menu>
                        </React.Fragment>
                      )}
                    </PopupState>
                  </>
                ) : (
                  <>
                    <div style={{ display: "grid" }}>
                      <Link to="/cart">
                        <Badge
                          badgeContent={getdata.length}
                          color="secondary"
                          style={{ marginLeft: "20px", marginTop: "10px" }}
                        >
                          <ShoppingCartIcon color="action" />
                        </Badge>
                      </Link>
                      <Link to="/registration">
                        <Button
                          variant="outline-dark"
                          style={{ marginTop: "14px" }}
                        >
                          Register
                        </Button>
                      </Link>
                      <Link to="/login">
                        <Button variant="outline-dark my-3">Login</Button>
                      </Link>
                    </div>
                  </>
                )}
              </ul>
            </nav>
          </>
        ) : null}
      </div>
    </>
  );
};

export default Navbar5;
