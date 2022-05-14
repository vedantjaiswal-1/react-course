import React, { useEffect, useState } from "react";
import { Button, Card, Table } from "react-bootstrap";
import UserService from "../../Service/UserService";

export const ViewUser = ({ users, editUser, deleteUser }: any) => {
  return (
    <React.Fragment>
      <Card border="secondary">
        <Card.Body>
          <h3>View User</h3>
          <Table bordered hover>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users?.map((item: any, index: number) => {
                return (
                  <tr key={item?._id}>
                    <td>{index + 1}</td>
                    <td>{item?.name}</td>
                    <td>{item?.email}</td>
                    <td>
                      <>
                        <Button
                          variant="outline-success"
                          size="sm"
                          onClick={() => {
                            editUser(item);
                            console.log(item?._id)
                          }}
                        >
                          Edit
                        </Button>{" "}
                        <Button 
                          variant="outline-danger" 
                          size="sm" 
                          onClick={() => deleteUser(item._id)}>
                          Delete
                        </Button>
                      </>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </React.Fragment>
  );
};
