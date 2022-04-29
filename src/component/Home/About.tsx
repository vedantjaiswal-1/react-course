import React from "react";

export const About = (props: any) => {
  {
    /* Conditional rendering with if statement */
  }

  const isEighteen = () => {
    if (props?.age >= 18) {
      return <p>You can drive vehicle</p>;
    } else {
      return <p>Sorry, You cannot drive vehicle.</p>;
    }
  };
  return (
    <div>
      <p>{isEighteen()}</p>
      
      {/* Conditional rendering  with ternary operator*/}
      {props?.age >= 18 ? (
        <p>You can Vote!</p>
      ) : (
        <p>Sorry, You cannot Vote.shdjshfjkdhsfh</p>
      )}

      {/* Short-circuit evaluation */}
      {props?.age >= 18 && <p>Vote Please</p>}
    </div>
  );
};
