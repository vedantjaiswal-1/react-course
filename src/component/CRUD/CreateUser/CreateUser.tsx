import React, { useState } from "react";
import { Card, Button, FormGroup, FormLabel, FormControl } from "react-bootstrap";
import {Formik, Form} from "formik";
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
            <FormGroup className="mb-3" controlId="formBasicName">
              <FormLabel>Name</FormLabel>
              <FormControl
                type="text"
                placeholder="Enter name"
                name="name"
                value={user.name}
                onChange={handleInputChange}
              />
            </FormGroup>

            <FormGroup className="mb-3" controlId="formBasicEmail">
              <FormLabel>Email</FormLabel>
              <FormControl
                type="email"
                placeholder="Enter Email"
                name="email"
                value={user.email}
                onChange={handleInputChange}
              />
            </FormGroup>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </React.Fragment>
  );
};
