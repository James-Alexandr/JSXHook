import React, { useState } from "react";

function App() {
  let [count, setCount] = useState(0);
  const [one, two, three] = [1, 3, 88];

  console.log(three);

  function increase() {
    count++;
    setCount(count);
  }

  function deCrease() {
    count--;
    setCount(count);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
      <button onClick={deCrease}>-</button>
    </div>
  );
}

export default App;
