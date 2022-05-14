import React, { useState } from "react";
import { Card, Button, FormGroup, FormLabel, FormControl, FormText } from "react-bootstrap";
import { Formik, Form } from "formik";
import * as Yup from "yup";

const UserSchema = Yup.object().shape({
  name: Yup.string().min(2, "Too short!").max(50, "Too Long!").required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required")
});

export const CreateUser = ({ addUser }: any) => {
  const initialState = {
    id: null,
    name: "",
    email: ""
  };

  const onSubmitForm = (values: any) => {
    addUser(values)
  };  

  return (
    <React.Fragment>
      <Card border="primary">
        <Card.Body>
          <h3>Create User</h3>
          <Formik
            initialValues={initialState}
            validationSchema={UserSchema}
            onSubmit={(values, actions) => {
              onSubmitForm(values);
              actions.resetForm({});
              console.log(values);
            }}
          >
            {({ errors, touched, values, handleChange }) => (
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
                  {errors.name && touched.name ? <FormText className="text-danger">{errors.name}</FormText> : null}
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
                  {errors.email && touched.email ? <FormText className="text-danger">{errors.email}</FormText> : null}
                </FormGroup>

                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            )}
          </Formik>
        </Card.Body>
      </Card>
    </React.Fragment>
  );
};
