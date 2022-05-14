import React, { useState, useEffect } from "react";
import { Card, Button, FormGroup, FormLabel, FormControl, FormText } from "react-bootstrap";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const UserSchema = Yup.object().shape({
  name: Yup.string().min(2, "Too short!").max(50, "Too Long!").required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required")
});

export const EditUser = ({ currentUser, updateUser, setEditing }: any) => {
  const [user, setUser] = useState(currentUser);

  useEffect(() => {
    setUser(currentUser);
  }, [currentUser]);

  return (
    <React.Fragment>
      <Card border="primary">
        <Card.Body>
          <h3>Update User</h3>
          <Formik
            initialValues={currentUser}
            validationSchema={UserSchema}
            onSubmit={(values, actions) => {
              updateUser(user?.id, values);
              actions.resetForm({});
              console.log(values);
            }}
          >
            {({ values, handleChange }) => (
              <Form>
                <FormGroup className="mb-3" controlId="formBasicName">
                  <FormLabel>Name</FormLabel>
                  <FormControl
                    type="text"
                    placeholder="Enter name"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                  />
                  <ErrorMessage name="name" component="div" className="text-danger small" />
                </FormGroup>
                <FormGroup className="mb-3" controlId="formBasicEmail">
                  <FormLabel>Email</FormLabel>
                  <FormControl
                    type="email"
                    placeholder="Enter Email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                  />
                  <ErrorMessage name="email" component="div" className="text-danger small" />
                </FormGroup>
                <Button variant="primary" type="submit">
                  Update
                </Button>{" "}
                <Button variant="secondary" onClick={() => setEditing(false)}>
                  Cancel
                </Button>
              </Form>
            )}
          </Formik>
        </Card.Body>
      </Card>
    </React.Fragment>
  );
};
