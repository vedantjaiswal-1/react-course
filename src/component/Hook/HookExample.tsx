import React, { useState } from "react";

export const HookExample = () => {
    const [count, setCount] = useState(0);
  return (
    <div>
      <p className="App-link">Count is: {count}</p>
      
      <button onClick={() => setCount(1)}>One</button>

      <button onClick={() => setCount(2)}>Two</button>

      <button onClick={() => setCount(3)}>Three</button>
    </div>
  );
};
