import React from "react";

export const About = (props: any) => {
  return (
    <div>
      <p>Hey! {props?.name}</p>
      <p>Your age is {props?.age}</p>
      <hr />
      <b>Education :</b>
      <p>Degree: {props?.education?.degree}</p>
      <p>Collage: {props?.education?.collage}</p>
      <p>Year: {props?.education?.passing_year}</p>
    </div>
  );
};
