import React from "react";
import { About } from "./Home/About";
import { Header } from "./Home/Header";

export const Home = () => {
  const age = 24;
  const education = {
    degree: "B.E",
    collage: "Amity University",
    passing_year: 2020,
  };

  return (
    <div>
      <Header />
      <div>
        <About name="Tony" age={age} education={education} />
      </div>
    </div>
  );
};
