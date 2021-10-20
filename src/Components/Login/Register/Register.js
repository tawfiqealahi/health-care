import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Register.css";
import { Col, Form, InputGroup, Button, Row } from "react-bootstrap";
import { GrGoogle } from "react-icons/gr";
import { GoMarkGithub } from "react-icons/go";
import MenuBar from "../../Header/Navbar/Navbar";
import { Link } from "react-router-dom";

function Register() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <>
      <MenuBar></MenuBar>
      <h1 className="text-center text-success pt-3 fw-bolder  ">
        Registration Form
      </h1>
      <p className="text-center pt-1">Already have an account? <Link to="/login"> Sign In  </Link> </p>

      <div className="full-form">
        <Form
          className=" form-body"
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
        >
          <Row className="">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>First name</Form.Label>
              <Form.Control required type="text" placeholder="First name" />
              <Form.Control.Feedback>
                {" "}
                <small>Looks good!</small>
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>Last name</Form.Label>
              <Form.Control required type="text" placeholder="Last name" />
              <Form.Control.Feedback>
                {" "}
                <small>Looks good!</small>
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
              <Form.Label>Username</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Username"
                  aria-describedby="inputGroupPrepend"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  <small>Please choose a username.</small>
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="7" controlId="validationCustom03">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                className="border border"
                required
                placeholder="email@example.com"
              />
              <Form.Control.Feedback type="invalid">
                <small>Please provide a valid email.</small>
              </Form.Control.Feedback>
            </Form.Group>
            
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationCustom03">
              <Form.Label>City</Form.Label>
              <Form.Control type="text" placeholder="City" required />
              <Form.Control.Feedback type="invalid">
                <small>Please provide a valid city.</small>
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom04">
              <Form.Label>State</Form.Label>
              <Form.Control type="text" placeholder="State" required />
              <Form.Control.Feedback type="invalid">
                <small>Please provide a valid state.</small>
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom05">
              <Form.Label>Zip</Form.Label>
              <Form.Control type="text" placeholder="Zip" required />
              <Form.Control.Feedback type="invalid">
                <small>Please provide a valid zip.</small>
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
          <Form.Group as={Col} md="7" controlId="validationCustom03">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" required placeholder="Password" />
              <Form.Control.Feedback type="invalid">
                <small>
                  Please provide a 6 length password with atleast a charecter
                  and a number.{" "}
                </small>
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
          <Form.Group as={Col} md="7" controlId="validationCustom03">
              <Form.Label>Re-Type Password</Form.Label>
              <Form.Control type="password" required placeholder="re-type Password" />
              <Form.Control.Feedback type="invalid">
                <small>
                  Please provide a 6 length password with atleast a charecter
                  and a number.{" "}
                </small>
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Form.Group className="mb-3">
            <Form.Check
              required
              label="Agree to terms and conditions"
              feedback="You must agree before submitting."
              feedbackType="invalid"
            />
          </Form.Group>
          <Row>
            <div className="col-md-4">
              <Button className=" d-flex justify-center " type="submit">
                Sign In
              </Button>
            </div>
            <div className="col-md-4 mt-1">
              {/* github button */}
              <Button
                className=" d-flex bg-success justify-center "
                type="submit"
              >
                {" "}
                <GoMarkGithub className=" m-1 mx-2 " /> Login with Github
              </Button>
            </div>
            <div className="col-md-4 mt-1">
              {/* google button */}
              <Button
                className=" d-flex bg-success justify-center "
                type="submit"
              >
                {" "}
                <GrGoogle className=" m-1 mx-2  " /> login with Google
              </Button>
            </div>
          </Row>
        </Form>
      </div>
    </>
  );
}

export default Register;
