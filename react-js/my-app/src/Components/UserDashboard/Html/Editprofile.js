import React from "react";
import { Form, Col, Row, Button } from "react-bootstrap";
import { Typography } from "antd";
import { Link } from "react-router-dom";
import "../css/EditInfo.css";
import "../css/ChangePassword.css";

const Editprofile = () => {
  return (
    <div className="mainDiv2">
      <div className="cardStyle2">
        <div className="edit-icon">
          <Typography.Title
            level={6}
            style={{
              margin: "10px 0px",
              marginRight: "2rem",
              fontFamily: "Poppins",
              fontSize: "30px",
            }}
          >
            Edit Profile
          </Typography.Title>
          <i
            className="fa-solid fa-pen-to-square"
            style={{
              fontSize: "30px",
              padding: "10px 10px",
              borderRadius: "6px",
              cursor: "Pointer",
            }}
          ></i>
        </div>

        <Form className="read">
          <Row className="mb-4">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label className="label">First Name</Form.Label>
              <Form.Control
                className="value"
                type="text"
                placeholder="First Name"
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label className="label">Last Name</Form.Label>
              <Form.Control
                className="value"
                type="text"
                placeholder="Last Name"
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group className="mb-3" as={Col} controlId="formGridAddress1">
              <Form.Label className="label">Address</Form.Label>
              <Form.Control
                style={{ width: "100%" }}
                as="textarea"
                type="text"
                className="value"
                placeholder="Address"
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label className="label">Phone no</Form.Label>
              <Form.Control className="value" type="text" placeholder="+91 " />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label className="label">City</Form.Label>
              <Form.Control className="value" type="text" placeholder="City" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label className="label">Pincode</Form.Label>
              <Form.Control className="value" type="text" placeholder="U.S.A" />
            </Form.Group>
          </Row>

          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label className="label">Profile Picture</Form.Label>
            <Form.Control
              type="file"
              className="value"
              style={{ width: "100%" }}
            />
          </Form.Group>

          <Link to="/Buyerdash/Personalinfo">
            <Button
              style={{ marginTop: "20px", padding: "8px 50px", float: "left" }}
            >
              Edit
            </Button>
          </Link>
        </Form>
      </div>
    </div>
  );
};

export default Editprofile;
