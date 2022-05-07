import React from "react";
import { About } from "./Home/About";
import { Footer } from "./Home/Footer";
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
      <Footer />
    </div>
  );
};
