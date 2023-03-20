// import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container";
// import Form from 'react-bootstrap/Form';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Menu1 } from "../../Components/Navbar/Menu1";
import { NavLink } from "react-router-dom";
import log1 from "../../images/image.png"
// import NavDropdown from 'react-bootstrap/NavDropdown';

function NavScrollExample() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid style={{ fontFamily: "Poppins", fontWeight: "500" }}>
        <Navbar.Brand href="#" style={{ fontSize: "28px" }}>
          <NavLink to="/"><img src={log1} alt="img1" 
          style={{ height:'60px',width:'300px',marginTop:'-10px',marginLeft:'0px'}}/></NavLink>
          {/* <span style={{ fontFamily:'Poppins',fontWeight:'600',fontSize:'2rem',padding:'40px 10px'}}></span> */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-5 my-lg-0"
            navbarScroll style={{fontSize: "17px", textAlign: "center"}}>
            {Menu1.map((item, index) => {
              return (
                <>
                  <li className="nav-item" key={index}>
                    <NavLink
                      to={item.url}
                      id={item.id}
                      style={{
                        color: "black",
                        marginLeft: "18px",
                        textDecoration: "2px solid white underline",
                      }}>
                      <i
                        className={item.icon}
                        style={{ margin: "20px 4px" }}></i>
                      {item.title}
                    </NavLink>
                  </li>
                </>
              );
            })}
            {/* <Nav.Link href="#action1"><i className="fa-solid fa-house-user mr-1"></i>Home</Nav.Link>
            <Nav.Link href="#action1"><i className="fa-solid fa-circle-info mr-1"></i>About</Nav.Link>
            <Nav.Link href="#action1"><i className="fa-solid fa-briefcase mr-1"></i>Service</Nav.Link>
            <Nav.Link href="#action1"><i className="fa-solid fa-address-book mr-1"></i>Contact</Nav.Link>
            <Nav.Link href="#action1">Register</Nav.Link>
            <Nav.Link href="#action2"><i className="fa-solid fa-user mr-1"></i>Login</Nav.Link> */}

            {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown> */}
            {/* <Nav.Link href="#" disabled>
              Link
            </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
