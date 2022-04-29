import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";


const ul = document.createElement('ul');
const li = document.createElement('li');

ul.appendChild(li);

li.appendChild(document.createTextNode('Home'));

export const Home = () => {
  return (
    <div>
      <Header />
      <div>
        <ul className="App-header">
          <li>Home</li>
          <li>Addition 2 + 2 = {2 + 2}</li>
        </ul>
      </div>
      <Footer />
    </div>
  );
};
