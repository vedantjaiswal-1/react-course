import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { CreateUser } from "./CreateUser/CreateUser";
import { EditUser } from "./EditUser/EditUser";
import { ViewUser } from "./ViewUser/ViewUser";

export const CrudApp = () => {
  const userData = [
    {
      id: 1,
      name: "Tony Stark",
      email: "tony@gmail.com",
    },
    {
      id: 2,
      name: "Tom Cruise",
      email: "tom@gmail.com",
    },
    {
      id: 3,
      name: "Robert Downey",
      email: "robert@gmail.com",
    },
  ];

  const initialState = { id: null, name: "", email: "" };

  const [users, setUsers] = useState(userData);
  const [editing, setEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState(initialState);

  const addUser = (user: any) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const editUser = (user: any) => {
    setEditing(true);
    setCurrentUser({ id: user?.id, name: user?.name, email: user?.email });
  };

  const updateUser = (id: any, updateUser: any) => {
    setEditing(false);
    setUsers(users.map((user: any) => (user.id === id ? updateUser : user)));
  };

  const deleteUser = (id: any) => {
    setUsers(users.filter((user: any) => user.id !== id))
  }

  return (
    <Container>
      <Row>
        <Col lg={4}>
          {editing ? (
            <EditUser
              setEditing={setEditing}
              currentUser={currentUser}
              updateUser={updateUser}
            />
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
