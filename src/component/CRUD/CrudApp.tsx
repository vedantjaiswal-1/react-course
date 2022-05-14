import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import UserService from "../Service/UserService";
import { CreateUser } from "./CreateUser/CreateUser";
import { EditUser } from "./EditUser/EditUser";
import { ViewUser } from "./ViewUser/ViewUser";

export const CrudApp = () => {
  const initialState = { id: null, name: "", email: "" };

  const [users, setUsers] = useState([]);
  const [editing, setEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState(initialState);

  const loadUser = () => {
    UserService.listUser()
      .then((response: any) => {
        setUsers(response);
      })
      .catch((error: any) => {
        console.log(error);
      });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const addUser = (user: any) => {
    UserService.createUser(user)
      .then((response: any) => {
        loadUser();
        console.log(response);
      })
      .catch((error: any) => {
        console.log(error);
      });
  };

  const editUser = (user: any) => {
    setEditing(true);
    setCurrentUser({ id: user?._id, name: user?.name, email: user?.email });
  };

  const updateUser = (id: any, user: any) => {
    setEditing(false);
    UserService.updateUser(id, user)
      .then((response: any) => {
        loadUser();
        console.log(response);
      })
      .catch((error: any) => {
        console.log(error);
      });
  };

  const deleteUser = (id: any) => {
    UserService.deleteUser(id)
      .then((response: any) => {
        loadUser();
        console.log(response);
      })
      .catch((error: any) => {
        console.log(error);
      });
  };

  return (
    <Container>
      <Row>
        <Col lg={4}>
          {editing ? (
            <EditUser setEditing={setEditing} currentUser={currentUser} updateUser={updateUser} />
          ) : (
            <CreateUser addUser={addUser} />
          )}
        </Col>
        <Col lg={8}>
          <ViewUser users={users} editUser={editUser} deleteUser={deleteUser} />
        </Col>
      </Row>
    </Container>
  );
};
