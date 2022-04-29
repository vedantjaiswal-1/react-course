import React from "react";

export const About = (props: any) => {
  const onSubmit = () => {
    alert("Welcome to the InXcode");
  };

  const onSubmitEvent = (value: any) => {
    alert(value);
  };

  return (
    <div>
      {/* using event */}
      <button onClick={onSubmit}>Click Here</button>

      <p />

      {/*Passing argument to the event*/}
      <button
        onClick={() => {
          onSubmitEvent("Passing argument Success");
        }}
      >
        Click me
      </button>
    </div>
  );
};
