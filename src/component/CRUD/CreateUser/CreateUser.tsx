import React, { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";

export const CreateUser = ({ addUser }: any) => {
  const initialState = {
    id: null,
    name: "",
    email: "",
  };
  const [user, setUser] = useState(initialState);

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const onSubmitForm = (event: any) => {
    event.preventDefault();
    if (!user.name || !user.email) return;
    addUser(user);
    setUser(initialState);
    console.log(user);
  };
  return (
    <React.Fragment>
      <Card border="primary">
        <Card.Body>
          <h3>Create User</h3>
          <Form onSubmit={onSubmitForm}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                name="name"
                value={user.name}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Email"
                name="email"
                value={user.email}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </React.Fragment>
  );
};
