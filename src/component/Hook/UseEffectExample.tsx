import React, { useState, useEffect } from "react";

export const UseEffectExample = () => {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setCount((count) => count + 1);
  //   }, 1000);
  // });

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  }, []); // <- Add empty bracket here

  useEffect(() => {
    setCalculation(() => count * 2);
  }, [count]); //<- Add count variable
  
  return (
    <div>
      <p className="App-link">Count is: {count}</p>
      <button onClick={() => setCount((event: any) => event + 1)}>Add</button>
      <p>Calculation: {calculation}</p>
    </div>
  );
};
