import React from "react";
import { CrudApp } from "./CRUD/CrudApp";
import { Header } from "./Home/Header";

export const Home = () => {
  return (
    <div>
      <Header />
      <div>
        <CrudApp />
      </div>
    </div>
  );
};
