import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { Menu1 } from "../../Components/Navbar/Menu1";
import { NavLink } from "react-router-dom";
import log1 from "../../images/image.png";
import { useSelector } from "react-redux";
import Dropdown from "react-bootstrap/Dropdown";

const Navbar3 = () => {
  const getdata = useSelector((state) => state.cartreducer.carts);
  console.log(getdata);
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <NavLink to="/">
            <img
              src={log1}
              alt="img1"
              style={{
                height: "60px",
                width: "280px",
                marginTop: "-10px",
                marginLeft: "-10px",
              }}
            />
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="my-3"
            navscroll
            style={{ textAlign: "center" }}
          >
            <Nav className="mx-auto fw-semibold" style={{ fontSize: "22px" }}>
              {Menu1.map((item, index) => {
                return (
                  <>
                    <li className="nav-item ml-3" key={index}>
                      <NavLink
                        to={item.url}
                        id={item.id}
                        style={{
                          color: "black",
                          textDecoration: "2px solid white underline",
                        }}
                      >
                        {item.title}
                      </NavLink>
                    </li>
                  </>
                );
              })}
            </Nav>
            {/* <NavLink to="/registration"> */}
            <Dropdown>
              <Dropdown.Toggle id="dropdown-basic">Register</Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="/registration">Aa User</Dropdown.Item>
                <Dropdown.Item href="#/action-3">As Professional</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            {/* </NavLink> */}
            <NavLink to="/login">
              <Button variant="outline-dark ms-2">Login</Button>
            </NavLink>
            <NavLink to="/cart">
              <Button variant="outline-dark ms-2">
                cart({getdata.length})
              </Button>
            </NavLink>
            {/* <NavLink to="/profile"><Button variant="outline-dark ms-2">profile</Button></NavLink> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbar3;
