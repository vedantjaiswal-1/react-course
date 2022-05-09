import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

export const About = (props: any) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [gender, setGender] = useState("male");
  const [terms, setTerms] = useState(false);

  const handleSubmit = (event: any) => {
    event?.preventDefault();
    alert(
      `Name: ${name} \nEmail: ${email} \nMessage: ${message} \nGender: ${gender} \nTerms: ${terms}`
    );
  };
  return (
    <div>
      <Container fluid>
        <Row>
          <Col lg={4}></Col>
          <Col lg={4}>
            <Card className="mt-4">
              <Card.Body>
                <h3>Contact us</h3>
                <Form onSubmit={handleSubmit}>
                  {/*Adding forms*/}
                  {/* <label>Name </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                  />
                  <p/>
                  <Button type="submit">Submit</Button> */}

                  {/* Forms with react-bootstrap */}
                  <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter name"
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter Email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicMessage">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Message"
                      value={message}
                      onChange={(event) => setMessage(event.target.value)}
                    />
                  </Form.Group>

                  {/* select Field*/}
                  <Form.Label>Gender</Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    className="mb-3"
                    value={gender}
                    onChange={(event) => setGender(event.target.value)}
                  >
                    <option>Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </Form.Select>

                  {/* Checkbox Field*/}
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                      type="checkbox"
                      label="I agree to the Terms and Conditions"
                      onChange={() => setTerms(!terms)}
                    />
                  </Form.Group>

                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
