import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";

function App() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(count + 1);
  }

  function handleDecrement() {
    setCount(count - 1);
  }

  return (
    <div className="App mt-2 d-flex flex-column align-items-center">
      <div>
        <Button
          className="mx-2"
          onClick={handleIncrement}
          variant="primary"
          size="lg"
        >
          +
        </Button>
        <Button onClick={handleDecrement} variant="secondary" size="lg">
          -
        </Button>
      </div>
      <h2>{count}</h2>
    </div>
  );
}

export default App;
