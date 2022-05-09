import React, { useState, useEffect } from "react";
import { Card, Form, Button } from "react-bootstrap";

export const EditUser = ({ currentUser, updateUser, setEditing }: any) => {
  const [user, setUser] = useState(currentUser);

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const onSubmitForm = (event: any) => {
    event.preventDefault();
    updateUser(user.id, user);
    console.log(user);
  };

  useEffect(() => {
    setUser(currentUser)
  }, [currentUser])

  return (
    <React.Fragment>
      <Card border="primary">
        <Card.Body>
          <h3>Update User</h3>
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
              Update
            </Button>{" "}
            <Button variant="secondary" onClick={() => setEditing(false)}>
              Cancel
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </React.Fragment>
  );
};
